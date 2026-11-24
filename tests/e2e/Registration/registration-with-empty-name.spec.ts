
import { test } from "../../fixtures/test-fixtures";
import { testData } from "../../test-data/registation-data";

test("Verify The Registration With Empty Customer Name", async ({
  loginPage,
  register,
  util,
}) => {
  await loginPage.launchWeb();

  await util.action.clickElement(register.registrationLink);

  // Enter valid email address
  await util.action.enterText(
    register.emailAddressInput,
    util.data.randomEmail()
  );

  // Enter valid contact number
  await util.action.enterText(
    register.contactNumberInput,
    util.data.randomMobileNumber()
  );

  // Accept Terms and Conditions
  await util.action.clickElement(register.termsAndConditionsCheckbox);

  // Submit registration form
  await util.action.clickElement(register.submitButton);

  // Verify empty customer name validation message
  await util.assert.toHaveText(
    register.toastNotification,
    testData.validationMessages.emptyName
  );
});
