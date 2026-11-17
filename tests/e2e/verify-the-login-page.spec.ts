import { test, expect } from "../fixtures/test-fixtures";
import { testData } from "../test-data/login-data";

test.describe("CloudAdword Studio - Login Tests", () => {
  // Navigate to login page before every test
  test.beforeEach(async ({util}) => {
    await util.action.navigate(testData.BaseURL);
  });

  // Verify Login Page Title
  test("Verify Login Page Title", async ({ loginPage }) => {
    await expect(loginPage.loginPageTitle).toHaveText("Login to your account");
  });

  // Verify Login with Valid Credentials
  test("Verify Login with Valid Credentials", async ({
    loginPage,util

  }) => {
    await util.action.enterText(
      loginPage.emailInput,
      testData.testAccountOne.username,
    );
    await util.action.enterText(
      loginPage.passwordInput,
      testData.testAccountOne.password,
    );

    await util.action.clickElement(loginPage.loginButton);

    await util.action.enterText(loginPage.otpInput, testData.testAccountOne.otp);
    await util.action.clickElement(loginPage.submitButton);

    await util.action.clickElement(loginPage.closeButton);

    await expect(loginPage.dashboardPageTitle).toHaveText("Dashboard");
  });

  // Verify Login with Invalid Credentials
  test("Verify Login with Invalid Credentials", async ({
    loginPage,
    util
  }) => {
    await util.action.enterText(
      loginPage.emailInput,
      testData.testAccountTwo.username,
    );
    await util.action.enterText(
      loginPage.passwordInput,
      testData.testAccountTwo.password,
    );

    await util.action.clickElement(loginPage.loginButton);

    await expect(loginPage.verifyInvalidCredentialsErrorMessage).toContainText(
      "Error",
    );
  });

  //Verify Login with Empty Credentials
  test("Verify Login with Empty Credentials", async ({
    loginPage,
    util
  }) => {
    await util.action.clickElement(loginPage.loginButton);

    await expect(loginPage.verifyInvalidCredentialsErrorMessage).toContainText(
      "Please enter emailaddress",
    );
  });

  // Verify Login with Empty Email and Valid Password
  test("Verify Login with Empty Email and Valid Password", async ({
    loginPage,
    util
  }) => {
    await util.action.enterText(
      loginPage.passwordInput,
      testData.testAccountOne.password,
    );

    await util.action.clickElement(loginPage.loginButton);

    await expect(loginPage.verifyInvalidCredentialsErrorMessage).toContainText(
      "Please enter emailaddress",
    );
  });

  //Verify Login with Valid Email and Empty Password
  test("Verify Login with Valid Email and Empty Password", async ({
    loginPage,
    util
  }) => {
    await util.action.enterText(
      loginPage.emailInput,
      testData.testAccountOne.username,
    );

    await util.action.clickElement(loginPage.loginButton);

    await expect(loginPage.verifyInvalidCredentialsErrorMessage).toContainText(
      "Please enter password",
    );
  });
});
