
import { Page } from "@playwright/test";

export class RegistrationPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    // Navigation
    get registrationLink() {
        return this.page.getByRole("link", { name: "Register" });
    }

    get registrationPageTitle() {
        return this.page.getByText("Register", { exact: true });
    }

    // Registration Form Fields
    get customerNameInput() {
        return this.page.getByRole("textbox", { name: "Customer Name" });
    }

    get emailAddressInput() {
        return this.page.getByRole("textbox", { name: "Email" });
    }

    get countryCodeDropdown() {
    return this.page.locator("//select[@id='signup-countrycode']");
}

    get contactNumberInput() {
        return this.page.getByRole("textbox", { name: "Contact No" });
    }

    // Terms and Conditions
    get termsAndConditionsCheckbox() {
        return this.page.getByText("By clicking register you");
    }

    // Form Actions
    get submitButton() {
        return this.page.getByRole("button", { name: "SUBMIT" });
    }

// Toast Notifications
get toastNotification() {
    return this.page.locator("//div[@class='toast-message']");
}
get toastCloseButton() {
    return (index: number) =>
        this.page.locator("//button[normalize-space()='×']").nth(index);
}
    // Registration Status
    get registrationSuccessMessage() {
        return this.page.getByRole('heading', { name: 'Thank You for Registering with Cloud Adword.' });
    }
}
