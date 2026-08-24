# Minimal Next Portfolio Migration Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the current Hallmark-based Timi site with the pinned `minimal-next-portfolio` template and populate it exclusively with source-backed portfolio and Research CV content.

**Architecture:** Preserve the existing Git repository while transplanting upstream commit `263950f499005cacf20ffc4812fd2dc563a611de`. Keep the template's Next.js App Router, Tailwind, Radix, theme, animation, and card systems, but drive every retained route from typed Timi-specific configuration modules. Remove unsupported template features and make all analytics optional so the static site builds without secrets.

**Tech Stack:** Next.js 16, React 19, TypeScript, Tailwind CSS 3, Radix UI, Framer Motion, Node test runner with `tsx`, Vercel Analytics

**Spec:** `docs/superpowers/specs/2026-08-24-minimal-next-portfolio-migration-design.md`

## Global Constraints

- Preserve `timi/.git`, its `origin`, and its history.
- Preserve `docs/superpowers/specs/2026-08-24-minimal-next-portfolio-migration-design.md` and this plan during the transplant.
- Use upstream commit `263950f499005cacf20ffc4812fd2dc563a611de` exactly.
- Keep the existing `.hallmark/log.json` and `.hallmark/preflight.json` deletions; do not restore Hallmark files.
- Use only facts in `../iitimii.github.io/index.html` and `../iitimii.github.io/data/Timi's Research CV.pdf`.
- Use `https://iitimii.github.io` for canonical URLs.
- Include ten projects, six publications/manuscripts, eight experience/leadership entries, three skill groups, one education entry, four awards, three talks, and two teaching entries.
- Preserve the upstream MIT license and public attribution.
- Do not require an `.env` file for tests, lint, build, local browsing, contact, resume access, or analytics.
- Remove all Naman Barkiya portfolio content, sample blogs, template promotion UI, Convot, Community, Contributions, and backend contact submission.

---

### Task 1: Transplant the pinned upstream repository and establish the test harness

**Files:**
- Preserve: `.git/`
- Preserve: `docs/superpowers/specs/2026-08-24-minimal-next-portfolio-migration-design.md`
- Preserve: `docs/superpowers/plans/2026-08-24-minimal-next-portfolio-migration.md`
- Replace: all other application files with upstream commit `263950f499005cacf20ffc4812fd2dc563a611de`
- Create: `tests/repository-shape.test.mjs`
- Modify: `package.json`

**Interfaces:**
- Consumes: upstream Git commit `263950f499005cacf20ffc4812fd2dc563a611de`
- Produces: the upstream Next.js application in the existing repository and `npm test` backed by Node's test runner

- [ ] **Step 1: Write a failing repository-shape test before copying the template**

```js
// tests/repository-shape.test.mjs
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
```

- [ ] **Step 2: Run the test and confirm the current site fails the template contract**

Run: `node --test tests/repository-shape.test.mjs`

Expected: FAIL because `tailwind.config.js`, `components.json`, and the template layout do not yet exist.

- [ ] **Step 3: Clone and validate the pinned upstream revision**

```bash
template_checkout=$(mktemp -d /tmp/timi-minimal-next-portfolio.XXXXXX)
git clone https://github.com/namanbarkiya/minimal-next-portfolio.git "$template_checkout"
git -C "$template_checkout" checkout 263950f499005cacf20ffc4812fd2dc563a611de
test "$(git -C "$template_checkout" rev-parse HEAD)" = "263950f499005cacf20ffc4812fd2dc563a611de"
```

- [ ] **Step 4: Replace the application tree while preserving repository metadata and planning documents**

Use this targeted copy after validating both paths. The excludes protect repository metadata, planning documents, the new failing test, and installed dependencies. This is the destructive step authorized by the user.

```bash
repo_root=$(git rev-parse --show-toplevel)
test "$PWD" = "$repo_root"
test -d "$repo_root/.git"
test -f "$template_checkout/package.json"
rsync -a --delete \
  --exclude='.git/' \
  --exclude='docs/' \
  --exclude='tests/' \
  --exclude='node_modules/' \
  "$template_checkout/" "$repo_root/"
```

- [ ] **Step 5: Add a stable test script and install the lightweight TypeScript test runner**

