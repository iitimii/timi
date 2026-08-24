import assert from "node:assert/strict";
import test from "node:test";

import { formatDateRange, getExperience, getProject } from "../lib/portfolio";

test("portfolio records resolve by stable ID", () => {
  assert.equal(getProject("humanoid")?.title, "Humanoid");
  assert.equal(getProject("missing"), undefined);
  assert.equal(getExperience("quidax")?.organization, "Quidax Technologies");
});

test("date ranges preserve present roles", () => {
  assert.equal(formatDateRange("2026-01-01", "Present"), "Jan 2026 - Present");
  assert.equal(formatDateRange("Jan 2026", "Present"), "Jan 2026 - Present");
  assert.equal(
    formatDateRange("2024-07-01", "2024-12-01"),
    "Jul 2024 - Dec 2024"
  );
});
