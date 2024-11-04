const { test, expect } =require ('@playwright/test')

test('Validating the Soft Assertion',async ({page})=>{
  await page.goto('https://www.saucedemo.com/')

  await expect.soft(page).toHaveTitle('testing')
  await expect.soft(page).toHaveURL('https://www.saucedemo.com/')

  let variable =await page.locator('#user-name');
  await expect.soft(variable).toBeEditable()
  await expect.soft(variable).not.toBeFocused();

  await variable.fill('testing');
})