```json
{
  "name": "timi-portfolio",
  "scripts": {
    "test": "tsx --test tests/*.test.*",
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint"
  },
  "devDependencies": {
    "tsx": "^4.20.5"
  }
}
```

Retain all other upstream dependencies at the versions in the pinned lockfile, then run `npm install` to update `package-lock.json` for the package name and `tsx`.

- [ ] **Step 6: Run the repository-shape test**

Run: `npx tsx --test tests/repository-shape.test.mjs`

Expected: PASS, with the upstream structure present and Hallmark files absent.

- [ ] **Step 7: Commit the transplant**

```bash
git add -A
git commit -m "chore: replace site with minimal portfolio template"
```

---

### Task 2: Add typed portfolio data and source assets

**Files:**
- Create: `config/profile.ts`
- Replace: `config/constants.ts`
- Replace: `config/projects.ts`
- Replace: `config/experience.ts`
- Create: `config/publications.ts`
- Replace: `config/skills.ts`
- Modify: `config/site.ts`
- Modify: `config/socials.ts`
- Create: `tests/content-data.test.ts`
- Create: `public/profile/timi.jpg`
- Create: `public/icons/letter-t.png`
- Create: `public/documents/timi-owolabi-research-cv.pdf`
- Create: `public/documents/nse-ai-training.pdf`
- Create: `public/documents/deep-learning-neural-networks.pdf`
- Create: `public/projects/*.{png,jpg,jpeg,mp4}` for configured project media

**Interfaces:**
- Produces: `profile`, `education`, `awards`, `talks`, `teaching`, `projects`, `featuredProjects`, `experiences`, `featuredExperiences`, `publications`, `featuredPublications`, `skillGroups`, and `featuredSkillGroups`
- Consumed by: all home and collection/detail routes in Tasks 3-7

- [ ] **Step 1: Define the data contracts in `config/constants.ts`**

```ts
export type PortfolioLink = {
  label: string;
  href: string;
};

export type Project = {
  id: string;
  title: string;
  year: string;
  status?: string;
  kind: "Research" | "Robotics" | "Machine Learning";
  summary: string;
  paragraphs: string[];
  technologies: string[];
  authors: string[];
  image: string;
  video?: string;
  links: PortfolioLink[];
  note?: string;
};

export type Experience = {
  id: string;
  position: string;
  organization: string;
  location: string;
  startDate: string;
  endDate: string | "Present";
  summary: string;
  achievements: string[];
  technologies: string[];
  organizationUrl?: string;
};

export type Publication = {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  year: number;
  status?: "Published" | "Under review";
  summary?: string;
  links: PortfolioLink[];
};

export type SkillGroup = {
  id: string;
  name: string;
  description: string;
  skills: string[];
};
```

- [ ] **Step 2: Write the failing content-data test**

```ts
// tests/content-data.test.ts
import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import test from "node:test";

import { awards, education, profile, talks, teaching } from "../config/profile";
import { experiences } from "../config/experience";
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
```

- [ ] **Step 3: Run the test and confirm the data modules are absent**

Run: `npx tsx --test tests/content-data.test.ts`

Expected: FAIL because the Timi-specific modules and exports do not exist.

- [ ] **Step 4: Implement the profile and supporting records**

`config/profile.ts` must export:

- `profile` with full name `Timi Owolabi`, formal name `Oluwatimilehin Emmanuel Owolabi`, alias note, machine-learning/robotics focus, email, three first-person biography paragraphs, `/profile/timi.jpg`, `/documents/timi-owolabi-research-cv.pdf`, and the source-backed social links.
- `education` with Covenant University, Electrical & Electronics Engineering, September 2020-August 2025, GPA 4.85/5.0, and the quadrotor-swarms thesis.
- `awards` with years 2025, 2024, 2021, and 2020.
- `talks` with NSE 2024, APWEN 2024, and Redeemer's University 2025; only the first two have local PDF links.
- `teaching` with APWEN Machine Learning Tutor, 2024-Present, and Whitesands School Robotics Instructor, 2024.

- [ ] **Step 5: Implement the ten project records**

Use these stable IDs in `config/projects.ts`:

