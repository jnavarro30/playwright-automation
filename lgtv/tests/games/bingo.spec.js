const { test, expect } = require("@playwright/test");

test.beforeEach(async ({ page }) => {
  await page.goto("/");
  await page.locator(".mt-10").click();
  await page.locator('.pr-5 :text("Games")').press("Enter");
});

test("redirect to speed menu", async ({ page }) => {
  await expect(page.getByText("Bingo")).toBeVisible();
  await page.getByText("Bingo").click();
  await expect(page).toHaveURL(/.*games\/bingo.*/);
});

test("redirect to bingo", async ({ page }) => {
  await page.getByText("Bingo").click();
  await page.getByText("Fast").click();
  await expect(page).toHaveURL(/.*games\/bingo\/play.*/);
});

test("start game", async ({ page }) => {
  await page.getByText("Bingo").click();
  await page.getByText("Fast").click();
  await page.getByText("Start").click();
  await expect(page.getByText(/Pull [12] \/ 45/)).toBeVisible();
});

test("display available speeds", async ({ page }) => {
  await page.getByText("Bingo").click();
  await expect(page.getByText("Slow")).toBeVisible();
  await expect(page.getByText("Medium")).toBeVisible();
  await expect(page.getByText("Fast")).toBeVisible();
});

test("change speeds during gameplay", async ({ page }) => {
  await page.getByText("Bingo").click();
  await page.getByText("Medium").click();
  await page.locator(':text("Medium") + div').click();
  await expect(page.getByText("Fast")).toBeVisible();
});

test("pause game", async ({ page }) => {
    await page.getByText("Bingo").click();
    await page.getByText("Fast").click();
    await page.getByText("Start").click();
    await page.locator("body").click();
    await page.locator("body").press("Backspace");
    await expect(page.getByText("Bingo Paused")).toBeVisible();
});

test("quit game", async ({ page }) => {
    await page.getByText("Bingo").click();
    await page.getByText("Fast").click();
    await page.getByText("Start").click();
    await page.locator("body").click();
    await page.locator("body").press("Backspace");
    await page.getByText("Quit").click();
    await expect(page).toHaveURL(/.*menu\/games.*|.*home.*device_id.*/);
});

test("high score", async ({ page }) => {
    await page.getByText("Bingo").click();
    await page.getByText("Fast").click();
    await page.getByText("Start").click();
    await page.locator("body").click();
    await page.locator("body").press("Backspace");
    await page.getByText("High Score").click();
    await expect(page.getByText("Bingo: No Score Yet")).toBeVisible();
});
