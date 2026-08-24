import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import test from "node:test";

test("repository uses the minimal-next-portfolio foundation", () => {
  for (const path of [
    "tailwind.config.js",
    "components.json",
    "app/(root)/layout.tsx",
    "providers/animation-provider.tsx",
  ]) {
    assert.equal(existsSync(path), true, `${path} should exist`);
  }

  assert.equal(existsSync("tokens.css"), false);
  assert.equal(existsSync(".hallmark/log.json"), false);
  assert.equal(existsSync(".hallmark/preflight.json"), false);
  const packageJson = JSON.parse(readFileSync("package.json", "utf8"));
  assert.equal(packageJson.name, "timi-portfolio");
});
