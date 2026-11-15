
import { Page, Locator,expect } from '@playwright/test';

export class Actions {

    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    // Navigate to URL
    async navigate(url: string) {
        await this.page.goto(url);
    }

    // Click element
    async clickElement(locator: Locator) {
        await locator.click();
    }

    // Enter text
    async enterText(locator: Locator, text: string) {
        await locator.fill(text);
    }

    // Get text
    async getText(locator: Locator) {
        return await locator.innerText();
    }

    // Get input value
    async getInputValue(locator: Locator) {
        return await locator.inputValue();
    }

    // Check visibility
 async isVisible(locator: Locator): Promise<void> {
        await expect(locator).toBeVisible();
}

    // Check enabled
    async isEnabled(locator: Locator) {
        return await locator.isEnabled();
    }

    // Clear input
    async clearText(locator: Locator) {
        await locator.clear();
    }

    // Select dropdown
    async selectDropdown(locator: Locator, value: string) {
        await locator.selectOption(value);
    }

    // Wait for element
    async waitForElement(locator: Locator) {
        await locator.waitFor({ state: 'visible' });
    }

    // Hover element
    async hoverElement(locator: Locator) {
        await locator.hover();
    }

    // Press keyboard key
    async pressKey(locator: Locator, key: string) {
        await locator.press(key);
    }

    // Take screenshot
    async takeScreenshot(name: string) {
        await this.page.screenshot({
            path: `screenshots/${name}.png`
        });
    }

    //Wait
    async wait(seconds: number) {
        await this.page.waitForTimeout(seconds * 1000);
    }
}
