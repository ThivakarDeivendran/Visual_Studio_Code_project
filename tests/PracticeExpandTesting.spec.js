// import { test, expect} from '@playwright/test'

const { test, expect } =require ('@playwright/test')

test("Practice login Function",async ({page})=>{
  await page.goto("https://practice.expandtesting.com/login")
  let pageTitle = await page.title();
  console.log("PageTitle  : " + pageTitle);

  await expect(page).toHaveTitle('Test Login Page for Automation Testing Practice');

  await page.fill('#username','practice');

  await page.fill('#password','SuperSecretPassword!');

  //await page.getByRole('button',{type:'submit'}).click();

    await page.click("//button[text()='Login']");
    
  let webElement = page.locator("//i[text()=' Logout']/parent::a")

  await expect(webElement).toBeVisible();

  await page.close()
})