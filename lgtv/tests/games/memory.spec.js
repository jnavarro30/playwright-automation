const { test, expect } = require("@playwright/test");

test.beforeEach(async ({ page }) => {
  await page.goto("/");
  await page.locator(".mt-10").click();
  await page.locator('.pr-5 :text("Games")').press("Enter");
  await page.getByText("Memory Match").click();
});

test("redirect to difficulty menu", async ({ page }) => {
    await expect(page).toHaveURL(/.*games\/memory-match.*/);
});

test("display difficulty levels", async ({ page }) => {
    await expect(page.getByText("Easy")).toBeVisible();
    await expect(page.getByText("Medium")).toBeVisible();
    await expect(page.getByText("Hard")).toBeVisible();
  });

test("redirect to game", async ({ page }) => {
  await page.getByText("Easy").click();
  await expect(page).toHaveURL(/.*games\/memory-match\/play.*/);
});

// test("pause game", async ({ page }) => {
//     await page.getByText("Easy").click();
//     await page.locator("body").click();
//     await page.locator("body").press("Backspace");
//     expect(page.getByText("Memory Match Paused")).toBeTruthy();
// });

// test("quit game", async ({ page }) => {
//     await page.getByText("Hard").click();
//     await page.locator("body").click();
//     await page.locator("body").press("Backspace");
//     await page.locator(':has-text("Quit")').press("Enter");
//     await expect(page).toHaveURL(/.*menu\/games.*|.*home.*device_id.*/);
// });

// test("high score", async ({ page }) => {
//     await page.getByText("Bingo").click();
//     await page.getByText("Fast").click();
//     await page.getByText("Start").click();
//     await page.locator("body").click();
//     await page.locator("body").press("Backspace");
//     await page.getByText("High Score").click();
//     await expect(page.getByText("Bingo: No Score Yet")).toBeVisible();
// });