const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 1400 }, deviceScaleFactor: 3 });
  await page.goto('http://localhost:5183/mobile-app', { waitUntil: 'networkidle' });
  const target = page.locator('[role="img"][aria-label*="push notifications"]');
  await target.scrollIntoViewIfNeeded();
  await page.waitForTimeout(3000);
  const box = await target.boundingBox();
  console.log('box', box);
  await target.screenshot({ path: 'scratch-notif-mine.png' });
  await browser.close();
})();
