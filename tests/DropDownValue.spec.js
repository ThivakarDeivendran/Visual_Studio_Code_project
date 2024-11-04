import { test, expect } from '@playwright/test'

test("selecting value from dropdown",async ({page})=>{
 
    await page.goto('https://testautomationpractice.blogspot.com/')
   // await page.locator('#country').selectOption({'index': 5});
   // await page.selectOption('#country','India');
    await page.waitForTimeout(5000); 
    const multiElements = await page.$$('#country option');
    for(const uniqueElement of multiElements){
        let stringValue= await uniqueElement.textContent()
       if(stringValue.includes('France')){
        await page.selectOption("#country",uniqueElement);
        break;
       }
    }
    console.log("Testing completed")
})