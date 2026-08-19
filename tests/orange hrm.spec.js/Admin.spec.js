import { test, expect } from '@playwright/test';
import data from "../../testdata/login.json"
import { faker } from '@faker-js/faker';

test('add a new job category', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'Admin' }).click();
  await page.getByRole('listitem').filter({ hasText: 'Job' }).locator('i').click();
  await page.getByRole('listitem').filter({ hasText: /^Job Categories$/ }).click();
  await page.getByRole('button', { name: ' Add' }).click();
  await page.locator('form').getByRole('textbox').click();
  await page.locator('form').getByRole('textbox').fill('plumber');
  await page.getByRole('button', { name: 'Save' }).click();
  await page.close()
});


test('add a job recruitment ', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'Recruitment' }).click();
  await page.getByRole('button', { name: ' Add' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).fill('divya');
  await page.getByRole('textbox', { name: 'Last Name' }).click();
  await page.getByRole('textbox', { name: 'Last Name' }).fill('m');
  await page.locator('i').nth(5).click();
  await page.getByText('Senior Software Test Engineer 1786630898508').click();
  await page.getByRole('textbox', { name: 'Type here' }).first().click();
  await page.getByRole('textbox', { name: 'Type here' }).first().fill('reachme@gmail.com');
  await page.getByRole('textbox', { name: 'Type here' }).nth(1).click();
  await page.getByRole('textbox', { name: 'Type here' }).nth(1).fill('9191919191');
  await page.getByRole('textbox', { name: 'Enter comma seperated words...' }).click();
  await page.getByRole('textbox', { name: 'Enter comma seperated words...' }).fill('reach me');
  await page.locator('.oxd-icon.bi-calendar').click();
  await page.getByText('13').click();
  await page.locator('textarea').click();
  await page.locator('textarea').fill('reach me ');
  await page.locator('.oxd-icon.bi-check').click();
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByRole('button', { name: 'Shortlist' }).click();
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByRole('button', { name: 'Reject' }).click();
  await page.getByRole('button', { name: 'Save' }).click();
  await expect(page.locator('div').filter({ hasText: 'Application StageNamedivya' }).nth(3)).toBeVisible();
});

test('verify delete a job category', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'Admin' }).click();
  await page.getByRole('listitem').filter({ hasText: 'Job' }).locator('i').click();
  await page.getByRole('listitem').filter({ hasText: /^Job Categories$/ }).click();
  await page.locator('div:nth-child(11) > .oxd-table-row > div:nth-child(3) > .oxd-table-cell-actions > button').first().click();
  await page.getByRole('button', { name: ' Yes, Delete' }).click();
});


test("test", async ({ page }) => {
  let firstName = faker.person.firstName();
  let middleName = faker.person.middleName();
  let lastName = faker.person.lastName();
  let empId = faker.string.numeric(6);

  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
  );
  await page
    .getByRole("textbox", { name: "Username" })
    .fill(data.username);
  await page.getByRole("textbox", { name: "Password" }).click();
  await page
    .getByRole("textbox", { name: "Password" })
    .fill(data.password);
  await page.getByRole("button", { name: "Login" }).click();
  await expect(page.getByRole("link", { name: "PIM" })).toBeVisible();
  await page.getByRole("link", { name: "PIM" }).click();
  await expect(page.getByRole("button", { name: " Add" })).toBeVisible();
  await page.getByRole("button", { name: " Add" }).click();
  await expect(
    page.getByRole("heading", { name: "Add Employee" }),
  ).toBeVisible();
  await page.getByRole("textbox", { name: "First Name" }).click();
  await page.getByRole("textbox", { name: "First Name" }).fill(firstName);
  await page.getByRole("textbox", { name: "Middle Name" }).click();
  await page.getByRole("textbox", { name: "Middle Name" }).fill(middleName);
  await page.getByRole("textbox", { name: "Last Name" }).click();
  await page.getByRole("textbox", { name: "Last Name" }).fill(lastName);
  await page.getByRole("textbox").nth(4).click();
  await page.getByRole("textbox").nth(4).fill(empId);
  await expect(page.getByRole("button", { name: "Save" })).toBeVisible();
  await page.getByRole("button", { name: "Save" }).click();
  await expect(
    page.getByRole("heading", { name: "Personal Details" }),
  ).toBeVisible();
});

