import {test, expect} from '@playwright/test'

test('Selectors Demo', async ({page}) => {


    await page.goto('https://www.saucedemo.com/')
    // using any object property
    await page.click('id=user-name')
    await page.locator('id=user-name').fill('Edison')
    await page.locator('[id="user-name"]').fill('Einstein')
    // using CSS Selector
    // #login-button
    await page.locator('#login-button').click()
    await page.pause()
    // using XPath
    await page.locator('xpath=//input[@name="password"]').fill('Faraday')
    await page.locator('//input[@name="password"]').fill('Faraday')
    // using Text
    await page.locator('text=LOGIN').click();
    await page.locator('input:has-text("LOGIN")').click();
});