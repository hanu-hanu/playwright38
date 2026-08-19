import { test, expect } from '@playwright/test';

test('verify the demosite dropdown functionality', async ({ page }) => {
  await page.goto('https://demoqa.com/select-menu');
  await page.locator('.css-1xc3v61-indicatorContainer').first().click();
  await page.getByRole('option', { name: 'Group 1, option 1' }).click();
  await page.locator('.css-1xc3v61-indicatorContainer > .css-8mmkcg').first().click();
  await page.getByRole('option', { name: 'Mr.' }).click();
  await page.locator('#oldSelectMenu').selectOption('3');
  await page.locator('div:nth-child(8) > .col-md-6 > .css-b62m3t-container > .css-13cymwt-control > .css-1wy0on6 > .css-1xc3v61-indicatorContainer > .css-8mmkcg').click();
  await page.locator('#react-select-4-option-2').click();
  await page.locator('#react-select-4-option-1').click();
  await page.locator('#react-select-4-option-0').click();
  await page.locator('#react-select-4-option-3').click();
  await page.locator('#cars').selectOption('volvo');
  await page.locator('.col-12.mt-4.col-md-6 > div:nth-child(2)').click();
  await expect(page.locator('div').nth(3)).toBeVisible();
});