```ts
export const projectIds = [
  "humanoid",
  "aloha-replication",
  "autonomous-drone",
  "affordable-manipulator",
  "visionpick",
  "turtlebot",
  "camai",
  "brain-tumor-segmentation",
  "clothsegnet",
  "quadrotor-swarms",
] as const;
```

Populate titles, descriptions, collaborators, years/status, links, and notes from `index.html`; enrich the four CV-selected projects with the exact CV technology lists and bullet details. Export `featuredProjects` in this order: Humanoid, Coordinated Control of Multi-Quadrotor Swarms, ALOHA Replication.

- [ ] **Step 6: Implement the eight experience records**

Use IDs `quidax`, `trotta`, `scrella`, `waysense`, `gdg-robotics`, `eief`, `aeies`, and `schneider-electric`. Copy exact roles, dates, locations, summaries, and achievement bullets from the Research CV. Sort descending by start date, with current roles first. Export the first three as `featuredExperiences`.

- [ ] **Step 7: Implement publications and skill groups**

Use publication IDs `quadrotor-swarms`, `fuzzy-pid-liquid-level`, `neural-network-optimization`, `radiological-imaging`, `smart-home-energy-optimization`, and `smart-energy-metering`. Copy author order, venues, years, review status, summaries, and available HTML links exactly. Export the first three as `featuredPublications`.

Use skill-group IDs `languages`, `ml-robotics`, and `devops-cloud` with the exact CV lists. Export all three as `featuredSkillGroups`; do not include ratings.

- [ ] **Step 8: Copy and normalize the exact local assets**

Copy the project assets to lowercase stable paths:

```text
/projects/humanoid.jpeg
/projects/humanoid.mp4
/projects/aloha-rep.png
/projects/aloha-rep.mp4
/projects/auto-drone.png
/projects/auto-drone.mp4
/projects/gdg-manip.jpeg
/projects/gdg-manip.mp4
/projects/visionpick.png
/projects/turtlebot.png
/projects/camai.png
/projects/camai.mp4
/projects/brain.png
/projects/semantic.jpg
/projects/quadrotor-swarms.png
/projects/quadrotor-swarms.mp4
```

Use `panda.png` for VisionPick and `cf2.png` for the quadrotor-swarms cover. Copy only the existing MP4 files listed above. Copy the portrait, favicon, CV, and two linked talk PDFs to the paths in the Files section.

- [ ] **Step 9: Run data tests**

Run: `npx tsx --test tests/content-data.test.ts`

Expected: PASS with 10 projects, 6 publications, 8 experiences, 3 skill groups, all supporting counts, unique IDs, and every configured local asset present.

- [ ] **Step 10: Commit the typed data and assets**

```bash
git add config public tests/content-data.test.ts package.json package-lock.json
git commit -m "feat: add Timi portfolio content and media"
```

---

### Task 3: Rebrand the global shell, navigation, metadata, and theme behavior

**Files:**
- Replace: `config/routes.ts`
- Replace: `config/pages.ts`
- Modify: `config/site.ts`
- Replace: `config/socials.ts`
- Modify: `app/layout.tsx`
- Modify: `app/(root)/layout.tsx`
- Modify: `components/common/main-nav.tsx`
- Modify: `components/common/mobile-nav.tsx`
- Modify: `components/common/site-footer.tsx`
- Delete: `components/common/github-star-badge.tsx`
- Delete: `app/api/github-stars/route.ts`
- Modify: `app/globals.css`
- Create: `tests/routes-and-brand.test.ts`

**Interfaces:**
- Consumes: `profile` and `siteConfig` from Task 2
- Produces: `routesConfig.mainNav`, page metadata, global structured data, optional analytics, branded responsive navigation and footer

- [ ] **Step 1: Write the failing route and brand test**

```ts
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

import { routesConfig } from "../config/routes";
import { siteConfig } from "../config/site";

test("navigation exposes only retained routes", () => {
  assert.deepEqual(
    routesConfig.mainNav.map(({ href }) => href),
    ["/projects", "/experience", "/publications", "/skills", "/contact"]
  );
});

test("site metadata belongs to Timi", () => {
  assert.equal(siteConfig.authorName, "Timi Owolabi");
  assert.equal(siteConfig.url, "https://iitimii.github.io");
});

test("global shell has no upstream promotional content", () => {
  const shell = ["app/layout.tsx", "app/(root)/layout.tsx"]
    .map((path) => readFileSync(path, "utf8"))
    .join("\n");
  assert.doesNotMatch(shell, /Naman|namanbarkiya|Convot|GitHubStarBadge|Missing Google Analytics ID/);
});
```

