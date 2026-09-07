import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';

test('verify tutorialspoint register form submission', async ({ page }) => {
  await page.goto('https://www.tutorialspoint.com/selenium/practice/register.php');

  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();
  const userName = `${firstName.toLowerCase()}${lastName.toLowerCase()}${faker.number.int({ min: 10, max: 99 })}`;
  const password = 'Test@123';

  await page.getByRole('textbox', { name: 'First Name' }).fill(firstName);
  await page.getByRole('textbox', { name: 'lastname' }).fill(lastName);
  await page.getByRole('textbox', { name: 'UserName' }).fill(userName);
  await page.getByRole('textbox', { name: 'Password' }).fill(password);

  await page.getByRole('button', { name: 'Register' }).click();

  await expect(page).toHaveURL(/register.php/);
});
