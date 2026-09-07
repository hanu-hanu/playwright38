import { test, expect } from '@playwright/test';

test('verify orangehrm login and dashboard navigation', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  await page.getByRole('textbox', { name: 'username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
  await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
});
