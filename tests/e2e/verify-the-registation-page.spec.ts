import { test } from "../fixtures/test-fixtures";
import { testData } from "../test-data/login-data";
import { testData as registrationTestData } from "../test-data/registation-data";

test.describe("CloudAdword Studio - Registration Tests", () => {
  // Navigate to Registration Page before every test
  test.beforeEach(async ({ util,registrationPage }) => {
    await util.action.navigate(testData.BaseURL);
    await util.action.clickElement(registrationPage.registrationLink);
  });

  // Verify Registration Page Title
  test("Verify Registration Page Title", async ({
    registrationPage,util
  }) => {
    await util.assert.verifyElementText(
      registrationPage.registationPageTitle,
      "Register",
    );
  });

  // Verify Registration with Valid Credentials
  test("Verify Registration with Valid Credentials", async ({
    registrationPage,
    util,
  }) => {
    await util.action.enterText(
      registrationPage.nameTextBox,
      util.data.randomTextWithRange(8),
    );

    await util.action.enterText(
      registrationPage.emailTextBox,util.data.randomEmail()
    );

    await util.action.enterText(
      registrationPage.mobileNumberTextBox,util.data.randomMobileNumber()
    );

    await util.action.selectDropdown(
      registrationPage.countryCodeDropdown,
      registrationTestData.validRegistrationData.countryCode,
    );

    await util.action.clickElement(registrationPage.termsAndConditionsCheckbox);

    await util.action.clickElement(registrationPage.submitButton);

    // await util.assert.verifyElementContainsText(
    //   registrationPage.verifyValidationMessage,
    //   registrationTestData.validRegistrationData.verifyValidationMessage,
    // );
  });

  // Verify Registration with Empty Name
  test("Verify Registration with Empty Name", async ({
    registrationPage,util
   
  }) => {
    await util.action.clickElement(registrationPage.submitButton);

    await util.assert.verifyElementContainsText(
      registrationPage.emptyNameValidationMessage,
      registrationTestData.invalidRegistrationData
        .invalidValidationMessageWithoutName,
    );
  });

  // Verify Registration with Empty Email
  test("Verify Registration with Empty Email", async ({
    registrationPage,util
  }) => {
    await util.action.enterText(
      registrationPage.nameTextBox,
      registrationTestData.validRegistrationData.name,
    );

    await util.action.clickElement(registrationPage.submitButton);

    await util.assert.verifyElementContainsText(
      registrationPage.emptyEmailValidationMessage,
      registrationTestData.invalidRegistrationData
        .invalidValidationMessageWithoutEmail,
    );
  });

  // Verify Registration with Empty Contact Number
  test("Verify Registration with Empty Contact Number", async ({
    registrationPage,util
  }) => {
    await util.action.enterText(
      registrationPage.nameTextBox,
      registrationTestData.validRegistrationData.name,
    );

    await util.action.enterText(
      registrationPage.emailTextBox,
      registrationTestData.validRegistrationData.email,
    );

    await util.action.clickElement(registrationPage.submitButton);

    await util.assert.verifyElementContainsText(
      registrationPage.emptyContactNumberValidationMessage,
      registrationTestData.invalidRegistrationData
        .invalidValidationMessageWithoutContactNumber,
    );
  });

  // Verify Registration with Invalid Email
  test("Verify Registration with Invalid Email", async ({
    registrationPage,util
  }) => {
    await util.action.enterText(
      registrationPage.nameTextBox,
      registrationTestData.validRegistrationData.name,
    );

    await util.action.enterText(
      registrationPage.emailTextBox,
      registrationTestData.invalidRegistrationData.email,
    );

    await util.action.clickElement(registrationPage.submitButton);

    await util.assert.verifyElementContainsText(
      registrationPage.verifyInvalidEmailValidationMessage,
      registrationTestData.invalidRegistrationData
        .invalidValidationMessageWithInvalidEmail,
    );
  });
});
