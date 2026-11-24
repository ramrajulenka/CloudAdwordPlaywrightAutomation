
import { test } from "../../fixtures/test-fixtures";
import { testData } from "../../test-data/registation-data";

test("Verify The Registration With Invalid Mobile Number", async ({
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
    util.data.randomTextWithRange(9)
  );

  // Enter valid Email Address
  await util.action.enterText(
    register.emailAddressInput,
    util.data.randomEmail()
  );

  // Enter invalid Mobile Number
  await util.action.enterText(
    register.contactNumberInput,
    util.data.randomInvalidMobileNumber()
  );

  // Accept Terms and Conditions
  await util.action.clickElement(register.termsAndConditionsCheckbox);

  // Click Submit button
  await util.action.clickElement(register.submitButton);

  // Verify Invalid Mobile Number validation message
  await util.assert.toHaveText(
    register.toastNotification,
    testData.validationMessages.invalidContactNumber
  );
});
