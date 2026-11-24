
import { test } from "../../fixtures/test-fixtures";
import { testData } from "../../test-data/registation-data";

test("Verify The Registration Without Terms and Conditions", async ({
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

  // Enter valid Contact Number
  await util.action.enterText(
    register.contactNumberInput,
    util.data.randomMobileNumber()
  );

  // Leave Terms and Conditions unchecked

  // Click Submit button
  await util.action.clickElement(register.submitButton);

  // Verify Terms and Conditions validation message
  await util.assert.toHaveText(
    register.toastNotification,
    testData.validationMessages.termsAndConditions
  );
});