- [ ] **Step 2: Run the test and confirm upstream branding fails**

Run: `npx tsx --test tests/routes-and-brand.test.ts`

Expected: FAIL because the upstream routes, site metadata, badge, and analytics exception remain.

- [ ] **Step 3: Implement the retained route and page metadata maps**

Use exactly these primary paths: `/projects`, `/experience`, `/publications`, `/skills`, and `/contact`. Resume appears as a distinct action linking to `/documents/timi-owolabi-research-cv.pdf`, not as a route that needs JavaScript to redirect.

- [ ] **Step 4: Rebrand the root layout**

Replace all upstream metadata and structured data with Timi's `siteConfig`. Remove the Convot script. Keep `<Analytics />`. Render Google Analytics only when configured:

```tsx
const gaId = process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID;

{gaId ? <GoogleAnalytics gaId={gaId} /> : null}
```

- [ ] **Step 5: Simplify the shell and footer**

Remove `GitHubStarBadge` from desktop and mobile layouts. Keep the theme switcher, responsive menu, animated Timi wordmark, social icons, and footer attribution:

```tsx
<p className="text-sm text-muted-foreground">
  Built from the minimal-next-portfolio template.
</p>
```

Link the attribution to the upstream repository without fetching star counts.

- [ ] **Step 6: Run focused and compile checks**

Run: `npx tsx --test tests/routes-and-brand.test.ts`

Expected: PASS.

Run: `npm run lint`

Expected: PASS with no missing badge/API imports.

- [ ] **Step 7: Commit the global shell**

```bash
git add app config components tests/routes-and-brand.test.ts
git commit -m "feat: rebrand portfolio shell for Timi"
```

---

### Task 4: Build the source-backed home page and portfolio selectors

**Files:**
- Create: `lib/portfolio.ts`
- Replace: `app/(root)/page.tsx`
- Modify: `components/common/animated-section.tsx` only if reduced-motion behavior needs correction
- Create: `components/home/about-section.tsx`
- Create: `components/home/highlights-section.tsx`
- Create: `components/home/education-section.tsx`
- Create: `tests/portfolio-selectors.test.ts`

**Interfaces:**
- Consumes: all Task 2 data exports
- Produces: `getProject`, `getExperience`, `formatDateRange`, and featured home sections

- [ ] **Step 1: Write failing selector tests**

```ts
import assert from "node:assert/strict";
import test from "node:test";

import { getExperience, getProject, formatDateRange } from "../lib/portfolio";

test("portfolio records resolve by stable ID", () => {
  assert.equal(getProject("humanoid")?.title, "Humanoid");
  assert.equal(getProject("missing"), undefined);
  assert.equal(getExperience("quidax")?.organization, "Quidax Technologies");
});

test("date ranges preserve present roles", () => {
  assert.equal(formatDateRange("2026-01-01", "Present"), "Jan 2026 - Present");
  assert.equal(formatDateRange("2024-07-01", "2024-12-01"), "Jul 2024 - Dec 2024");
});
```

- [ ] **Step 2: Run the selectors test and confirm the helpers are absent**

Run: `npx tsx --test tests/portfolio-selectors.test.ts`

Expected: FAIL because `lib/portfolio.ts` does not exist.

- [ ] **Step 3: Implement the minimal selectors and date formatter**

```ts
export const getProject = (id: string) => projects.find((item) => item.id === id);
export const getExperience = (id: string) =>
  experiences.find((item) => item.id === id);

export function formatDateRange(startDate: string, endDate: string) {
  const formatter = new Intl.DateTimeFormat("en", {
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });
  const start = formatter.format(new Date(startDate));
  const end = endDate === "Present" ? endDate : formatter.format(new Date(endDate));
  return `${start} - ${end}`;
}
```

- [ ] **Step 4: Rebuild the hero and introduction**

