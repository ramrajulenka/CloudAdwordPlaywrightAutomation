import { test } from "../../fixtures/test-fixtures";
import { testData } from "../../test-data/registation-data";

test("Verify The Registration Functionality with valid data", async ({
  loginPage,
  register,
  util,page
}) => {
  // Launch application
  await loginPage.launchWeb();

  // Navigate to Registration page
  await util.action.clickElement(register.registrationLink);

  // Verify Registration page title
  await util.assert.toHaveText(
    register.registrationPageTitle,
    "Register"
  );

  // Generate and enter customer name
  const userName = await util.data.randomTextWithRange(10);
  await util.action.enterText(register.customerNameInput, userName);
  await util.assert.toHaveValue(register.customerNameInput, userName);

  // Generate and enter email address
  const email = await util.data.randomEmail();
  await util.action.enterText(register.emailAddressInput, email);
  await util.assert.toHaveValue(register.emailAddressInput, email);

  // Select Qatar country dialing code
  const countryCode = testData.countryDialingCodes.qatar.code;

  await util.action.selectOption(
    register.countryCodeDropdown,
    countryCode
  );

  // Verify selected country dialing code
  await util.assert.toHaveText(
    register.countryCodeDropdown.locator("option:checked"),
    testData.countryDialingCodes.qatar.countryLabel
  );

  // Generate and enter contact number
  const mobileNumber = await util.data.randomMobileNumber();

  await util.action.enterText(
    register.contactNumberInput,
    mobileNumber
  );

  await util.assert.toHaveValue(
    register.contactNumberInput,
    mobileNumber
  );

  // Accept Terms and Conditions
  await util.action.clickElement(
    register.termsAndConditionsCheckbox
  );

  // Submit registration form
  await util.action.clickElement(register.submitButton);

  // Verify successful registration
  //await page.pause();
  await page.waitForTimeout(5000);
  await util.assert.toBeVisible(register.registrationSuccessMessage);
  await util.assert.toHaveText(
    register.registrationSuccessMessage,
    testData.validationMessages.registrationSuccess
  );
});
