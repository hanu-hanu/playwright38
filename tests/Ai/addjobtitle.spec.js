import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';

test("verify admin can add job title", async ({page}) => {
  // Navigate to login page
  await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
  
  // Login with credentials
  await page.getByRole('textbox', { name: 'Username' }).fill("Admin")
  await page.getByRole('textbox', { name: 'Password' }).fill("admin123")
  await page.getByRole('button', { name: 'Login' }).click()
  
  // Assert dashboard is displayed
  await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
  await expect(page.locator("//p[text()='Time at Work']")).toBeVisible()
  
  // Navigate to Admin module
  await page.getByText('Admin', { exact: true }).first().click()
  
  // Click on Job menu
  await page.getByText('Job', { exact: true }).click()
  
  // Click on Job Titles
  await page.getByRole('menuitem', { name: 'Job Titles' }).click()
  await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewJobTitleList")
  
  // Click Add button
  await page.getByRole('button', { name: 'Add' }).click()
  await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/admin/saveJobTitle")
  
  // Generate random job title using faker
  let jobTitle = faker.person.jobTitle()
  
  // Fill Job Title
  await page.locator("//div[@class='oxd-input-group oxd-input-field-bottom-space']//div//input[@class='oxd-input oxd-input--active']").fill(jobTitle)
  
  // Fill Job Description
  await page.getByRole('textbox', { name: 'Type description here' }).fill("Develop and maintain backend applications, lead development team")
  
  // Upload Job Specification file
  await page.locator("//input[@type='file']").setInputFiles("dummy_resume.txt")
  
  // Fill Note
  await page.getByRole('textbox', { name: 'Add note' }).fill("Senior developer role requiring 5+ years of experience in software development with expertise in backend technologies")
  
  // Save
  await page.getByRole('button', { name: 'Save' }).click()
  
  // Verify success message
  await expect(page.locator("//p[text()='Successfully Saved']")).toBeVisible()
  
})

