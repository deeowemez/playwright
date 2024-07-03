import { test, expect, chromium } from '@playwright/test'

test('Slow Motion and video recording demo', async () => {

    const browser = await chromium.launch({
        slowMo: 500,
        headless: false
    });

    const context = await browser.newContext({
        recordVideo: {
            dir: 'videos',
            size: { width: 800, height: 600 }
        }
    });

    const page = await context.newPage();


    await page.goto('https://www.saucedemo.com/');
    await page.locator('[data-test="login-container"] div').filter({ hasText: 'Login' }).first().click();
    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="username"]').press('Tab');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
    await expect(page.locator('[data-test="secondary-header"]')).toBeVisible();
    await page.locator('[data-test="item-4-img-link"]').click();
    await expect(page).toHaveURL('https://saucelabs.com/');
    await expect(page.locator('[data-test="item-sauce-labs-backpack-img"]')).toBeVisible();
    await expect(page.getByText('Sauce Labs Backpackcarry.')).toBeVisible();
    await page.locator('[data-test="add-to-cart"]').click();
    await page.locator('[data-test="back-to-products"]').click();
    await page.getByRole('button', { name: 'Open Menu' }).click();
    await page.locator('[data-test="logout-sidebar-link"]').click();

    await context.close();

})