import { chromium } from 'playwright';

(async () => {
  // Launch the Chrome browser
  const browser = await chromium.launch({ headless: false, product: 'chrome' });

  // Create a new context and page
  const context = await browser.newContext();
  const page = await context.newPage();

  // Navigate to a website (e.g., google.com)
  await page.goto('https://www.google.com');

  // Perform additional actions as needed
  await page.screenshot({ path: 'screenshot.png' });

  // Close the browser
  await browser.close();
})();