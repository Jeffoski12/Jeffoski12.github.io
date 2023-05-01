//fetching a screenshot from a website
const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://example.com');
  await page.screenshot({ path: 'example.png' });
  await browser.close();
})();



//logging all JS files inside a given URL
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto('https://example.com');
  const jsUrls = await page.$$eval('script[src]', scripts => scripts.map(script => script.src));

  console.log(jsUrls.filter(url => url.endsWith('.js')));

  await browser.close();
})();
