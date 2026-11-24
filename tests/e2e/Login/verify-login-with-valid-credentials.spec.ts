import {test} from "../../fixtures/test-fixtures"
import { testData } from "../../test-data/login-data";


test("Verify Login with Valid Credentials", async ({ loginPage, util }) => {
await loginPage.launchWeb();

 await util.assert.toHaveText(
    loginPage.loginPageTitle,
    "Login to your account");
    
  await util.action.enterText(
    loginPage.emailInput,
    testData.testAccountOne.username
  );

  await util.action.enterText(
    loginPage.passwordInput,
    testData.testAccountOne.password
  );

  await util.action.clickElement(loginPage.loginButton);

  await util.action.enterText(
    loginPage.otpInput,
    testData.testAccountOne.otp
  );

  await util.action.clickElement(loginPage.submitButton);

  await util.action.clickElement(loginPage.closeButton);

  await util.assert.toHaveText(
    loginPage.dashboardPageTitle,
    "Dashboard"
  );
});