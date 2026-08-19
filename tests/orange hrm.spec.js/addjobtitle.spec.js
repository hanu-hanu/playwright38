import { test, expect } from '@playwright/test';
import data from "../../testdata/login.json"
import jobtitledata from "../../testdata/addjobtitle.json"

import { faker } from '@faker-js/faker';

test("verify admin can add job title", async ({page}) =>{

await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

// await page.getByRole('textbox', { name: 'Username' }).fill("Adminn")
// await page.getByRole('textbox', { name: 'Password' }).fill("admin123")
// await page.getByRole('button', { name: 'Login' }).click()

await page.locator("//input[@placeholder='Username']").fill(process.env.APP_USERNAME)
await page.locator("//input[@placeholder='Password']").fill(process.env.APP_PASSWORD)
await page.locator("//button[@type='submit']").click()

//assertion - expect
await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
await expect(page.locator("//p[text()='Time at Work']")).toBeVisible()

await page.getByText('Admin', { exact: true }).first().click()
await page.getByText('Job', { exact: true }).click()
await page.getByRole('menuitem', { name: 'Job Titles' }).click()
await page.getByRole('button', { name: 'Add' }).click()
await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/admin/saveJobTitle")

//using javascript programming
let randomchars = (Math.random() + 1).toString(36).substring(7);
await page.locator("//div[@class='oxd-input-group oxd-input-field-bottom-space']//div//input[@class='oxd-input oxd-input--active']").fill(faker.person.jobTitle())
await page.getByRole('textbox', { name: 'Type description here' }).fill(jobtitledata.jobdescription)
await page.getByRole('textbox', { name: 'Add note' }).fill(jobtitledata.notes)
await page.getByRole('button', { name: 'Save' }).click()
await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewJobTitleList")

});

import testdata from "../../testdata/login.json"
import jobtitle from "../../testdata/addjobtitle.json"
test("verify admin can add another job categories", async ({page}) => {

await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

await page.getByRole('textbox', { name: 'Username' }).fill(testdata.username)
await page.getByRole("textbox", { name: "Password" }).fill(testdata.password)
await page.getByRole("button", { name: "Login" }).click()

await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
await expect(page.locator("//p[text()='Time at Work']")).toBeVisible()

await page.getByText('Admin', { exact: true }).first().click()
await page.getByText('Job', { exact: true }).click()
await page.getByRole('menuitem', { name: 'Job Categories' }).click()
await page.getByRole('button', { name: 'Add' }).click()
await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/admin/saveJobCategory")

let randomchars = (Math.random() + 1).toString(36).substring(7);
await page.locator('div.oxd-input-group.oxd-input-field-bottom-space > div:nth-of-type(2) > input.oxd-input.oxd-input--active').fill(jobtitle.jobcategory + randomchars)
await page.getByRole('button', { name: 'Save' }).click()
await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/admin/jobCategory")

});
import logindata from "../../testdata/login.json"
test("verify login and logout functionality", async ({page}) => {

await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

await page.getByRole('textbox', { name: 'Username' }).fill(logindata.username)
await page.getByRole('textbox', { name: 'password' }).fill(logindata.password)
await page.getByRole('button', { name: 'Login' }).click()

await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
await expect(page.locator('xpath=(//p[@class=\'oxd-text oxd-text--p\'])[1]')).toBeVisible()

await page.locator('i.oxd-icon.bi-caret-down-fill.oxd-userdropdown-icon').click()
await page.getByRole('menuitem', { name: 'Logout' }).click()

});

import data1 from "../../testdata/login.json"
test("verify admin can delete job categeory", async ({page}) => {

await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

await page.getByRole('textbox', { name: 'Username' }).fill(data1.username)
await page.getByRole('textbox', { name: 'Password' }).fill(data1.password)
await page.getByRole('button', { name: 'Login' }).click()

await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
await expect(page.locator("//p[text()='Time at Work']")).toBeVisible()

await page.getByText('Admin', { exact: true }).click()
await page.getByText('Job', { exact: true }).click()
await page.getByRole('menuitem', { name: 'Job Categories' }).click()
await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/admin/jobCategory")

await page.locator("//div[@role='rowgroup']//div[2]//div[1]//div[3]//div[1]//button[1]//i[1]").click()
await page.getByRole('button', { name: 'Yes, Delete' }).click()

});
   