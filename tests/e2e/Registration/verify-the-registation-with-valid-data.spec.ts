
import { test } from "../../fixtures/test-fixtures";
import { testData } from "../../test-data/registation-data";

test("Verify The Registration Functionality with valid data", async ({loginPage,register,util}) => {
  // Launch application
  await loginPage.launchWeb();

  // Navigate to Registration page
  await util.action.clickElement(register.registrationLink);
  await util.assert.toHaveText(register.registrationPageTitle, "Register");

  // Verify empty field validation
  await util.action.clickElement(register.submitButton);
  await util.assert.toHaveText(
    register.toastNotification,
    testData.validationMessages.emptyName
  );

  // Enter customer name
  const userName = await util.data.randomTextWithRange(10);
  await util.action.enterText(register.customerNameInput, userName);
  await util.assert.toHaveValue(register.customerNameInput, userName);

  // Enter email address
  const email = await util.data.randomEmail();
  await util.action.enterText(register.emailAddressInput, email);
  await util.assert.toHaveValue(register.emailAddressInput, email);

  // Select country dialing code
  const countryCode = testData.countryDialingCodes.qatar.code;
  await util.action.selectOption(register.countryCodeDropdown, countryCode);

  await util.assert.toHaveText(
    register.countryCodeDropdown.locator("option:checked"),
    testData.countryDialingCodes.qatar.countryLabel
  );

  // Enter contact number
  const mobileNumber = util.data.randomMobileNumber();
  await util.action.enterText(register.contactNumberInput, mobileNumber);

  // Accept terms and conditions
  await util.action.clickElement(register.termsAndConditionsCheckbox);

  // Submit registration form
  await util.action.clickElement(register.submitButton);
 // await util.assert.toHaveText(register.toastNotification,testData.validationMessages.registrationSuccess)
});