Retain the upstream animated, full-height centered hero. Use `/profile/timi.jpg`, Timi's display name, alias note, focus line, Resume link, and Contact button. Add the three source biography paragraphs immediately after the hero in a readable centered column.

- [ ] **Step 5: Build modular home sections**

Use template cards and animation wrappers for three featured projects, three featured experiences, three featured publications, and three skill groups. Add compact education, awards, talks, and teaching blocks via `education-section.tsx`. Each collection section links to the appropriate route; talk titles with PDFs link to their local documents.

- [ ] **Step 6: Replace upstream software-template schema**

Keep only a schema.org `Person` object with Timi's formal name, display name, focus, canonical URL, portrait, and source-backed social profiles. Do not emit `SoftwareApplication` schema for the template.

- [ ] **Step 7: Run tests, lint, and build**

Run: `npx tsx --test tests/portfolio-selectors.test.ts`

Expected: PASS.

Run: `npm run lint && npm run build`

Expected: PASS without an `.env` file.

- [ ] **Step 8: Commit the home page**

```bash
git add app components/home lib/portfolio.ts tests/portfolio-selectors.test.ts
git commit -m "feat: build Timi portfolio home page"
```

---

### Task 5: Adapt project cards, filters, and detail pages

**Files:**
- Replace: `components/projects/project-card.tsx`
- Replace: `components/projects/project-description.tsx`
- Create: `components/projects/project-media.tsx`
- Replace: `app/(root)/projects/page.tsx`
- Replace: `app/(root)/projects/[projectId]/page.tsx`
- Create: `tests/project-routes.test.ts`

**Interfaces:**
- Consumes: `Project`, `projects`, `getProject`, and `formatDateRange`
- Produces: responsive project collection, category filters, ten statically generated detail routes, optional video rendering

- [ ] **Step 1: Write the failing project-route contract test**

```ts
import assert from "node:assert/strict";
import test from "node:test";

import { projects } from "../config/projects";
import { getProject } from "../lib/portfolio";

test("every project slug resolves and exposes accessible media text", () => {
  for (const project of projects) {
    assert.equal(getProject(project.id), project);
    assert.ok(project.title.length > 0);
    assert.match(project.image, /^\/projects\//);
    assert.ok(project.summary.length > 30);
  }
});

test("project collection includes expected kinds", () => {
  assert.deepEqual(
    [...new Set(projects.map(({ kind }) => kind))].sort(),
    ["Machine Learning", "Research", "Robotics"]
  );
});
```

- [ ] **Step 2: Run the test and confirm current upstream projects fail**

Run: `npx tsx --test tests/project-routes.test.ts`

Expected: FAIL until the project modules expose the new fields and exact kind set.

- [ ] **Step 3: Adapt project cards and filters**

Render descriptive image alt text, project year/status, summary, category chips, and a detail link. Replace Personal/Professional tabs with All/Research/Robotics/Machine Learning filters derived from `Project.kind`.

- [ ] **Step 4: Implement accessible local media**

```tsx
{project.video ? (
  <video
    aria-label={`${project.title} demonstration`}
    className="aspect-video w-full rounded-lg border object-cover"
    controls
    loop
    muted
    playsInline
    poster={project.image}
  >
    <source src={project.video} type="video/mp4" />
    Your browser does not support embedded project video.
  </video>
) : (
  <Image src={project.image} alt={`${project.title} project`} fill />
)}
```

- [ ] **Step 5: Rebuild project detail routes**

Generate static params from all ten IDs. Show year/status, authors, categories, technologies, source paragraphs, project note, local media, and available Code/Paper/Blog links. Use `notFound()` for an unknown ID and include a back-to-projects control.

- [ ] **Step 6: Run focused and production checks**

Run: `npx tsx --test tests/project-routes.test.ts`

Expected: PASS.

Run: `npm run lint && npm run build`

Expected: PASS and list all ten project detail routes in the build output.

- [ ] **Step 7: Commit project routes**

```bash
git add app/'(root)'/projects components/projects tests/project-routes.test.ts
git commit -m "feat: add research and robotics project pages"
```

---

### Task 6: Adapt experience timeline and detail pages

