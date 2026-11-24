
import { test } from "../../fixtures/test-fixtures";
import { testData } from "../../test-data/registation-data";

test("Verify The Registration With Invalid Email", async ({
  loginPage,
  register,
  util,
}) => {
  // Launch application
  await loginPage.launchWeb();

  // Navigate to Registration page
  await util.action.clickElement(register.registrationLink);

  // Enter valid Customer Name
  await util.action.enterText(
    register.customerNameInput,
    util.data.randomTextWithRange(8)
  );

  // Enter invalid Email Address
  await util.action.enterText(
    register.emailAddressInput,
    util.data.randomInvalidEmail()
  );

  // Enter valid Contact Number
  await util.action.enterText(
    register.contactNumberInput,
    util.data.randomMobileNumber()
  );

  // Accept Terms and Conditions
  await util.action.clickElement(register.termsAndConditionsCheckbox);

  // Click Submit button
  await util.action.clickElement(register.submitButton);

  // Verify Invalid Email validation message
  await util.assert.toHaveText(
    register.toastNotification,
    testData.validationMessages.invalidEmail
  );
});
