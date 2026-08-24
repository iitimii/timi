import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import test from "node:test";

import { experiences } from "../config/experience";
import { awards, education, profile, talks, teaching } from "../config/profile";
import { projects } from "../config/projects";
import { publications } from "../config/publications";
import { siteConfig } from "../config/site";
import { skillGroups } from "../config/skills";

test("portfolio includes every source-backed record", () => {
  assert.equal(projects.length, 10);
  assert.equal(publications.length, 6);
  assert.equal(experiences.length, 8);
  assert.equal(skillGroups.length, 3);
  assert.equal(education.length, 1);
  assert.equal(awards.length, 4);
  assert.equal(talks.length, 3);
  assert.equal(teaching.length, 2);
  assert.equal(profile.fullName, "Timi Owolabi");
});

test("all local portfolio assets exist", () => {
  const assetPaths = [
    profile.image,
    profile.resume,
    siteConfig.ogImage,
    ...projects.flatMap(({ image, video }) =>
      [image, video].filter((path): path is string => Boolean(path))
    ),
    ...talks.flatMap(({ href }) => (href?.startsWith("/") ? [href] : [])),
  ];

  for (const assetPath of assetPaths) {
    assert.equal(existsSync(`public${assetPath}`), true, assetPath);
  }
});

test("social previews use the dedicated portfolio card", () => {
  assert.equal(siteConfig.ogImage, "/og-timi.png");
});

test("content identifiers are unique", () => {
  for (const records of [projects, publications, experiences, skillGroups]) {
    const ids = records.map(({ id }) => id);
    assert.equal(new Set(ids).size, ids.length);
  }
});

test("template attribution links to the upstream portfolio repository", () => {
  assert.equal(
    siteConfig.links.templateRepo,
    "https://github.com/namanbarkiya/minimal-next-portfolio"
  );
});
