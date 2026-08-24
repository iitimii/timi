import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
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

test("SDD scratch files are ignored and untracked", () => {
  const scratchPath = ".superpowers/repository-boundary-probe";

  const ignoreSource = execFileSync(
    "git",
    ["check-ignore", "--no-index", "-v", scratchPath],
    { encoding: "utf8" },
  );
  assert.match(
    ignoreSource,
    /^\.gitignore:\d+:\/\.superpowers\/\t/,
    ".superpowers should be ignored by the repository root .gitignore",
  );

  const trackedScratchFiles = execFileSync("git", ["ls-files", ".superpowers"], {
    encoding: "utf8",
  });
  assert.equal(trackedScratchFiles, "", ".superpowers files should be untracked");
});
