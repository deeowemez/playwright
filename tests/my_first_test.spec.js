const {test, expect} = require('@playwright/test')

test('first test', async({page}) => {

    await page.goto('https://google.com') //vist URL
    await expect(page).toHaveTitle('Google') 
})

