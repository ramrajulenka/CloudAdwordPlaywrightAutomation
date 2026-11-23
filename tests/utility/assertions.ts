
import { expect, Locator, Page } from '@playwright/test';

export class Assertions {

    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    // Visibility Assertions
    async toBeVisible(locator: Locator) {
        await expect(locator).toBeVisible();
    }

    async toBeHidden(locator: Locator) {
        await expect(locator).toBeHidden();
    }

    async toBeAttached(locator: Locator) {
        await expect(locator).toBeAttached();
    }

    // State Assertions
    async toBeEnabled(locator: Locator) {
        await expect(locator).toBeEnabled();
    }

    async toBeDisabled(locator: Locator) {
        await expect(locator).toBeDisabled();
    }

    async toBeEditable(locator: Locator) {
        await expect(locator).toBeEditable();
    }

    async toBeEmpty(locator: Locator) {
        await expect(locator).toBeEmpty();
    }

    async toBeFocused(locator: Locator) {
        await expect(locator).toBeFocused();
    }

    async toBeInViewport(locator: Locator) {
        await expect(locator).toBeInViewport();
    }

    // Text Assertions
    async toHaveText(locator: Locator, expectedText: string | RegExp) {
        await expect(locator).toHaveText(expectedText);
    }

    async toContainText(locator: Locator, expectedText: string | RegExp) {
        await expect(locator).toContainText(expectedText);
    }

    // Value Assertions
    async toHaveValue(locator: Locator, expectedValue: string | RegExp) {
        await expect(locator).toHaveValue(expectedValue);
    }

    async toHaveValues(locator: Locator, expectedValues: string[]) {
        await expect(locator).toHaveValues(expectedValues);
    }

    // Count Assertions
    async toHaveCount(locator: Locator, expectedCount: number) {
        await expect(locator).toHaveCount(expectedCount);
    }

    // Attribute Assertions
    async toHaveAttribute(locator: Locator, attribute: string, expectedValue: string | RegExp) {
        await expect(locator).toHaveAttribute(attribute, expectedValue);
    }

    async toHaveClass(locator: Locator, expectedClass: string | RegExp) {
        await expect(locator).toHaveClass(expectedClass);
    }

    async toHaveId(locator: Locator, expectedId: string) {
        await expect(locator).toHaveId(expectedId);
    }

    // CSS Assertions
    async toHaveCSS(locator: Locator, property: string, expectedValue: string | RegExp) {
        await expect(locator).toHaveCSS(property, expectedValue);
    }

    // Accessibility Assertions
    async toHaveAccessibleName(locator: Locator, expectedName: string | RegExp) {
        await expect(locator).toHaveAccessibleName(expectedName);
    }

    async toHaveAccessibleDescription(locator: Locator, expectedDescription: string | RegExp) {
        await expect(locator).toHaveAccessibleDescription(expectedDescription);
    }

    // JavaScript Property Assertion
    async toHaveJSProperty(locator: Locator, property: string, expectedValue: unknown) {
        await expect(locator).toHaveJSProperty(property, expectedValue);
    }

    // Page Assertions
    async toHaveURL(expectedURL: string | RegExp) {
        await expect(this.page).toHaveURL(expectedURL);
    }

    async toHaveTitle(expectedTitle: string | RegExp) {
        await expect(this.page).toHaveTitle(expectedTitle);
    }

    // Checkbox Assertions
    async toBeChecked(locator: Locator) {
        await expect(locator).toBeChecked();
    }

    async toBeUnchecked(locator: Locator) {
        await expect(locator).not.toBeChecked();
    }
// Verify Text Count
async toBeTextCount(actualCount: string, expectedCount: number) {
    await expect(actualCount).toBe(String(expectedCount));
}
}
