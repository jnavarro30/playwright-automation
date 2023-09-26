const { test, expect } = require("@playwright/test");

test.beforeEach(async ({ page }) => {
  await page.goto("/");
  await page.locator(".mt-10").click();
  await page.locator('.pr-5 :text("Games")').press("Enter");
  await page.getByText("Word Hunt").click();
});

test("redirect to game", async ({ page }) => {
  await expect(page).toHaveURL(/.*games\/word-hunt\/play.*/);
});

test("input letter", async ({ page }) => {
    await page.getByText("Q").click();
    await expect(page.locator(`.text-5xl`)).toBeVisible();
})

// test("pause game", async ({ page }) => {
//     await page.locator("body").click();
//     // await page.locator("body").press("Backspace", "Down", "Down", "Enter");
//     await page.locator("body").press("Backspace")
//     await page.locator("body").press("ArrowDown")
//     await page.locator("body").press("ArrowDown")
//     await page.locator("body").press("Enter")
//     await expect(page.locator(".p-6")).toBeVisible();
// });

// test("quit game", async ({ page }) => {
//     await page.getByText("Bingo").click();
//     await page.getByText("Fast").click();
//     await page.getByText("Start").click();
//     await page.locator("body").click();
//     await page.locator("body").press("Backspace");
//     await page.getByText("Quit").click();
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