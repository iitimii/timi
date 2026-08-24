import assert from "node:assert/strict";
import test from "node:test";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";

import ContactPage from "../app/(root)/contact/page";

test("contact renders every direct source-backed contact method without a submission form", () => {
  const html = renderToStaticMarkup(createElement(ContactPage));

  for (const label of ["Email", "GitHub", "LinkedIn", "Google Scholar", "X"]) {
    assert.match(html, new RegExp(`>${label}<`));
  }
  assert.match(html, /href="mailto:timilehin\.owolabi@stu\.cu\.edu\.ng"/);
  assert.doesNotMatch(html, /<form|type="submit"/);
});

test("external contact profiles open safely while email remains a direct mail link", () => {
  const html = renderToStaticMarkup(createElement(ContactPage));

  assert.equal((html.match(/target="_blank"/g) ?? []).length, 4);
  assert.equal((html.match(/rel="noopener noreferrer"/g) ?? []).length, 4);

  const emailAnchor = html.match(
    /<a[^>]*href="mailto:timilehin\.owolabi@stu\.cu\.edu\.ng"[^>]*>/
  );
  assert.ok(emailAnchor);
  assert.doesNotMatch(emailAnchor[0], /target=|rel=/);
});

test("publications renders all six records with status and ordered authors", async () => {
  const { default: PublicationsPage } =
    await import("../app/(root)/publications/page");
  const html = renderToStaticMarkup(createElement(PublicationsPage));

  for (const title of [
    "Coordinated Control of Quadrotor Swarms: Classical, Adaptive, and Learning-Based Methods",
    "Fuzzy-PID Controller for Liquid Level Control of Tank Systems",
    "Practical Trade-offs in Neural Network Optimization: Brute Force Search and Gradient Descent",
    "Enhancing Radiological Imaging for Better Healthcare Outcomes Through High Performance Hybrid Approach",
    "Energy Optimization Algorithm for Reducing Energy Consumption in a Smart Home",
    "Smart Energy Metering and Monitoring System Using Internet of Things",
  ]) {
    assert.match(html, new RegExp(title));
  }

  assert.match(html, /IJCAI · 2026/);
  assert.match(html, /Under review/);
  assert.match(html, /Published/);

  const firstAuthor = html.indexOf("Oluwatimilehin Owolabi");
  const secondAuthor = html.indexOf("Chukwudumebi Chukwuma");
  const thirdAuthor = html.indexOf("Oladele Omogboyega");
  const fourthAuthor = html.indexOf("Ayokunle Awelewa");
  assert.ok(
    [firstAuthor, secondAuthor, thirdAuthor, fourthAuthor].every(
      (position) => position >= 0
    )
  );
  assert.ok(firstAuthor < secondAuthor);
  assert.ok(secondAuthor < thirdAuthor);
  assert.ok(thirdAuthor < fourthAuthor);
});

test("publication resources remain usable and safe in a new tab", async () => {
  const { PublicationCard } =
    await import("../components/publications/publication-card");
  const { publications } = await import("../config/publications");
  const html = renderToStaticMarkup(
    createElement(PublicationCard, { publication: publications[0] })
  );

  assert.match(
    html,
    /href="https:\/\/github\.com\/iitimii\/Coordinated-Control-of-Multi-Quadrotor-Swarms"/
  );
  assert.match(
    html,
    /href="https:\/\/drive\.google\.com\/file\/d\/1p4L1eJT4DQ-hWlWvim1cZ8-Jzl6jkgz_\/view\?usp=sharing"/
  );
  assert.match(html, />Code</);
  assert.match(html, />PDF</);
  assert.equal((html.match(/target="_blank"/g) ?? []).length, 2);
  assert.equal((html.match(/rel="noopener noreferrer"/g) ?? []).length, 2);
});

test("skills renders the three source-backed groups as descriptions and technology chips", async () => {
  const { default: SkillsPage } = await import("../app/(root)/skills/page");
  const html = renderToStaticMarkup(createElement(SkillsPage));

  for (const groupName of [
    "Languages",
    "ML &amp; Robotics",
    "DevOps &amp; Cloud",
  ]) {
    assert.match(html, new RegExp(`>${groupName}<`));
  }
  for (const description of [
    "Programming languages used across research and engineering work.",
    "Machine learning and robotics frameworks and tools.",
    "Cloud infrastructure, delivery, and observability tools.",
  ]) {
    assert.match(html, new RegExp(description));
  }
  for (const technology of ["Python", "ROS2", "OpenTelemetry"]) {
    assert.match(html, new RegExp(`>${technology}<`));
  }
});
