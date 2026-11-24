

import { test } from "../../fixtures/test-fixtures";
import { testData } from "../../test-data/login-data";

test("Verify Login with Invalid Email and Valid Password", async ({
  loginPage,
  util,
}) => {
  // Launch the application
  await loginPage.launchWeb();

  // Enter an invalid email address
  await util.action.enterText(
    loginPage.emailInput,
    util.data.randomInvalidEmail()
  );

  // Enter a valid password
  await util.action.enterText(
    loginPage.passwordInput,
    testData.testAccountOne.password
  );

  // Click the Login button
  await util.action.clickElement(loginPage.loginButton);

  // Verify the error toast title
  await util.assert.toHaveText(
    loginPage.toastNotificationTitle,
    testData.validationMessages.toastErrorTitle
  );
});
