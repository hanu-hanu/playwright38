import { test, expect } from '@playwright/test';

test('verify login with valid credentials', async ({ page }) => {
await page.goto("https://register.rediff.com/register/register.php?FormName=user_details");

// const checkboxstatus = await page.locator('//input[@type="checkbox"]').isChecked()
// consolelog(checkboxstatus)
await page.getByRole('textbox', {name: 'Enter your full name'}).fill('hanu')
await page.getByRole('textbox', {name: 'Enter Rediffmail ID'}).fill('hanuyoghyahanu@getMaxListeners.com')
await page.getByRole('textbox', {name: 'Enter password'}).fill('hanu@123')
await page.getByRole('textbox', {name: 'Retype password'}).fill('hanu@123')
await page.getByRole('combobox').nth(0).selectOption('25')
await page.getByRole('combobox').nth(1).selectOption('11')
await page.getByRole('combobox').nth(2).selectOption('2001')
await page.getByRole('radio', {name:'Female'}).click()
await page.getByRole('combobox').nth(3).selectOption('99')
await page.getByRole('combobox').nth(4).selectOption('Thiruvananthapuram')
await page.getByRole('textbox', {name: 'Enter recovery email'}).fill('hanu@gmail.com')
await page.getByRole('checkbox').click()
await page.getByRole('textbox').nth(5).fill('1234567890')
await page.getByRole('textbox', {name: 'Enter Captcha'}).fill('NCYL')
await page.getByRole('button', { name: 'Create my account' }).click()
//await page.getByRole('button', { name: 'Check availability' }).click()





});