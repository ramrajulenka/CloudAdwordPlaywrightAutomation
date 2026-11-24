import { test } from "../../fixtures/test-fixtures";
import { testData } from "../../test-data/login-data";

test("Verify the Forgot Password Page", async ({ loginPage, util }) => {
  // Launch the application
  await loginPage.launchWeb();

  // Click the Forgot Password link
  await util.action.clickElement(
    loginPage.forgotPassword.button);


  // Generate a random email input value
  const inputValue = util.data.randomTextWithRange(8);

  // Enter the value in the Email field
  await util.action.enterText(
    loginPage.forgotPassword.emailInput,
    inputValue
  );

  // Verify the entered email value
  await util.assert.toHaveValue(
    loginPage.forgotPassword.emailInput,
    inputValue
  );

  await util.action.clickElement(loginPage.forgotPassword.sendEmailButton);
  await util.assert.toHaveText(loginPage.toastNotification,testData.validationMessages.withInvaliEmail);
});
