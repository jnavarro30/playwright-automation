const { test, expect } = require("@playwright/test");

test.beforeEach(async ({ page }) => {
  await page.goto("/");
  await page.locator(".mt-10").click();
  await page.locator('.pr-5 :text("Games")').press("Enter");
  await page.getByText("Slot Machine").click();
});

test("redirect to game", async ({ page }) => {
  await expect(page).toHaveURL(/.*games\/slot-machine\/play.*/);
});

test("lines wins button", async ({ page }) => {
  await page.getByText("Line Wins").click();
  await expect(page.getByText("Base Game Line Wins")).toBeVisible();
});

test("paylines button", async ({ page }) => {
  await page.getByText("Paylines").click();
  await expect(page.getByText("Paylines").first()).toBeVisible();
  await expect(page.locator(".via-indigo-600")).toBeVisible();
});

test("payback info button", async ({ page }) => {
  await page.getByText("Payback Info").click();
  await expect(page.getByText("Payback Information")).toBeVisible();
});

test("game rules pages", async ({ page }) => {
  await page.getByText("Game Rules").click();
  await expect(page.getByText("Help")).toBeVisible();
  await page.locator(".pl-14 > div:nth-child(2)").click();
  await expect(page.getByText("Help...")).toBeVisible();
  await page.locator(".pl-14 > div:nth-child(2)").click();
  await expect(page.getByText("Line Bet").first()).toBeVisible();
  await page.locator(".pl-14 > div:nth-child(2)").click();
  await expect(page.getByText("Special Wins")).toBeVisible();
  await page.locator(".pl-14 > div:nth-child(2)").click();
  await expect(page.getByText("malfunction")).toBeVisible();
  await page.locator(".pl-14 > div:nth-child(2)").click();
  await expect(page.getByText("Additional Information")).toBeVisible();
});
