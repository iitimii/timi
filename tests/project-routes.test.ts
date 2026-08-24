import assert from "node:assert/strict";
import test from "node:test";

import React from "react";
import { renderToStaticMarkup } from "react-dom/server";

import { projects } from "../config/projects";
import { getProject } from "../lib/portfolio";

test("every project slug resolves and exposes accessible media text", () => {
  for (const project of projects) {
    assert.equal(getProject(project.id), project);
    assert.ok(project.title.length > 0);
    assert.match(project.image, /^\/projects\//);
    assert.ok(project.summary.trim().length > 0);
  }
});

test("project collection includes expected kinds", () => {
  assert.deepEqual(
    Array.from(new Set(projects.map(({ kind }) => kind))).sort(),
    ["Machine Learning", "Research", "Robotics"]
  );
});

test("project collection filters expose all four views", async () => {
  const collection =
    await import("../components/projects/project-collection").catch(() => null);

  assert.ok(collection);
  const markup = renderToStaticMarkup(
    React.createElement(collection.default)
  );
  assert.match(markup, /role="group"/);
  assert.doesNotMatch(markup, /role="toolbar"/);
  assert.deepEqual(collection.projectFilters, [
    "All",
    "Research",
    "Robotics",
    "Machine Learning",
  ]);
  assert.deepEqual(
    collection.filterProjects("Research").map(({ id }) => id),
    ["quadrotor-swarms"]
  );
  assert.deepEqual(
    collection.filterProjects("Robotics").map(({ id }) => id),
    [
      "humanoid",
      "aloha-replication",
      "autonomous-drone",
      "affordable-manipulator",
      "visionpick",
      "turtlebot",
    ]
  );
  assert.deepEqual(
    collection.filterProjects("Machine Learning").map(({ id }) => id),
    ["camai", "brain-tumor-segmentation", "clothsegnet"]
  );
  assert.equal(collection.filterProjects("All").length, 10);
});

test("project detail route generates all ten source-backed slugs", async () => {
  const detail = await import("../app/(root)/projects/[projectId]/page");

  assert.equal(typeof detail.generateStaticParams, "function");
  assert.deepEqual(detail.generateStaticParams(), [
    { projectId: "humanoid" },
    { projectId: "aloha-replication" },
    { projectId: "autonomous-drone" },
    { projectId: "affordable-manipulator" },
    { projectId: "visionpick" },
    { projectId: "turtlebot" },
    { projectId: "camai" },
    { projectId: "brain-tumor-segmentation" },
    { projectId: "clothsegnet" },
    { projectId: "quadrotor-swarms" },
  ]);
});

test("project cards expose source details and a stable detail link", async () => {
  const cardModule = await import("../components/projects/project-card");
  const project = projects[9];
  const markup = renderToStaticMarkup(
    React.createElement(cardModule.default, { project })
  );

  assert.match(markup, /Coordinated Control of Multi-Quadrotor Swarms/);
  assert.match(markup, /2025/);
  assert.match(markup, /Under review at IJCAI, 2026/);
  assert.match(markup, /Adaptive, optimal, and learning-based control/);
  assert.match(markup, /Research/);
  assert.match(markup, /alt="Coordinated Control[^\"]* project"/);
  assert.match(markup, /href="\/projects\/quadrotor-swarms"/);
});

test("unknown project detail routes return the not-found response", async () => {
  const detail = await import("../app/(root)/projects/[projectId]/page");

  await assert.rejects(
    detail.default({
      params: Promise.resolve({ projectId: "not-a-project" }),
    }),
    (error: unknown) =>
      error instanceof Error && error.message === "NEXT_HTTP_ERROR_FALLBACK;404"
  );
});

test("project detail renders source content, notes, and local media", async () => {
  const detail = await import("../app/(root)/projects/[projectId]/page");
  const page = await detail.default({
    params: Promise.resolve({ projectId: "humanoid" }),
  });
  const markup = renderToStaticMarkup(page);

  assert.match(markup, /Prototyping MuJoCo-based learning workflows/);
  assert.match(markup, /Timi Owolabi/);
  assert.match(markup, /Stable-Baselines3/);
  assert.match(markup, /The video shows the current state of the project\./);
  assert.match(markup, /aria-label="Humanoid demonstration"/);
  assert.match(markup, /href="https:\/\/github\.com\/iitimii\/Humanoid"/);
  assert.match(markup, /href="\/projects"/);
});

test("project detail exposes source-backed Paper and Blog links", async () => {
  const detail = await import("../app/(root)/projects/[projectId]/page");
  const paperPage = await detail.default({
    params: Promise.resolve({ projectId: "quadrotor-swarms" }),
  });
  const blogPage = await detail.default({
    params: Promise.resolve({ projectId: "brain-tumor-segmentation" }),
  });

  assert.match(renderToStaticMarkup(paperPage), />Paper</);
  assert.match(renderToStaticMarkup(blogPage), />Blog</);
});

test("project media renders accessible video and image alternatives", async () => {
  const mediaModule =
    await import("../components/projects/project-media").catch(() => null);

  assert.ok(mediaModule);
  const ProjectMedia = mediaModule.default;
  const videoProject = projects[0];
  const videoMarkup = renderToStaticMarkup(
    React.createElement(ProjectMedia, { project: videoProject })
  );
  assert.match(videoMarkup, /aria-label="Humanoid demonstration"/);
  assert.match(videoMarkup, /poster="\/projects\/humanoid.jpeg"/);
  assert.match(videoMarkup, /src="\/projects\/humanoid.mp4"/);
  assert.match(
    videoMarkup,
    /Your browser does not support embedded project video\./
  );

  const imageProject = projects[4];
  const imageMarkup = renderToStaticMarkup(
    React.createElement(ProjectMedia, { project: imageProject })
  );
  assert.match(imageMarkup, /alt="VisionPick:[^"]* project"/);
});
