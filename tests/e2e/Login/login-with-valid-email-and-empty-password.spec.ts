
import { test } from "../../fixtures/test-fixtures";
import { testData } from "../../test-data/login-data";

test("Verify Login with Valid Email and Empty Password", async ({ loginPage, util }) => {
  await loginPage.launchWeb();


  await util.action.enterText(
    loginPage.emailInput,
    testData.testAccountOne.username
  );

  await util.action.clickElement(loginPage.loginButton);

  await util.assert.toHaveText(
    loginPage.toastNotification,
    testData.validationMessages.emptyPassword
  );
});
