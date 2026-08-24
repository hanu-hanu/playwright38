import { test, expect } from '@playwright/test';
import data from "../../testdata/demoqa.json";
import { faker } from '@faker-js/faker';

test("1", async ({page}) => {
await page.goto("https://demoqa.com/text-box")
await page.getByRole('textbox', { name: 'Full Name' }).fill("Hanumanth")
await page.getByRole('textbox', { name: 'name@example.com' }).fill("hanu123@gmail.com")
await page.getByRole('textbox', { name: 'Current Address' }).fill("Bangalore")
await page.getByRole('textbox').nth(3).fill("Andhra Pradesh")
await page.getByRole('button', { name: 'Submit' }).click()

});


test("json", async ({page}) => {
await page.goto("https://demoqa.com/text-box")
await page.getByRole('textbox', { name: 'Full Name' }).fill(data.fullname)
await page.getByRole('textbox', { name: 'name@example.com' }).fill(data.email)
await page.getByRole('textbox', { name: 'Current Address' }).fill(data.currentaddress)
await page.getByRole('textbox').nth(3).fill(data.permanentaddress)
await page.getByRole('button', { name: 'Submit' }).click()

});

test(".env", async ({page}) => {
await page.goto("https://demoqa.com/text-box")
await page.getByRole('textbox', { name: 'Full Name' }).fill(process.env.APP_FULLNAME)
await page.getByRole('textbox', { name: 'name@example.com' }).fill(process.env.APP_EMAIL)
await page.getByRole('textbox', { name: 'Current Address' }).fill(process.env.APP_CURRENTADDRESS)
await page.getByRole('textbox').nth(3).fill(process.env.APP_PERMANENTADDRESS)
await page.getByRole('button', { name: 'Submit' }).click()

});

test("using JS code", async ({page}) => {
await page.goto("https://demoqa.com/text-box")

let randomchars = (Math.random() + 1).toString(36).substring(7);
const fullname = "User_" + randomchars;
const email = "User_" + randomchars + "@example.com";
const currentAddress = "Address"+""+randomchars;
// console.log(randomchars)
// console.log(currentAddress)
// console.log(email)
await page.getByRole('textbox', { name: 'Full Name' }).fill(randomchars)
await page.getByRole('textbox', { name: 'name@example.com' }).fill(email)
await page.getByRole('textbox', { name: 'Current Address' }).fill(currentAddress)
await page.getByRole('textbox').nth(3).fill("Permanent Address"+randomchars)
await page.getByRole('button', { name: 'Submit' }).click()

});


test("using faker", async ({page}) => {
await page.goto("https://demoqa.com/text-box")
await page.getByRole('textbox', { name: 'Full Name' }).fill(faker.person.fullName());
await page.getByRole('textbox', { name: 'name@example.com' }).fill(faker.internet.email());
await page.getByRole('textbox', { name: 'Current Address' }).fill(faker.location.streetAddress())
await page.getByRole('textbox').nth(3).fill(faker.location.streetAddress())
await page.getByRole('button', { name: 'Submit' }).click()

});

    
