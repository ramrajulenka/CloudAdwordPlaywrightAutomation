

import { test } from "../../fixtures/test-fixtures";
import { testData } from "../../test-data/login-data";

// Verify Login with Empty Email and Valid Password
test("Verify Login with Empty Email and Valid Password", async ({
  loginPage,
  util,
}) => {
  // Launch the application
  await loginPage.launchWeb();

  //Email Kept Empty

  // Enter a valid password
  await util.action.enterText(
    loginPage.passwordInput,
    testData.testAccountOne.password
  );

  // Click the Login button
  await util.action.clickElement(loginPage.loginButton);

  // Verify the email validation message
  await util.assert.toHaveText(
    loginPage.toastNotification,
    testData.validationMessages.emptyEmail
  );
});
