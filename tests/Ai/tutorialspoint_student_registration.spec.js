import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';

test('verify student registration form submission', async ({ page }) => {
  await page.goto('https://www.tutorialspoint.com/selenium/practice/selenium_automation_practice.php');

  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();
  const email = faker.internet.email();
  const mobile = faker.string.numeric(10);
  const dob = '1998-05-12';
  const subject = 'Automation Testing';
  const address = '123 Main Street, New York, NY 10001, USA';

  await page.getByRole('textbox', { name: 'Name:' }).fill(`${firstName} ${lastName}`);
  await page.getByRole('textbox', { name: 'Email:' }).fill(email);
  await page.locator('input[type="radio"]').first().check();
  await page.getByRole('textbox', { name: 'Mobile(10 Digits):' }).fill(mobile);
  await page.getByRole('textbox', { name: 'Date of Birth:' }).fill(dob);
  await page.getByRole('textbox', { name: 'Subjects:' }).fill(subject);
  await page.locator('input[type="checkbox"]').first().check();
  await page.getByRole('textbox', { name: 'Currend Address' }).fill(address);

  await page.locator('select').first().selectOption('Rajasthan');
  await page.locator('select').nth(1).selectOption('Agra');

  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page).toHaveURL(/selenium_automation_practice.php/);
});
