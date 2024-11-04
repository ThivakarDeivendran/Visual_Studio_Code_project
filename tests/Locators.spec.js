import { test, expect } from '@playwright/test'

test('functionality of login page',async ({page})=>{

  await page.goto('https://www.saucedemo.com/')

  await expect(page).toHaveTitle('Swag Labs')

  await page.locator('#user-name').fill('problem_user')

  await page.locator('#password').fill('secret_sauce')

  await page.click("input[id='login-button']")

  var errorMessageText =  await page.locator('.error-button')

  await expect(errorMessageText).toBeVisible();


})

