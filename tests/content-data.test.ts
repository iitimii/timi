import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import test from "node:test";

import { experiences } from "../config/experience";
import { awards, education, profile, talks, teaching } from "../config/profile";
import { projects } from "../config/projects";
import { publications } from "../config/publications";
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
    ...projects.flatMap(({ image, video }) =>
      [image, video].filter((path): path is string => Boolean(path))
    ),
    ...talks.flatMap(({ href }) => (href?.startsWith("/") ? [href] : [])),
  ];

  for (const assetPath of assetPaths) {
    assert.equal(existsSync(`public${assetPath}`), true, assetPath);
  }
});

test("content identifiers are unique", () => {
  for (const records of [projects, publications, experiences, skillGroups]) {
    const ids = records.map(({ id }) => id);
    assert.equal(new Set(ids).size, ids.length);
  }
});