**Files:**
- Replace: `components/experience/experience-card.tsx`
- Modify: `components/experience/timeline.tsx`
- Replace: `app/(root)/experience/page.tsx`
- Replace: `app/(root)/experience/[expId]/page.tsx`
- Create: `tests/experience-routes.test.ts`

**Interfaces:**
- Consumes: `Experience`, `experiences`, `getExperience`, `formatDateRange`
- Produces: an eight-entry timeline and eight statically generated detail routes

- [ ] **Step 1: Write the failing experience-route test**

```ts
import assert from "node:assert/strict";
import test from "node:test";

import { experiences } from "../config/experience";
import { getExperience } from "../lib/portfolio";

test("every experience ID resolves with source-backed detail", () => {
  assert.equal(experiences.length, 8);
  for (const experience of experiences) {
    assert.equal(getExperience(experience.id), experience);
    assert.ok(experience.achievements.length >= 2);
    assert.ok(experience.position.length > 0);
    assert.ok(experience.organization.length > 0);
  }
});
```

- [ ] **Step 2: Run the test and confirm the upstream experience model fails**

Run: `npx tsx --test tests/experience-routes.test.ts`

Expected: FAIL until the eight Timi records and new interface are in use.

- [ ] **Step 3: Adapt the timeline and cards**

Use organization, position, location, formatted full date range, summary, and technology chips. Omit the logo box when a role has no source logo. Do not display broken placeholder images.

- [ ] **Step 4: Rebuild experience detail routes**

Generate static params for all eight IDs. Keep the Summary, Achievements, and Skills tabs; source their text from the new model. Use `notFound()` for an unknown ID and preserve external organization links only when configured.

- [ ] **Step 5: Run focused and production checks**

Run: `npx tsx --test tests/experience-routes.test.ts`

Expected: PASS.

Run: `npm run lint && npm run build`

Expected: PASS and list all eight experience detail routes.

- [ ] **Step 6: Commit experience routes**

```bash
git add app/'(root)'/experience components/experience tests/experience-routes.test.ts
git commit -m "feat: add professional and research experience"
```

---

### Task 7: Add publications, grouped skills, contact, and resume access

**Files:**
- Delete: `app/(root)/contributions/`
- Delete: `components/contributions/`
- Delete: `config/contributions.ts`
- Create: `app/(root)/publications/page.tsx`
- Create: `components/publications/publication-card.tsx`
- Replace: `components/skills/skills-card.tsx`
- Delete: `components/skills/rating.tsx`
- Replace: `app/(root)/skills/page.tsx`
- Replace: `app/(root)/contact/page.tsx`
- Create: `components/contact/contact-links.tsx`
- Delete: `components/forms/contact-form.tsx`
- Delete: `app/api/contact/route.ts`
- Delete: `app/(root)/resume/page.tsx`
- Create: `tests/supporting-routes.test.ts`

**Interfaces:**
- Consumes: `publications`, `skillGroups`, `profile`, and source-backed links
- Produces: `/publications`, `/skills`, `/contact`, direct resume PDF access, and no secret-dependent backend routes

- [ ] **Step 1: Write the failing supporting-route test**

```ts
import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import test from "node:test";

test("supporting routes match the approved information architecture", () => {
  assert.equal(existsSync("app/(root)/publications/page.tsx"), true);
  assert.equal(existsSync("app/(root)/contributions/page.tsx"), false);
  assert.equal(existsSync("app/(root)/blogs/page.tsx"), false);
  assert.equal(existsSync("app/(root)/resume/page.tsx"), false);
  assert.equal(existsSync("app/api/contact/route.ts"), false);
});

test("skills do not claim subjective ratings", () => {
  const skills = readFileSync("components/skills/skills-card.tsx", "utf8");
  assert.doesNotMatch(skills, /rating|stars/i);
});
```

- [ ] **Step 2: Run the test and confirm the unsupported upstream routes fail**

Run: `npx tsx --test tests/supporting-routes.test.ts`

Expected: FAIL because Publications is absent and Contributions, Blogs, Resume, and contact API routes remain.

- [ ] **Step 3: Build the publications page**

Create an accessible list/card layout showing title, ordered authors, venue, year, published/under-review status, summary when available, and source-backed Paper/Code/Scholar links. Use the three featured records on Home through the same card.

