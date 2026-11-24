
import { test } from "../../fixtures/test-fixtures";
import { testData } from "../../test-data/login-data";

test("Verify the Login Button on the Forgot Password Page", async ({
  loginPage,
  util,
}) => {
  // Launch the application
  await loginPage.launchWeb();

  // Navigate to the Forgot Password page
  await util.action.clickElement(
    loginPage.forgotPassword.button
  );

  // Verify the Login button is visible
  await util.assert.toBeVisible(
    loginPage.forgotPassword.loginButton
  );

  // Click the Login button
  await util.action.clickElement(
    loginPage.forgotPassword.loginButton
  );

  // Verify navigation to the Login page
  await util.assert.toHaveText(
    loginPage.loginPageTitle,
    testData.validationMessages.loginPageTitle
  );
});
