import { test, expect } from '@playwright/test';

test('verify practice test automation login', async ({ page }) => {
  await page.goto('https://practicetestautomation.com/practice-test-login/');

  await page.getByRole('textbox', { name: 'Username' }).fill('student');
  await page.getByRole('textbox', { name: 'Password' }).fill('Password123');
  await page.getByRole('button', { name: 'Submit' }).click();

  await expect(page).toHaveURL('https://practicetestautomation.com/logged-in-successfully/');
  await expect(page.getByRole('heading', { name: 'Logged In Successfully' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Log out' })).toBeVisible();
});
