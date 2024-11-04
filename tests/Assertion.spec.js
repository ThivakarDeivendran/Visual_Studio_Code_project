import { test, expect } from '@playwright/test'

test('Assertion validation space',async ({page})=>{
    await page.goto('https://demoqa.com/automation-practice-form/')
    await expect(page).toHaveTitle('DEMOQA')
    await expect(page).toHaveURL('https://demoqa.com/automation-practice-form/')
    

    await page.waitForSelector("#submit")

    const registerButton =await page.locator("#submit")
    await expect(registerButton).toBeEnabled()
    await expect(registerButton).not.toBeDisabled()

    await expect(registerButton).toHaveAttribute('type','submit');

})