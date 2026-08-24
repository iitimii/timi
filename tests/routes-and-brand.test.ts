import assert from "node:assert/strict";
import test from "node:test";

import { pagesConfig } from "../config/pages";
import { routesConfig } from "../config/routes";
import * as siteModule from "../config/site";

type ShellSiteModule = {
  getGoogleAnalyticsId?: (
    environment: Record<string, string | undefined>
  ) => string | undefined;
  globalStructuredData?: Array<Record<string, unknown>>;
};

const shellSiteModule = siteModule as ShellSiteModule;

test("navigation exposes only retained routes and a direct resume action", () => {
  assert.deepEqual(
    routesConfig.mainNav.map(({ href }) => href),
    ["/projects", "/experience", "/publications", "/skills", "/contact"]
  );
  assert.deepEqual(routesConfig.resume, {
    title: "Resume",
    href: "/documents/timi-owolabi-research-cv.pdf",
  });
});

test("page metadata covers the retained portfolio pages", () => {
  assert.deepEqual(Object.keys(pagesConfig), [
    "home",
    "projects",
    "experience",
    "publications",
    "skills",
    "contact",
  ]);
  assert.equal(
    pagesConfig.publications.metadata.description,
    "Timi Owolabi's publications and research manuscripts."
  );
});

test("site metadata and structured data belong to Timi", () => {
  assert.equal(siteModule.siteConfig.authorName, "Timi Owolabi");
  assert.equal(siteModule.siteConfig.url, "https://iitimii.github.io");
  assert.equal(siteModule.siteConfig.twitterUsername, "iitiimii");

  const globalStructuredData = shellSiteModule.globalStructuredData;
  assert.ok(Array.isArray(globalStructuredData));
  assert.deepEqual(
    globalStructuredData.map((entry) => entry["@type"]),
    ["Person", "WebSite"]
  );
  assert.equal(globalStructuredData[0].name, "Timi Owolabi");
  assert.equal(
    globalStructuredData[0].alternateName,
    "Oluwatimilehin Emmanuel Owolabi"
  );
});

test("Google Analytics is optional and preserves a configured ID", () => {
  const getGoogleAnalyticsId = shellSiteModule.getGoogleAnalyticsId;
  assert.equal(typeof getGoogleAnalyticsId, "function");
  assert.ok(getGoogleAnalyticsId);

  assert.equal(getGoogleAnalyticsId({}), undefined);
  assert.equal(
    getGoogleAnalyticsId({
      NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID: "G-TIMI123",
    }),
    "G-TIMI123"
  );
});
