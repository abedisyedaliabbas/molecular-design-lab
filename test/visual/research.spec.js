const { test, expect } = require("@playwright/test");

const base = "/molecular-design-lab/";
for (const route of ["", "projects/", "publications/", "cv/", "news/", "travel/"]) {
  test(`research page ${route || "home"} renders without overflow`, async ({ page }, testInfo) => {
    const errors = [];
    page.on("pageerror", (error) => errors.push(error.message));
    const response = await page.goto(base + route);
    expect(response.status()).toBe(200);
    await expect(page.locator("h1")).toHaveCount(1);
    await expect(page.locator("h1")).toBeVisible();
    await expect(page.locator("main")).not.toContainText(/Liquid Exception|undefined|NaN/);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
    expect(
      await page.locator("img").evaluateAll((images) => images.filter((img) => img.complete && img.naturalWidth === 0).map((img) => img.src))
    ).toEqual([]);
    expect(errors).toEqual([]);
    await page.screenshot({ path: testInfo.outputPath("page.png") });
  });
}

test("portrait remains compact and navigation works", async ({ page }, testInfo) => {
  await page.goto(base);
  const portrait = await page.locator(".portrait-frame").boundingBox();
  expect(portrait.width).toBeLessThanOrEqual(210);
  expect(portrait.height).toBeLessThanOrEqual(230);
  if (testInfo.project.name === "mobile") {
    const menu = page.getByRole("button", { name: "Menu", exact: true });
    await expect(page.getByRole("navigation")).toBeHidden();
    await menu.click();
    await expect(menu).toHaveAttribute("aria-expanded", "true");
    await expect(page.getByRole("navigation")).toBeVisible();
    await page.keyboard.press("Escape");
    await expect(menu).toBeFocused();
    await expect(page.getByRole("navigation")).toBeHidden();
  }
  await page.getByRole("button", { name: "Switch to dark theme", exact: true }).click();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
  await page.reload();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
  await page.screenshot({ path: testInfo.outputPath("dark.png") });
});

test("publication filters, empty state and source citations", async ({ page }) => {
  await page.goto(base + "publications/");
  const search = page.getByRole("searchbox", { name: "Search publications" });
  await search.fill("photostable");
  await expect(page.locator("#publication-status")).toHaveText("1 of 26 research outputs");
  await expect(page).toHaveURL(/q=photostable/);
  await search.fill("no-publication-matches-this-query");
  await expect(page.locator("#publication-empty")).toBeVisible();
  await page.getByRole("button", { name: "Clear filters" }).click();
  await expect(page.locator("#publication-status")).toHaveText("26 of 26 research outputs");
  await page.getByRole("combobox", { name: "Year", exact: true }).selectOption("2026");
  await expect(page.locator("#publication-status")).toHaveText("4 of 26 research outputs");
  await page.reload();
  await expect(page.getByRole("combobox", { name: "Year", exact: true })).toHaveValue("2026");
  await page.locator(".publication-entry:visible summary").first().click();
  await expect(page.locator(".publication-entry:visible details").first()).toHaveAttribute("open", "");
});
