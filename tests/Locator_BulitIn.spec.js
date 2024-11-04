
/**
 page.getByRole() to locate by explicit and implicit accessibility attributes.
page.getByText() to locate by text content.
page.getByLabel() to locate a form control by associated label's text.
page.getByPlaceholder() to locate an input by placeholder.
page.getByAltText() to locate an element, usually image, by its text alternative.
page.getByTitle() to locate an element by its title attribute.
page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured).
 */
import { test, expect } from  '@playwright/test'

test('Locators Bulit In Options',async ({page})=>{
  await page.goto('https://www.orangehrm.com/en/book-a-free-demo')

  let pageTitle = await page.title();
  console.log('PageTitle  : ' +pageTitle);

  await expect(page).toHaveTitle('Book Your Free Demo | OrangeHRM')

  let logoImage = await page.getByAltText('OrangeHRM Logo')

  await expect(logoImage).toBeVisible();

  await page.getByPlaceholder('Your Full Name*').fill('Thivakar')

  await page.getByPlaceholder('Business Email*').fill('thivakar@gmail.com')

//   await page.getByRole('input',{id:'Form_getForm_CompanyName'}).fill('testing')

await page.getByRole('input',{id:'Form_getForm_CompanyName'}).fill('Testing')

})