
import { test } from "../../fixtures/test-fixtures";
import { testData } from "../../test-data/registation-data";

test.describe("CloudAdword Studio - Registration Tests", () => {

  // Navigate to Registration Page before every test
  test.beforeEach(async ({ util, register, loginPage }) => {
    await loginPage.launchWeb();
    await util.action.clickElement(register.registrationLink);
  });

  // Verify Registration Page Title
  test("Verify Registration Page Title", async ({ register, util }) => {
    await util.assert.toHaveText(
      register.registrationPageTitle,
      "Register"
    );
  });

  // Verify Registration with Valid Credentials
  test.skip("Verify Registration with Valid Credentials", async ({
    register,
    util,
  }) => {

    await util.assert.toHaveText(
      register.registrationPageTitle,
      "Register"
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

    await util.action.selectOption(
      register.countryCodeDropdown,
      countryCode
    );

    await util.assert.toHaveText(
      register.countryCodeDropdown.locator("option:checked"),
      testData.countryDialingCodes.qatar.countryLabel
    );

    // Enter contact number
    const mobileNumber = util.data.randomMobileNumber();

    await util.action.enterText(
      register.contactNumberInput,
      mobileNumber
    );

    // Accept Terms and Conditions
    await util.action.clickElement(
      register.termsAndConditionsCheckbox
    );

    // Submit Registration Form
    await util.action.clickElement(register.submitButton);

    // Verify Registration Success Message
    await util.assert.toHaveText(
      register.toastNotification,
      testData.validationMessages.registrationSuccess
    );
  });

  // Verify Empty Name Validation
  test("Verify Registration with Empty Name", async ({
    register,
    util,
  }) => {

    await util.action.clickElement(register.submitButton);

    await util.assert.toHaveText(
      register.toastNotification,
      testData.validationMessages.emptyName
    );
  });

  // Verify Empty Email Validation
  test("Verify Registration with Empty Email", async ({
    register,
    util,
  }) => {

    const userName = await util.data.randomTextWithRange(10);

    await util.action.enterText(
      register.customerNameInput,
      userName
    );

    await util.action.clickElement(register.submitButton);

    await util.assert.toHaveText(
      register.toastNotification,
      testData.validationMessages.emptyEmail
    );
  });

  // Verify Empty Contact Number Validation
  test("Verify Registration with Empty Contact Number", async ({
    register,
    util,
  }) => {

    const userName = await util.data.randomTextWithRange(10);
    const email = await util.data.randomEmail();

    await util.action.enterText(
      register.customerNameInput,
      userName
    );

    await util.action.enterText(
      register.emailAddressInput,
      email
    );

    await util.action.clickElement(register.submitButton);

    await util.assert.toHaveText(
      register.toastNotification,
      testData.validationMessages.emptyContactNumber
    );
  });

  // Verify Invalid Email Validation
  test("Verify Registration with Invalid Email", async ({
    register,
    util,
  }) => {

    const userName = await util.data.randomTextWithRange(10);

    await util.action.enterText(
      register.customerNameInput,
      userName
    );

    await util.action.enterText(
      register.emailAddressInput,
      "invalidemail"
    );

    await util.action.clickElement(register.submitButton);

    await util.assert.toHaveText(
      register.toastNotification,
      testData.validationMessages.invalidEmail
    );
  });

  // Verify Invalid Contact Number Validation
  test("Verify Registration with Invalid Contact Number", async ({
    register,
    util,
  }) => {

    const userName = await util.data.randomTextWithRange(10);
    const email = await util.data.randomEmail();

    await util.action.enterText(
      register.customerNameInput,
      userName
    );

    await util.action.enterText(
      register.emailAddressInput,
      email
    );

    await util.action.enterText(
      register.contactNumberInput,
      "123"
    );

    await util.action.clickElement(register.submitButton);

    await util.assert.toHaveText(
      register.toastNotification,
      testData.validationMessages.invalidContactNumber
    );
  });

  // Verify Terms and Conditions Validation
  test("Verify Registration without Accepting Terms and Conditions", async ({
    register,
    util,
  }) => {

    const userName = await util.data.randomTextWithRange(10);
    const email = await util.data.randomEmail();
    const mobileNumber = util.data.randomMobileNumber();

    await util.action.enterText(
      register.customerNameInput,
      userName
    );

    await util.action.enterText(
      register.emailAddressInput,
      email
    );

    await util.action.enterText(
      register.contactNumberInput,
      mobileNumber
    );

    // Do not select Terms and Conditions checkbox
    await util.action.clickElement(register.submitButton);

    await util.assert.toHaveText(
      register.toastNotification,
      testData.validationMessages.termsAndConditions
    );
  });

});
