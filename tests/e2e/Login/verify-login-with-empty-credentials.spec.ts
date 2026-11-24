
import { test } from "../../fixtures/test-fixtures";
import { testData } from "../../test-data/login-data";

test("Verify Login with Empty Credentials", async ({ loginPage, util }) => {
  await loginPage.launchWeb();



  await util.action.clickElement(loginPage.loginButton);

  await util.assert.toHaveText(
    loginPage.toastNotification,
    testData.validationMessages.emptyEmail
  );
});
