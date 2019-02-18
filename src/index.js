/* eslint-disable no-undef */
import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    args: ['--start-maximized'],
  });
  const page = await browser.newPage();
  await page.goto('https://eatigo.com/th/bangkok/en');

  await page.type('.search--text-field', 'steak');

  // TODO implement

  await page.waitFor(5000);
  await browser.close();
})();
