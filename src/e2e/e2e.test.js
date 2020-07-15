import puppetteer from 'puppeteer';

const { fork } = require('child_process');

jest.setTimeout(30000);
describe('Validation', () => {
  let browser = null;
  let page = null;
  let server = null;
  const baseUrl = 'http://localhost:9000';
  beforeAll(async () => {
    server = fork(`${__dirname}/e2e.server.js`);
    await new Promise((resolve, reject) => {
      server.on('error', () => {
        reject();
      });
      server.on('message', (message) => {
        if (message === 'ok') {
          resolve();
        }
      });
    });
    browser = await puppetteer.launch({
      // headless: false,
      // slowMo: 100,
      // devtools: true,
    });
    page = await browser.newPage();
  });
  afterAll(async () => {
    await browser.close();
    server.kill();
  });
  test('Valid', async () => {
    await page.goto(baseUrl);
    const input = await page.$('input');
    const button = await page.$('button');
    await input.type('245434564356745');
    await button.click();
    const result = await page.evaluate(() => document.getElementById('valid').textContent);
    await expect(result).toBe('Number car is valid');
  });
  test('Invalid', async () => {
    await page.goto(baseUrl);
    const input = await page.$('input');
    const button = await page.$('button');
    await input.type('44456756');
    await button.click();
    const result = await page.evaluate(() => document.getElementById('valid').textContent);
    await expect(result).toBe('Number car is not valid');
  });
});
