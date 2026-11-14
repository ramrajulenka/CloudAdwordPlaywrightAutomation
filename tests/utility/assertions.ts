
import { expect, Locator, Page } from '@playwright/test';

export class Assertions {

    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    // Verify Element is Visible
    async verifyElementVisible(locator: Locator) {
        await expect(locator).toBeVisible();
    }

    // Verify Element is Hidden
    async verifyElementHidden(locator: Locator) {
        await expect(locator).toBeHidden();
    }

    // Verify Element is Enabled
    async verifyElementEnabled(locator: Locator) {
        await expect(locator).toBeEnabled();
    }

    // Verify Element is Disabled
    async verifyElementDisabled(locator: Locator) {
        await expect(locator).toBeDisabled();
    }

    // Verify Element Text
    async verifyElementText(locator: Locator, expectedText: string) {
        await expect(locator).toHaveText(expectedText);
    }

    // Verify Element Contains Text
    async verifyElementContainsText(locator: Locator, expectedText: string) {
        await expect(locator).toContainText(expectedText);
    }

    // Verify Input Value
    async verifyInputValue(locator: Locator, expectedValue: string) {
        await expect(locator).toHaveValue(expectedValue);
    }

    // Verify Element Count
    async verifyElementCount(locator: Locator, expectedCount: number) {
        await expect(locator).toHaveCount(expectedCount);
    }
// Verify Text Count
async verifyTextCount(actualCount: string, expectedCount: number) {
    await expect(actualCount).toBe(String(expectedCount));
}
    // Verify Page URL
    async verifyPageURL(expectedURL: string | RegExp) {
        await expect(this.page).toHaveURL(expectedURL);
    }

    // Verify Page Title
    async verifyPageTitle(expectedTitle: string | RegExp) {
        await expect(this.page).toHaveTitle(expectedTitle);
    }

    // Verify Checkbox is Checked
    async verifyCheckboxChecked(locator: Locator) {
        await expect(locator).toBeChecked();
    }

    // Verify Checkbox is Unchecked
    async verifyCheckboxUnchecked(locator: Locator) {
        await expect(locator).not.toBeChecked();
    }

}