- [ ] **Step 4: Replace ratings with grouped skill cards**

Each of the three cards shows the group name, its source-backed one-sentence description, and technology chips. Retain the template visual system but remove all rating imports and SVG stars.

- [ ] **Step 5: Replace the contact form with direct contact links**

Show Email, GitHub, LinkedIn, Google Scholar, and X. Email uses `mailto:timilehin.owolabi@stu.cu.edu.ng`; external links open safely in a new tab. Remove Google Forms and SendGrid assumptions and all form validation/state code no longer imported.

- [ ] **Step 6: Use a direct resume URL**

All Resume buttons and links point to `/documents/timi-owolabi-research-cv.pdf` with `target="_blank"` and `rel="noopener noreferrer"`. Delete the client redirect route.

- [ ] **Step 7: Run focused and production checks**

Run: `npx tsx --test tests/supporting-routes.test.ts`

Expected: PASS.

Run: `npm run lint && npm run build`

Expected: PASS without contact or resume API/client-route errors.

- [ ] **Step 8: Commit supporting pages**

```bash
git add -A
git commit -m "feat: add publications skills and contact pages"
```

---

### Task 8: Remove sample features and finish SEO, sitemap, manifest, and documentation

**Files:**
- Delete: `app/(root)/blogs/`
- Delete: `content/blogs/`
- Delete: `components/blogs/`
- Delete: `lib/blogs.ts`
- Delete: `app/(root)/community/route.ts`
- Delete: unused form, modal, hook, UI, provider, and template asset files identified by the linter/import graph
- Modify: `app/sitemap.ts`
- Modify: `app/manifest.ts`
- Modify: `public/robots.txt`
- Replace: `.env.copy`
- Replace: `README.md`
- Modify: `package.json`
- Modify: `package-lock.json`
- Create: `tests/residue-and-seo.test.ts`

**Interfaces:**
- Consumes: retained route and content IDs
- Produces: accurate sitemap/manifest/robots metadata, minimal dependencies, project documentation, and a clean residue scan

- [ ] **Step 1: Write the failing residue and SEO test**

```ts
import assert from "node:assert/strict";
import { existsSync, readFileSync, readdirSync } from "node:fs";
import { extname, join } from "node:path";
import test from "node:test";

function collectSourceFiles(directory: string): string[] {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) return collectSourceFiles(path);
    return [".ts", ".tsx", ".md"].includes(extname(path)) ? [path] : [];
  });
}

const sourceFilePaths = ["app", "components", "config", "lib", "providers"]
  .filter((path) => existsSync(path))
  .flatMap(collectSourceFiles);
const source = sourceFilePaths
  .map((path) => readFileSync(path, "utf8"))
  .join("\n");
const sourceWithoutApprovedAttribution = source.replaceAll(
  "https://github.com/namanbarkiya/minimal-next-portfolio",
  ""
);

test("upstream portfolio content is absent", () => {
  assert.doesNotMatch(
    sourceWithoutApprovedAttribution,
    /Naman Barkiya|namanbarkiya|UBS|Convot|Niya SaaS|Muze AI|Builtdesign/
  );
});

test("metadata uses the active canonical origin", () => {
  assert.match(readFileSync("app/sitemap.ts", "utf8"), /iitimii\.github\.io/);
  assert.match(readFileSync("app/manifest.ts", "utf8"), /Timi Owolabi/);
});
```

- [ ] **Step 2: Run the test and confirm sample content remains**

Run: `npx tsx --test tests/residue-and-seo.test.ts`

Expected: FAIL while sample routes, Naman metadata, or template records remain.

- [ ] **Step 3: Delete unsupported routes and unreachable code**

Remove Blogs, Community, Contributions, API handlers, markdown parsing, contact form, GitHub star fetch, and any now-unreferenced modal/form utilities. Use `rg` to prove each candidate has no retained importer before deletion.

- [ ] **Step 4: Remove dependencies used only by deleted features**

Remove packages such as `gray-matter`, `remark`, `remark-gfm`, `remark-html`, `remark-prism`, `@hookform/resolvers`, `react-hook-form`, `zod`, `zustand`, `nodemailer`, and `@sendgrid/mail` only when `rg` confirms no retained import. Run `npm install` to regenerate the lockfile.

