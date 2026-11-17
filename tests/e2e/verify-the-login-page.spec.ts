import { test, expect } from "../fixtures/test-fixtures";
import { testData } from "../test-data/login-data";

test.describe("CloudAdword Studio - Login Tests", () => {
  // Navigate to login page before every test
  test.beforeEach(async ({ actions }) => {
    await actions.navigate(testData.BaseURL);
  });

  // Verify Login Page Title
  test("Verify Login Page Title", async ({ loginPage }) => {
    await expect(loginPage.loginPageTitle).toHaveText("Login to your account");
  });

  // Verify Login with Valid Credentials
  test("Verify Login with Valid Credentials", async ({
    loginPage,
    actions,
  }) => {
    await actions.enterText(
      loginPage.emailInput,
      testData.testAccountOne.username,
    );
    await actions.enterText(
      loginPage.passwordInput,
      testData.testAccountOne.password,
    );

    await actions.clickElement(loginPage.loginButton);

    await actions.enterText(loginPage.otpInput, testData.testAccountOne.otp);
    await actions.clickElement(loginPage.submitButton);

    await actions.clickElement(loginPage.closeButton);

    await expect(loginPage.dashboardPageTitle).toHaveText("Dashboard");
  });

  // Verify Login with Invalid Credentials
  test("Verify Login with Invalid Credentials", async ({
    loginPage,
    actions,
  }) => {
    await actions.enterText(
      loginPage.emailInput,
      testData.testAccountTwo.username,
    );
    await actions.enterText(
      loginPage.passwordInput,
      testData.testAccountTwo.password,
    );

    await actions.clickElement(loginPage.loginButton);

    await expect(loginPage.verifyInvalidCredentialsErrorMessage).toContainText(
      "Error",
    );
  });

  //Verify Login with Empty Credentials
  test("Verify Login with Empty Credentials", async ({
    loginPage,
    actions,
  }) => {
    await actions.clickElement(loginPage.loginButton);

    await expect(loginPage.verifyInvalidCredentialsErrorMessage).toContainText(
      "Please enter emailaddress",
    );
  });

  // Verify Login with Empty Email and Valid Password
  test("Verify Login with Empty Email and Valid Password", async ({
    loginPage,
    actions,
  }) => {
    await actions.enterText(
      loginPage.passwordInput,
      testData.testAccountOne.password,
    );

    await actions.clickElement(loginPage.loginButton);

    await expect(loginPage.verifyInvalidCredentialsErrorMessage).toContainText(
      "Please enter emailaddress",
    );
  });

  //Verify Login with Valid Email and Empty Password
  test("Verify Login with Valid Email and Empty Password", async ({
    loginPage,
    actions,
  }) => {
    await actions.enterText(
      loginPage.emailInput,
      testData.testAccountOne.username,
    );

    await actions.clickElement(loginPage.loginButton);

    await expect(loginPage.verifyInvalidCredentialsErrorMessage).toContainText(
      "Please enter password",
    );
  });
});
