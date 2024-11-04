import {test, expect} from '@playwright/test'

test('Auto Complete Pop Up',async ({page})=>{

        await page.waitForTimeout(4000)
        
        await page.goto('https://www.redbus.in/')

        await page.waitForTimeout(2000)

        await page.fill("//*[text()='From']/preceding-sibling::input",'che')

        await page.waitForSelector("ul li[class*='sc-iwsKbI'] div text[class*='Main']")

        let allValues = await page.$$("ul li[class*='sc-iwsKbI'] div text[class*='Main']")
        for(var uniqueValue of allValues){
            let output =await uniqueValue.textContent();
            console.log(output);
        }
        await page.waitForTimeout(2000)

        for(var uniqueValue of allValues){
            let output =await uniqueValue.textContent();
            if(output.includes('Madhavaram')){
                await uniqueValue.click();
                break;
            }
        }
        await page.waitForTimeout(3000);
})