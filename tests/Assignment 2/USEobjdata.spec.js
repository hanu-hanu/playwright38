
import { test, expect } from '@playwright/test';

const employee = {
employee1 : {
    firstname : "john",
    middlename : "doe",
    lastname : "am",
    empid : "7899",
},

employee2 : {
    firstname : "hemanth",
    middlename : "kumar",
    lastname : "g",
    empid : "7900",
},

employee3 : {
    firstname : "kumar",
    middlename : "gowda",
    lastname : "s",
    empid : "7901",
},

employee4 : {
    firstname : "Ashok",
    middlename : "gowda",
    lastname : "j",
    empid : "7902",
},

employee5 : {
    firstname : "anjan",
    middlename : "gowda",
    lastname : "j",
    empid : "7903",
},
};

for(const loop in employee){

test(`add employee ${loop}`, async ({ page }) => {
await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

await page.getByRole('textbox', { name: "Username" }).fill("Admin");
await page.getByRole('textbox', { name: "password" }).fill("admin123");
await page.getByRole('button', { name: "Login" }).click();
await page.waitForURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");
await page.getByRole('link', { name: "PIM" }).click();
await page.getByRole('link', { name: "Add Employee"}).click();
await page.getByRole('textbox', { name: "First Name" }).fill(employee[loop].firstname);
await page.getByRole('textbox', { name: "Middle Name" }).fill(employee[loop].middlename);
await page.getByRole('textbox', {name: "Last Name" }).fill(employee[loop].lastname);
await page.getByRole('textbox').nth(4).fill(employee[loop].empid);
await expect(page.getByRole("button", { name: "Save" })).toBeVisible();
await page.getByRole("button", { name: "Save" }).click();
  

 });
}







