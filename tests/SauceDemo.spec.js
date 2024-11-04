let { test, expect } = require('@playwright/test')

test('validate the Sauce Demo Home Page',async ({page})=>{
   await page.goto('https://www.saucedemo.com/');

   const pageTitle =  await page.title();
   console.log(pageTitle);

   let pageURL = await page.url();
   console.log(pageURL);

    await expect(page).toHaveTitle('Swag Labs');

   await expect(page).toHaveURL('https://www.saucedemo.com/')

})