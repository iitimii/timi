import assert from "node:assert/strict";
import test from "node:test";

import manifest from "../app/manifest";
import sitemap from "../app/sitemap";

const canonicalOrigin = "https://iitimii.github.io";

const expectedUrls = [
  canonicalOrigin,
  `${canonicalOrigin}/projects`,
  `${canonicalOrigin}/projects/humanoid`,
  `${canonicalOrigin}/projects/aloha-replication`,
  `${canonicalOrigin}/projects/autonomous-drone`,
  `${canonicalOrigin}/projects/affordable-manipulator`,
  `${canonicalOrigin}/projects/visionpick`,
  `${canonicalOrigin}/projects/turtlebot`,
  `${canonicalOrigin}/projects/camai`,
  `${canonicalOrigin}/projects/brain-tumor-segmentation`,
  `${canonicalOrigin}/projects/clothsegnet`,
  `${canonicalOrigin}/projects/quadrotor-swarms`,
  `${canonicalOrigin}/experience`,
  `${canonicalOrigin}/experience/quidax`,
  `${canonicalOrigin}/experience/eief`,
  `${canonicalOrigin}/experience/trotta`,
  `${canonicalOrigin}/experience/gdg-robotics`,
  `${canonicalOrigin}/experience/aeies`,
  `${canonicalOrigin}/experience/scrella`,
  `${canonicalOrigin}/experience/waysense`,
  `${canonicalOrigin}/experience/schneider-electric`,
  `${canonicalOrigin}/publications`,
  `${canonicalOrigin}/skills`,
  `${canonicalOrigin}/contact`,
].sort();

test("sitemap returns every public portfolio route on the canonical origin", () => {
  const entries = sitemap();

  assert.equal(entries.length, 24);
  assert.deepEqual(entries.map(({ url }) => url).sort(), expectedUrls);
  assert.ok(entries.every(({ lastModified }) => lastModified instanceof Date));
});

test("manifest exposes Timi's machine-learning and robotics portfolio identity", () => {
  const metadata = manifest();

  assert.match(metadata.name ?? "", /Timi Owolabi/);
  assert.match(metadata.description ?? "", /machine learning/i);
  assert.match(metadata.description ?? "", /robotics/i);
  assert.match(metadata.description ?? "", /research/i);
  assert.match(metadata.description ?? "", /embodied AI/i);
  assert.deepEqual(metadata.icons, [
    {
      src: "/icons/letter-t.png",
      sizes: "512x512",
      type: "image/png",
      purpose: "any",
    },
    {
      src: "/icons/letter-t.png",
      sizes: "512x512",
      type: "image/png",
      purpose: "maskable",
    },
  ]);
});
