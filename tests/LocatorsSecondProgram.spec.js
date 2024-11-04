const { test, expect } = require('@playwright/test')

test('Locating Multiple Elements',async ({page})=>{
    await page.goto('https://www.saucedemo.com/')
    const pageTitle = await page.title();
    console.log('Application page title  :  ' + pageTitle)    
    expect(page).toHaveTitle('Swag Labs')

    await page.locator('#user-name').fill('standard_user')
    await page.locator('#password').fill('secret_sauce')
    await page.click('#login-button')

    let app_logo= await page.locator('.app_logo')
    expect(app_logo).toBeVisible();

    console.log('Application logo  ' +  await app_logo.textContent());
    await page.waitForSelector("//div[@class='inventory_list']//div[contains(@class,'description')]/div/a/div")
    const allProductText = await page.$$("//div[@class='inventory_list']//div[contains(@class,'description')]/div/a/div");
   
    for( let uniqueProductText of allProductText){
        let productName = await uniqueProductText.textContent();
        console.log(productName);
    }
    await page.close();

})