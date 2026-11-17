import { test } from "../fixtures/test-fixtures";
import { testData } from "../test-data/login-data";
import { testData as registrationTestData } from "../test-data/registation-data";

test.describe("CloudAdword Studio - Registration Tests", () => {
  // Navigate to Registration Page before every test
  test.beforeEach(async ({ actions, registrationPage }) => {
    await actions.navigate(testData.BaseURL);
    await actions.clickElement(registrationPage.registrationLink);
  });

  // Verify Registration Page Title
  test("Verify Registration Page Title", async ({
    registrationPage,
    assertions,
  }) => {
    await assertions.verifyElementText(
      registrationPage.registationPageTitle,
      "Register",
    );
  });

  // Verify Registration with Valid Credentials
  test.skip("Verify Registration with Valid Credentials", async ({
    registrationPage,
    actions,
    assertions,
  }) => {
    await actions.enterText(
      registrationPage.nameTextBox,
      registrationTestData.validRegistrationData.name,
    );

    await actions.enterText(
      registrationPage.emailTextBox,
      registrationTestData.validRegistrationData.email,
    );

    await actions.enterText(
      registrationPage.mobileNumberTextBox,
      registrationTestData.validRegistrationData.contactNumber,
    );

    await actions.selectDropdown(
      registrationPage.countryCodeDropdown,
      registrationTestData.validRegistrationData.countryCode,
    );

    await actions.clickElement(registrationPage.termsAndConditionsCheckbox);

    await actions.clickElement(registrationPage.submitButton);

    await assertions.verifyElementContainsText(
      registrationPage.verifyValidationMessage,
      registrationTestData.validRegistrationData.verifyValidationMessage,
    );
  });

  // Verify Registration with Empty Name
  test("Verify Registration with Empty Name", async ({
    registrationPage,
    actions,
    assertions,
  }) => {
    await actions.clickElement(registrationPage.submitButton);

    await assertions.verifyElementContainsText(
      registrationPage.emptyNameValidationMessage,
      registrationTestData.invalidRegistrationData
        .invalidValidationMessageWithoutName,
    );
  });

  // Verify Registration with Empty Email
  test("Verify Registration with Empty Email", async ({
    registrationPage,
    actions,
    assertions,
  }) => {
    await actions.enterText(
      registrationPage.nameTextBox,
      registrationTestData.validRegistrationData.name,
    );

    await actions.clickElement(registrationPage.submitButton);

    await assertions.verifyElementContainsText(
      registrationPage.emptyEmailValidationMessage,
      registrationTestData.invalidRegistrationData
        .invalidValidationMessageWithoutEmail,
    );
  });

  // Verify Registration with Empty Contact Number
  test("Verify Registration with Empty Contact Number", async ({
    registrationPage,
    actions,
    assertions,
  }) => {
    await actions.enterText(
      registrationPage.nameTextBox,
      registrationTestData.validRegistrationData.name,
    );

    await actions.enterText(
      registrationPage.emailTextBox,
      registrationTestData.validRegistrationData.email,
    );

    await actions.clickElement(registrationPage.submitButton);

    await assertions.verifyElementContainsText(
      registrationPage.emptyContactNumberValidationMessage,
      registrationTestData.invalidRegistrationData
        .invalidValidationMessageWithoutContactNumber,
    );
  });

  // Verify Registration with Invalid Email
  test("Verify Registration with Invalid Email", async ({
    registrationPage,
    actions,
    assertions,
  }) => {
    await actions.enterText(
      registrationPage.nameTextBox,
      registrationTestData.validRegistrationData.name,
    );

    await actions.enterText(
      registrationPage.emailTextBox,
      registrationTestData.invalidRegistrationData.email,
    );

    await actions.clickElement(registrationPage.submitButton);

    await assertions.verifyElementContainsText(
      registrationPage.verifyInvalidEmailValidationMessage,
      registrationTestData.invalidRegistrationData
        .invalidValidationMessageWithInvalidEmail,
    );
  });
});
