import { test, expect } from '@playwright/test';
//import logindata from "../../testdata/login.json"

let Username = "Admin"
let Password = "admin123"   
test('verify login with valid credentials', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill();
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill();
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible({timeout: 4000});
  await expect(page.getByText('Time at work')).toBeVisible();
});




