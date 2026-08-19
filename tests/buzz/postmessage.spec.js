import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';

test("verify", async ({page}) => {
 await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

 await page.getByRole('textbox', { name: 'Username' }).fill(process.env.APP_USERNAME)
 await page.getByRole('textbox', { name: 'Password' }).fill(process.env.APP_PASSWORD)
 await page.getByRole('button', { name: 'Login' }).click()
 
 await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")


 


});