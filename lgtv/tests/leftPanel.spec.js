const { test, expect } = require("@playwright/test");

test.beforeEach(async ({ page }) => {
  await page.goto("/");
  const panel = page.locator(".mt-10");
  await expect(panel).toBeVisible();
  await panel.click();
});

test("highlighted tiles", async ({ page }) => {
  await page.locator('.pr-5 :text("Highlighted")').click();
  await expect(page.getByText("Hearing Check").first()).toBeVisible();
});

test("free tiles", async ({ page }) => {
  await page.locator('.pr-5 :text("FREE")').click();
  await expect(page.getByText("Pharmacy Discount")).toBeVisible();
  await expect(page.getByText("Photos")).toBeVisible();
  await expect(page.getByText("Messages")).toBeVisible();
});

test("connections tiles", async ({ page }) => {
  await page.locator('.pr-5 :text("Connections")').click();
  await expect(page.getByText("Video Calls")).toBeVisible();
  await expect(page.getByText("Photos")).toBeVisible();
  await expect(page.getByText("Messages")).toBeVisible();
});

test("games tiles", async ({ page }) => {
    await page.locator('.pr-5 :text("Games")').click();
    await expect(page.getByText("Bingo")).toBeVisible();
    await expect(page.getByText("Word Hunt")).toBeVisible();
    await expect(page.getByText("Game Settings")).toBeVisible();
  });

  test("televisits tiles", async ({ page }) => {
    await page.locator('.pr-5 :text("TeleVisits")').click();
    await page.keyboard.press('ArrowRight');
    await expect(page.getByText("Doctor TeleVisit")).toBeVisible();
    await expect(page.getByText("Dentist TeleVisit")).toBeVisible();
    await expect(page.getByText("Therapist TeleVisit")).toBeVisible();
  });

  test("Videos tiles", async ({ page }) => {
    await page.locator('.pr-5 :text("Videos")').click();
    await expect(page.getByText("Health Education")).toBeVisible();
    await expect(page.getByText("Inspiration")).toBeVisible();
    await expect(page.getByText("Tech Education")).toBeVisible();
  });

  test("at home lab tests tiles", async ({ page }) => {
    await page.locator('.pr-5 :text("At-Home Tests")').click();
    await page.keyboard.press('ArrowRight');
    await expect(page.getByText("Hearing Check").first()).toBeVisible();
    await expect(page.getByText("At Home Lab Tests")).toBeVisible();
  });

