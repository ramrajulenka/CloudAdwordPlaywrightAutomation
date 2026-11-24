import { test } from "../../fixtures/test-fixtures";
import { testData } from "../../test-data/login-data";

test.skip("Verify the Forgot Password Page", async ({ loginPage, util }) => {
  // Launch the application
  await loginPage.launchWeb();

  // Click the Forgot Password link
  await util.action.clickElement(
    loginPage.forgotPassword.button);

  // Verify the Forgot Password page title
  await util.assert.toHaveText(
    loginPage.forgotPassword.title,
    "Forgot Password"
  );

  // Verify the Email input field is visible
  await util.assert.toBeVisible(
    loginPage.forgotPassword.emailInput
  );

  // Generate a random email input value

  // Enter the value in the Email field
  await util.action.enterText(
    loginPage.forgotPassword.emailInput,testData.testAccountOne.username
  );


  // Verify the Send Email button is visible
  await util.assert.toBeVisible(
    loginPage.forgotPassword.sendEmailButton
  );
  await util.action.clickElement(loginPage.forgotPassword.sendEmailButton);
  await util.assert.toHaveText(loginPage.toastNotification,testData.validationMessages.withValidEmail);
});
