import assert from "node:assert/strict";
import test from "node:test";

import {
  createElement,
  isValidElement,
  type ReactElement,
  type ReactNode,
} from "react";
import { renderToStaticMarkup } from "react-dom/server";

import ExperienceDetailPage, {
  generateStaticParams,
} from "../app/(root)/experience/[expId]/page";
import ExperiencePage from "../app/(root)/experience/page";
import ExperienceCard from "../components/experience/experience-card";
import { ResponsiveTabs } from "../components/ui/responsive-tabs";
import { experiences } from "../config/experience";
import { getExperience } from "../lib/portfolio";

const expectedDateRanges = new Map([
  ["quidax", "Jan 2026 - Present"],
  ["eief", "Dec 2024 - Present"],
  ["trotta", "Jan 2026 - Feb 2026"],
  ["gdg-robotics", "Sep 2024 - Aug 2025"],
  ["aeies", "Sep 2024 - Aug 2025"],
  ["scrella", "Jul 2024 - Dec 2024"],
  ["waysense", "Mar 2024 - Sep 2024"],
  ["schneider-electric", "Aug 2023 - Oct 2023"],
]);

function renderedText(markup: string) {
  return markup
    .replace(/<[^>]*>/g, " ")
    .replaceAll("&amp;", "&")
    .replaceAll("&quot;", '"')
    .replaceAll("&#x27;", "'");
}

function findElement(
  node: ReactNode,
  type: typeof ResponsiveTabs
): ReactElement | undefined {
  if (Array.isArray(node)) {
    return (node as ReactNode[])
      .map((child) => findElement(child, type))
      .find(Boolean);
  }
  if (!isValidElement(node)) {
    return undefined;
  }
  if (node.type === type) {
    return node;
  }
  return findElement((node.props as { children?: ReactNode }).children, type);
}

void test("every experience ID resolves with source-backed detail", () => {
  assert.equal(experiences.length, 8);
  for (const experience of experiences) {
    assert.equal(getExperience(experience.id), experience);
    assert.ok(experience.achievements.length >= 2);
    assert.ok(experience.position.length > 0);
    assert.ok(experience.organization.length > 0);
  }
});

void test("every experience detail route is generated statically", () => {
  assert.deepEqual(generateStaticParams(), [
    { expId: "quidax" },
    { expId: "eief" },
    { expId: "trotta" },
    { expId: "gdg-robotics" },
    { expId: "aeies" },
    { expId: "scrella" },
    { expId: "waysense" },
    { expId: "schneider-electric" },
  ]);
});

void test("the experience timeline renders all eight detail links", () => {
  const markup = renderToStaticMarkup(createElement(ExperiencePage));
  const detailLinks = markup.match(/href="\/experience\/[^"]+"/g) ?? [];

  assert.equal(detailLinks.length, 8);
  for (const experience of experiences) {
    assert.ok(detailLinks.includes(`href="/experience/${experience.id}"`));
  }
});

void test("experience cards render source-backed fields and complete date ranges", () => {
  for (const experience of experiences) {
    const markup = renderToStaticMarkup(
      createElement(ExperienceCard, { experience })
    );
    const text = renderedText(markup);

    assert.ok(text.includes(experience.position));
    assert.ok(text.includes(experience.organization));
    assert.ok(text.includes(experience.location));
    assert.ok(text.includes(expectedDateRanges.get(experience.id)!));
    assert.ok(text.includes(experience.summary));
    for (const technology of experience.technologies) {
      assert.ok(text.includes(technology));
    }
    assert.doesNotMatch(markup, /<img/);
  }
});

void test("experience detail pages expose summary, achievements, and skills", async () => {
  for (const experience of experiences) {
    const page = await ExperienceDetailPage({
      params: Promise.resolve({ expId: experience.id }),
    });
    const markup = renderToStaticMarkup(page);
    const tabs = findElement(page, ResponsiveTabs);

    assert.ok(tabs);
    const items = (
      tabs.props as {
        items: Array<{ value: string; label: string; content: ReactNode }>;
      }
    ).items;
    const content = renderedText(
      items.map((item) => renderToStaticMarkup(item.content)).join(" ")
    );

    assert.match(markup, />Summary</);
    assert.match(markup, />Achievements</);
    assert.match(markup, />Skills</);
    assert.ok(content.includes(experience.summary));
    for (const achievement of experience.achievements) {
      assert.ok(content.includes(achievement));
    }
    for (const technology of experience.technologies) {
      assert.ok(content.includes(technology));
    }
  }
});

void test("unknown experience IDs produce the not-found response", async () => {
  await assert.rejects(
    ExperienceDetailPage({
      params: Promise.resolve({ expId: "unknown-experience" }),
    }),
    (error: unknown) =>
      error instanceof Error &&
      "digest" in error &&
      error.digest === "NEXT_HTTP_ERROR_FALLBACK;404"
  );
});
