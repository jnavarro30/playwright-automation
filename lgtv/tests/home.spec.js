const { test, expect } = require("@playwright/test");

test("has title", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle(/Independa/);
});

test("display greeting, date and weather", async ({ page }) => {
  await page.goto("/");
  await expect(
    page.getByText(/^Good morning|afternoon|evening|night.*/)
  ).toBeVisible();
  await expect(page.getByText("Today is")).toBeVisible();
  await expect(page.getByText(/\d{1,3} .F/)).toBeVisible();
});

