# Task 1 report — template transplant and test harness

## Implementation

- Cloned `https://github.com/namanbarkiya/minimal-next-portfolio.git` and validated the required detached revision: `263950f499005cacf20ffc4812fd2dc563a611de`.
- Replaced the application tree with that revision using the prescribed `rsync -a --delete` command. `.git/`, `docs/`, `tests/`, and `node_modules/` were excluded from the replacement.
- Added `tests/repository-shape.test.mjs`, which validates the core upstream structure, removal of `tokens.css` and both Hallmark files, and the package name.
- Set the package name to `timi-portfolio`, added the stable `test` script (`tsx --test tests/*.test.*`), and added `tsx` at `^4.20.5` to `devDependencies`.
- Ran npm installation to update the lockfile. Because the intentionally preserved old `node_modules` state left the `tsx` executable link absent after the first install, ran `npm install --force` to reify it. This produced `tsx v4.23.12` and updated the lockfile root to the required package name and test dependency.

## TDD evidence

### RED

Command:

```sh
node --test tests/repository-shape.test.mjs
```

Result (exit 1):

```text
not ok 1 - repository uses the minimal-next-portfolio foundation
error: tailwind.config.js should exist
false !== true
# tests 1
# pass 0
# fail 1
```

This demonstrated the test was checking a missing upstream template artifact before the transplant.

### GREEN

Command:

```sh
npx tsx --test tests/repository-shape.test.mjs
```

Exact test summary (exit 0):

```text
ok 1 - repository uses the minimal-next-portfolio foundation
1..1
# tests 1
# pass 1
# fail 0
# cancelled 0
# skipped 0
```

## Tests and verification

- `npx tsx --test tests/repository-shape.test.mjs` — pass: 1 test, 0 failures.
- `npm test` — pass: 1 test, 0 failures.
- Lockfile verification — passed: root name is `timi-portfolio` and root `devDependencies.tsx` is `^4.20.5`.
- Template revision verification — passed: `git -C /tmp/timi-minimal-next-portfolio.03sXIY rev-parse HEAD` returned `263950f499005cacf20ffc4812fd2dc563a611de`.

## Files changed

- Replaced application sources and static assets with the pinned upstream tree, including new `app/(root)/`, `app/api/`, `components/`, `config/`, `content/`, `hooks/`, `information/`, `lib/`, `providers/`, and `public/` assets.
- Updated upstream-root project files: `.gitignore`, `.prettierrc`, `.env.copy`, `LICENSE`, `README.md`, `eslint.config.mjs`, `next.config.js`, `postcss.config.js`, `tailwind.config.js`, `tsconfig.json`, `components.json`, `package.json`, and `package-lock.json`.
- Removed the former application's pages, components, data modules, `next.config.ts`, `tokens.css`, and placeholder public assets.
- Preserved and included the intentional deletions of `.hallmark/log.json` and `.hallmark/preflight.json`.
- Added `tests/repository-shape.test.mjs` and this report.

## Self-review

- Confirmed all four template-defining paths exist.
- Confirmed the legacy `tokens.css` and both Hallmark files are absent.
- Confirmed the requested package name, scripts, and `tsx` dependency are present.
- Compared the post-install lockfile to the validated upstream lockfile: existing upstream dependencies are retained; differences are the renamed root package and dependencies introduced by `tsx`.

## Concerns

- `npm install --force` reports 37 dependency audit findings (4 low, 18 moderate, 14 high, 1 critical). These originate in the pinned upstream dependency graph and were not changed in this transplant task.
- This task's required repository-shape and full `npm test` suite passed. `npm run lint` and `npm run build` were not part of the requested Task 1 verification and were not run.
- `git diff --cached --check` reports the upstream file `public/robots.txt:6` has trailing whitespace. It was retained verbatim to preserve the pinned upstream template.
