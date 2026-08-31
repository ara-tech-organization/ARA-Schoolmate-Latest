import { chromium } from 'playwright'
const browser = await chromium.launch()
const page = await browser.newPage({ viewport: { width: 1280, height: 900 } })
try {
  await page.goto('http://localhost:5230/mobile-app', { waitUntil: 'networkidle' })
  await page.waitForTimeout(4000) // let PageLoader fully unmount (3.4s)
  const heading = page.locator('text=One App, Complete School Control')
  await heading.waitFor({ state: 'visible', timeout: 10000 })
  await heading.scrollIntoViewIfNeeded()
  await page.waitForTimeout(1000)
  await page.screenshot({ path: 'C:/Users/karth/AppData/Local/Temp/claude/c--Users-karth-OneDrive-Documents-Ara-Schoolmate-new/ebc3fc20-aea5-4cb9-9a2b-4ef5e3ec117e/scratchpad/oneapp-devices.png' })
  console.log('done', page.url())
} catch (err) {
  console.error('ERROR', err.message)
  await page.screenshot({ path: 'C:/Users/karth/AppData/Local/Temp/claude/c--Users-karth-OneDrive-Documents-Ara-Schoolmate-new/ebc3fc20-aea5-4cb9-9a2b-4ef5e3ec117e/scratchpad/oneapp-error.png' })
} finally {
  await browser.close()
}
