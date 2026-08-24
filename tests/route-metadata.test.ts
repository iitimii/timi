import assert from "node:assert/strict";
import test from "node:test";

import type { Metadata } from "next";

import { metadata as contactMetadata } from "../app/(root)/contact/page";
import { generateMetadata as experienceDetailMetadata } from "../app/(root)/experience/[expId]/page";
import { metadata as experienceMetadata } from "../app/(root)/experience/page";
import { generateMetadata as projectDetailMetadata } from "../app/(root)/projects/[projectId]/page";
import { metadata as projectsMetadata } from "../app/(root)/projects/page";
import { metadata as publicationsMetadata } from "../app/(root)/publications/page";
import { metadata as skillsMetadata } from "../app/(root)/skills/page";

const origin = "https://iitimii.github.io";

function assertRouteMetadata(
  metadata: Metadata,
  path: string,
  title: string
) {
  assert.equal(metadata.alternates?.canonical, `${origin}${path}`);
  assert.equal(metadata.openGraph?.url, `${origin}${path}`);
  assert.equal(metadata.openGraph?.title, title);
  assert.equal(metadata.openGraph?.description, metadata.description);
  assert.equal(metadata.twitter?.title, title);
  assert.equal(metadata.twitter?.description, metadata.description);
}

test("collection routes expose route-specific canonical and social metadata", () => {
  assertRouteMetadata(projectsMetadata, "/projects", "Projects");
  assertRouteMetadata(
    experienceMetadata,
    "/experience",
    "Experience | Professional Experience Timeline"
  );
  assertRouteMetadata(publicationsMetadata, "/publications", "Publications");
  assertRouteMetadata(skillsMetadata, "/skills", "Skills");
  assertRouteMetadata(contactMetadata, "/contact", "Contact");
});

test("detail routes expose record-specific canonical and social metadata", async () => {
  assertRouteMetadata(
    await projectDetailMetadata({
      params: Promise.resolve({ projectId: "humanoid" }),
    }),
    "/projects/humanoid",
    "Humanoid"
  );
  assertRouteMetadata(
    await experienceDetailMetadata({
      params: Promise.resolve({ expId: "quidax" }),
    }),
    "/experience/quidax",
    "Graduate Trainee, Software Engineering & DevOps at Quidax Technologies | Experience"
  );
});
