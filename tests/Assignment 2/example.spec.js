import { test, expect } from '@playwright/test';

test(".env using CLI commands", async ({page}) => {
await page.goto("https://demoqa.com/text-box")
await page.getByRole('textbox', { name: 'Full Name' }).fill(process.env.APP_FULLNAME)
await page.getByRole('textbox', { name: 'name@example.com' }).fill(process.env.APP_EMAIL)
await page.getByRole('textbox', { name: 'Current Address' }).fill(process.env.APP_CURRENTADDRESS)
await page.getByRole('textbox').nth(3).fill(process.env.APP_PERMANENTADDRESS)
await page.getByRole('button', { name: 'Submit' }).click()

});