- [ ] **Step 5: Update SEO resources**

The sitemap contains `/`, `/projects`, ten project detail routes, `/experience`, eight experience detail routes, `/publications`, `/skills`, and `/contact`. The manifest names Timi, uses `/icons/letter-t.png`, and describes machine learning, robotics, research, and embodied AI. `robots.txt` points to `https://iitimii.github.io/sitemap.xml`.

- [ ] **Step 6: Write project documentation**

README sections: overview, content sources, local setup, `npm test`, lint/build commands, optional `NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID`, content module locations, asset locations, deployment notes, and MIT/template attribution. Start the attribution line with `Template attribution:` so the verification scan can distinguish it from portfolio content. `.env.copy` contains only the optional analytics key with an explanatory comment.

- [ ] **Step 7: Run residue, dependency, and production checks**

Run: `npx tsx --test tests/residue-and-seo.test.ts`

Expected: PASS.

Run: `npm test && npm run lint && npm run build`

Expected: all tests PASS, lint PASS, build PASS without `.env`.

- [ ] **Step 8: Commit cleanup and metadata**

```bash
git add -A
git commit -m "chore: remove sample features and finalize metadata"
```

---

### Task 9: Verify content, production routes, media, responsiveness, and themes

**Files:**
- Modify only files needed to fix defects found during verification
- Update tests when a discovered regression deserves permanent coverage

**Interfaces:**
- Consumes: the complete migrated application
- Produces: verification evidence for the acceptance criteria

- [ ] **Step 1: Confirm the Git and filesystem boundary**

Run:

```bash
git status --short
git remote -v
test ! -e .hallmark/log.json
test ! -e .hallmark/preflight.json
test ! -e tokens.css
test -e LICENSE
```

Expected: only intentional working changes, original `iitimii/timi` origin preserved, old Hallmark files absent, MIT license present.

- [ ] **Step 2: Run the complete automated suite from current dependencies**

Run: `npm test && npm run lint && npm run build`

Expected: all commands exit 0 without an `.env` file.

- [ ] **Step 3: Run source-residue and asset scans**

Run:

```bash
rg -n "Naman|namanbarkiya|UBS|Convot|Niya SaaS|Muze AI|Builtdesign|Replace this|placeholder" app components config lib providers public README.md | rg -v "github.com/namanbarkiya/minimal-next-portfolio|Template attribution"
find public -type f -print | sort
```

Expected: no upstream/sample portfolio matches after excluding the approved template-attribution line; every file in `public` is intentionally referenced or required.

- [ ] **Step 4: Start the local production server and probe routes**

Run: `npm start` after the successful build. Request `/`, each collection route, all ten project detail paths, all eight experience detail paths, the CV PDF, both talk PDFs, representative PNG/JPEG assets, and every configured MP4. Expect HTTP 200 for retained content and HTTP 404 for `/blogs`, `/contributions`, and `/community`.

- [ ] **Step 5: Perform desktop visual QA**

At approximately 1440x900, review Home, Projects, one video project, one image-only project, Experience, one experience detail, Publications, Skills, and Contact. Check image cropping, text wrapping, video controls, focus/hover states, section spacing, external links, and footer attribution.

- [ ] **Step 6: Perform mobile visual QA**

At approximately 390x844, repeat navigation and representative route checks. Confirm the menu opens/closes, route changes close it, cards remain within the viewport, headings and long publication titles wrap, tabs remain usable, and no horizontal scrollbar appears.

- [ ] **Step 7: Review all seven themes**

On a content-dense page, cycle through light, dark, retro, cyberpunk, paper, aurora, and synthwave. Confirm readable foreground/background contrast, visible borders and focus states, legible chips, and no theme-specific clipping.

- [ ] **Step 8: Fix defects with regression tests and repeat affected checks**

For each defect, add the smallest failing test when the behavior can be automated, implement the fix, rerun that test, then rerun `npm test && npm run lint && npm run build`. Repeat the affected browser viewport and theme check.

- [ ] **Step 9: Commit final verification fixes if any**

```bash
git add -A
git commit -m "fix: resolve portfolio verification issues"
```

Skip this commit only when the verification pass produces no changes.
