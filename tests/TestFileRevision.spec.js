let {test, expect }=require ('@playwright/test')

// test("validate the application",async ({page})=>{

//     await page.goto('https://www.saucedemo.com/')
//     const pageTitle = await page.title();
//     console.log(pageTitle);
//     const pageUrl = await page.url();
//     console.log(pageUrl);

//     await page.locator('#user-name').fill('error_user')
//     await page.waitForTimeout(3000);
//     await page.fill('#password','secret_sauce')
//     await page.waitForTimeout(2000)
//     await page.locator('#login-button').click();
//     await page.waitForTimeout(5000)

//     await page.close();
// })

test('validate the slection of dropdown',async ({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    let pageTitle =await page.title();
    console.log(pageTitle);

    const multipleWebElement =await page.$$('#country option')
    for(const uniqueElement of multipleWebElement){
        console.log(await uniqueElement.textContent());
        let value = await uniqueElement.textContent()
        if(value.includes('India')){
            await page.selectOption('#country',uniqueElement)
        }
    }
    await page.waitForTimeout(5000);
    await page.close();
})