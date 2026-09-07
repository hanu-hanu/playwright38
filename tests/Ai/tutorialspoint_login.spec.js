import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';

test('verify tutorialspoint login page', async ({ page }) => {
  await page.goto('https://www.tutorialspoint.com/selenium/practice/login.php');

  const email = `${faker.person.firstName().toLowerCase()}.${faker.person.lastName().toLowerCase()}${faker.number.int({ min: 10, max: 99 })}@example.com`;
  const password = `Pass@${faker.number.int({ min: 100, max: 9999 })}`;

  await page.getByRole('textbox', { name: 'Email:' }).fill(email);
  await page.getByRole('textbox', { name: 'Password:' }).fill(password);

  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page).toHaveURL(/login\.php/);
});
