
import { test } from "../../fixtures/test-fixtures";
import { testData } from "../../test-data/login-data";

test("Verify Login with Valid Email and Invalid Password", async ({
  loginPage,
  util,
}) => {
  // Launch the application
  await loginPage.launchWeb();

  // Enter a valid email address
  await util.action.enterText(
    loginPage.emailInput,
    testData.testAccountOne.username
  );

  // Enter an invalid password
  await util.action.enterText(
    loginPage.passwordInput,
    util.data.randomInvalidPassword()
  );

  // Click the Login button
  await util.action.clickElement(loginPage.loginButton);

  // Verify the error message
  await util.assert.toHaveText(
    loginPage.toastNotificationTitle,testData.validationMessages.toastErrorTitle
  );
});
