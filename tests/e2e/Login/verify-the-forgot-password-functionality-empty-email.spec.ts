import { test } from "../../fixtures/test-fixtures";
import { testData } from "../../test-data/login-data";

test("Verify the Forgot Password Page", async ({ loginPage, util }) => {
  // Launch the application
  await loginPage.launchWeb();

  // Click the Forgot Password link
  await util.action.clickElement(
    loginPage.forgotPassword.button);

 
  // Kept Email Empty
 

  // Verify the Send Email button is visible
  await util.assert.toBeVisible(
    loginPage.forgotPassword.sendEmailButton
  );
  await util.action.clickElement(loginPage.forgotPassword.sendEmailButton);
  await util.assert.toHaveText(loginPage.toastNotification,testData.validationMessages.withoutEmail);
});
