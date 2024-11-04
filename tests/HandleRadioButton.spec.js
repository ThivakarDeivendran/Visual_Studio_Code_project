import { test, expect } from '@playwright/test'

test('Handling RadioButton',async({page})=>{
   await page.goto('https://testautomationpractice.blogspot.com/')
    await page.waitForTimeout(3000);
    //male RadioButton
    let maleRadioButton = await page.locator("#male")
    maleRadioButton.check()
    await expect.soft(maleRadioButton).toBeChecked();
    await page.waitForTimeout(3000);
    await expect.soft(maleRadioButton.isChecked()).toBeTruthy();
    //female Radiobutton
    await expect.soft( await page.locator("#female").isChecked()).toBeFalsy();
    //All checkboxes are checked
    const multipleElements =await page.$$("//label[text()='Days:']/following-sibling::div/input")
    for(const unique of multipleElements ){
        await unique.check();
        await page.waitForTimeout(2000);
    }
    // all checked checkboxes  are validate
    for(const checkedElement of multipleElements){
        await expect(await checkedElement.isChecked()).toBeTruthy();
        console.log( await checkedElement.getAttribute("value") +" :  is checked successfully ");
    }
})