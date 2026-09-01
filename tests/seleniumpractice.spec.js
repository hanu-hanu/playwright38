//basic locators
import { test, expect } from '@playwright/test';

test("verify the selinium register", async ({page}) =>{

await page.goto("https://www.tutorialspoint.com/selenium/practice/register.php")
await page.locator("//input[@id='firstname']").fill("hanu")
await page.locator("//input[@id='lastname']").fill("S")
await page.locator("//input[@id='username']").fill("hanumanth")
await page.locator("//input[@id='password']").fill("HANU@123")
await page.locator("//input[@type='submit']").click()
await page.locator("//a[@type='submit']").click()

});

//prefix
test("verify the selinium register1", async ({page}) =>{

await page.goto("https://www.tutorialspoint.com/selenium/practice/register.php")
await page.locator("//input[starts-with(@id, 'firstname')]").fill("hanu")
await page.locator("//input[starts-with(@id, 'lastname')]").fill("H")
await page.locator("//input[starts-with(@id, 'username')]").fill("hemanth")
await page.locator("//input[starts-with(@id, 'password')]").fill("HANU@45678")
await page.locator("//input[starts-with(@type, 'submit')]").click()

});

test("verify selenium login", async ({page}) =>{
await page.goto("https://www.tutorialspoint.com/selenium/practice/login.php")
await page.getByRole('textbox', {name: 'Email'}).fill("hanumanths8981@gmail.com")
await page.getByRole('textbox', {name: 'password'}).fill("hanu@123")
await page.getByRole('button', {name: 'login'}).click()
});



