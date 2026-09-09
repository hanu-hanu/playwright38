//basic locators
import { test, expect } from '@playwright/test';

test("verify the selinium register", async ({page}) =>{

let details = ["hanumnth", "s", "hanu123", "hanu@123",] //array

await page.goto("https://www.tutorialspoint.com/selenium/practice/register.php")
await page.locator("//input[@id='firstname']").fill(details[0])
await page.locator("//input[@id='lastname']").fill(details[1])
await page.locator("//input[@id='username']").fill(details[2])
await page.locator("//input[@id='password']").fill(details[3])
await page.locator("//input[@type='submit']").click()
await page.locator("//a[@type='submit']").click()

});

//prefix
test("verify the selinium register1", async ({page}) =>{

  const logindetails = {
        firstname : "hanumanth",
        lastname : "s",
        username : "yoghya",
        password : "hanu@1234"
    }  //object

await page.goto("https://www.tutorialspoint.com/selenium/practice/register.php")
await page.locator("//input[starts-with(@id, 'firstname')]").fill(logindetails.firstname)
await page.locator("//input[starts-with(@id, 'lastname')]").fill(logindetails.lastname)
await page.locator("//input[starts-with(@id, 'username')]").fill(logindetails.username)
await page.locator("//input[starts-with(@id, 'password')]").fill(logindetails.password)
await page.locator("//input[starts-with(@type, 'submit')]").click()

});

 for (let i=1; i<=5; i++){ // string literals

test(`verify selenium login ${i}`, async ({page}) =>{
await page.goto("https://www.tutorialspoint.com/selenium/practice/login.php")
await page.getByRole('textbox', {name: 'Email'}).fill("hanumanths8981@gmail.com")
await page.getByRole('textbox', {name: 'password'}).fill("hanu@123")
await page.getByRole('button', {name: 'login'}).click()
});

 }

