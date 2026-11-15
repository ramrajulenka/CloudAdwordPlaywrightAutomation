import { Page } from '@playwright/test';
import {testData} from '../test-data/login-data';
import { Actions } from '../utility/actions';

export class LoginPage {

    readonly page: Page;
    constructor(page: Page) {
        this.page = page;
    }

    get loginPageTitle() {
        return this.page.getByRole('heading', { name: 'Login to your account' });
    }

    get emailTextBox() {
        return this.page.getByText('Email');
    }
    get emailInput() {
        return this.page.getByRole('textbox', { name: 'Email' });
    }

    get passwordTextBox() {
        return this .page.getByText('Password', { exact: true });
    }
    get passwordInput() {
        return this.page.getByRole('textbox', { name: 'Password' });
    }
    get rememberMeCheckBox() {
        return this.page.getByText('Remember me');
    }
    get loginButton() {
        return this.page.getByRole('button', { name: 'LOGIN' });
    }
    get verifyInvalidCredentialsErrorMessage() {
        return this.page.getByText('×Error');
    }

    get otpInput() {
        return this.page.getByRole('textbox', { name: 'OTP' });
    }
    get submitButton() {
        return this.page.getByRole('button', { name: 'SUBMIT' });
    }
    get closeButton() {
        return this.page.getByRole('button', { name: 'Close' });
    }
    get dashboardPageTitle() {
        return this.page.locator('#main-content').getByText('Dashboard');

    }
 public async launchWeb(){
await this.page.goto(testData.BaseURL);

 }
  
public async loginWeb(): Promise<void> {

    // Enter email
    await this.emailInput.fill(testData.testAccountOne.username);

    // Enter password
    await this.passwordInput.fill(testData.testAccountOne.password);

    // Click login
    await this.loginButton.click();

    // Wait for OTP field
    await this.otpInput.waitFor({ state: 'visible' });

    // Enter OTP
    await this.otpInput.fill(testData.testAccountOne.otp);

    // Submit OTP
    await this.submitButton.click();

    // Wait for close button
    await this.closeButton.waitFor({ state: 'visible' });

    // Close popup
    await this.closeButton.click();

}

}