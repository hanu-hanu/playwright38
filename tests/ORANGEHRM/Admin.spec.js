import { test, expect } from '@playwright/test';
import data from "../../testdata/login.json"
import { faker } from '@faker-js/faker';
import {name, password} from "../../learnjs/operators.js"

test('add a new job category', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill(name);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(password);
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





test("test", async ({ page }) => {
  let firstName = faker.person.firstName();
  let middleName = faker.person.middleName();
  let lastName = faker.person.lastName();
  let empId = faker.string.numeric(6);

  await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
  await page.getByRole("textbox", { name: "Username" }).fill(process.env.APP_USERNAME);
  await page.getByRole("textbox", { name: "Password" }).click();
  await page.getByRole("textbox", { name: "Password" }).fill(process.env.APP_PASSWORD);
  await page.getByRole("button", { name: "Login" }).click();
  await expect(page.getByRole("link", { name: "PIM" })).toBeVisible();
  await page.getByRole("link", { name: "PIM" }).click();
  await expect(page.getByRole("button", { name: " Add" })).toBeVisible();
  await page.getByRole("button", { name: " Add" }).click();
  await expect(page.getByRole("heading", { name: "Add Employee" }),).toBeVisible();
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
  await expect(page.getByRole("heading", { name: "Personal Details" }),).toBeVisible();
});

