
import { test } from "../../fixtures/test-fixtures";
import { testData } from "../../test-data/login-data";

test("Verify Login with Invalid Credentials", async ({ loginPage, util }) => {
  await loginPage.launchWeb();


  await util.action.enterText(
    loginPage.emailInput,
    util.data.randomInvalidEmail()
  );

  await util.action.enterText(
    loginPage.passwordInput,
    util.data.randomInvalidPassword()
  );

  await util.action.clickElement(loginPage.loginButton);

  await util.assert.toHaveText(
    loginPage.toastNotificationTitle,
    testData.validationMessages.toastErrorTitle
  );
});
