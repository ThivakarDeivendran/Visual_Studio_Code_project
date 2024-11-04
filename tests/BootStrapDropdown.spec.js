let {test, expect}= require('@playwright/test')
test('BootStrapDropdown',async ({page})=>{
await page.goto('https://www.jquery-az.com/boots/demo.php?ex=63.0_2')
await page.waitForTimeout(2000);
var pageTitle =await page.title()
console.log(pageTitle);

await page.click('button.multiselect')
await page.waitForTimeout(2000);
 let values =await page.$$('ul>li a label b')
 for(let value of values){
    console.log("Text value",value.textContent())
 }

 let inputs = await page.$$('ul>li a label input')
 for(let input of inputs){
    if(await input.isChecked()){
        await input.uncheck();
    } else{
        await input.check();
    }
 }
 await page.waitForTimeout(5000)
})