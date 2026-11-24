
import { test, expect } from "../../fixtures/test-fixtures";

test("Verify Registration Page UI Elements", async ({
  loginPage,
  register,
  util,
}) => {
  // Step 1: Launch the application
  await loginPage.launchWeb();

  // Step 2: Navigate to Registration page
  await util.action.clickElement(register.registrationLink);

  // Step 3: Verify Registration page title
  await util.assert.toHaveText(
    register.registrationPageTitle,
    "Register"
  );

  // Step 4: Verify Customer Name field visibility
  await util.assert.toBeVisible(register.customerNameInput);

  // Step 5: Verify Email field visibility
  await util.assert.toBeVisible(register.emailAddressInput);

  // Step 6: Verify Country Code dropdown visibility
  await util.assert.toBeVisible(register.countryCodeDropdown);

  // Step 7: Verify Contact Number field visibility
  await util.assert.toBeVisible(register.contactNumberInput);

  // Step 8: Verify Terms and Conditions checkbox visibility
  await util.assert.toBeVisible(
    register.termsAndConditionsCheckbox
  );

  // Step 9: Verify Terms and Conditions checkbox is initially unchecked
  await expect(register.termsAndConditionsCheckbox).not.toBeChecked();

  // Step 10: Verify Submit button visibility
  await util.assert.toBeVisible(register.submitButton);

  // Step 11: Verify Submit button text
  await util.assert.toHaveText(register.submitButton, "SUBMIT");

  // Step 12: Verify Customer Name field accepts input
  const customerName = util.data.randomTextWithRange(8);

  await util.action.enterText(
    register.customerNameInput,
    customerName
  );

  await util.assert.toHaveValue(
    register.customerNameInput,
    customerName
  );

  // Step 13: Verify Email field accepts input
  const email = util.data.randomEmail();

  await util.action.enterText(
    register.emailAddressInput,
    email
  );

  await util.assert.toHaveValue(
    register.emailAddressInput,
    email
  );

  // Step 14: Verify Country Code dropdown selection
  await util.action.selectOption(
    register.countryCodeDropdown,
    "+91"
  );

  await util.assert.toHaveValue(
    register.countryCodeDropdown,
    "+91"
  );

  // Step 15: Verify Contact Number field accepts input
  const contactNumber = "9876543210";

  await util.action.enterText(
    register.contactNumberInput,
    contactNumber
  );

  await util.assert.toHaveValue(
    register.contactNumberInput,
    contactNumber
  );

  // Step 16: Verify Terms and Conditions checkbox functionality
  await register.termsAndConditionsCheckbox.check();

  await expect(
    register.termsAndConditionsCheckbox
  ).toBeChecked();

  // Uncheck the checkbox
  await register.termsAndConditionsCheckbox.uncheck();

  await expect(
    register.termsAndConditionsCheckbox
  ).not.toBeChecked();

  // Step 17: Verify Login link navigation
  await util.assert.toBeVisible(
    loginPage.page.getByRole("link", { name: "Login" })
  );

  await util.action.clickElement(
    loginPage.page.getByRole("link", { name: "Login" })
  );

  await util.assert.toHaveText(
    loginPage.loginPageTitle,
    "Login to your account"
  );

  // Step 18: Verify Registration page responsiveness
  await loginPage.launchWeb();

  await util.action.clickElement(register.registrationLink);

  await loginPage.page.setViewportSize({
    width: 375,
    height: 812,
  });

  await util.assert.toBeVisible(register.registrationPageTitle);
  await util.assert.toBeVisible(register.customerNameInput);
  await util.assert.toBeVisible(register.emailAddressInput);
  await util.assert.toBeVisible(register.countryCodeDropdown);
  await util.assert.toBeVisible(register.contactNumberInput);
  await util.assert.toBeVisible(register.submitButton);

  // Restore desktop viewport
  await loginPage.page.setViewportSize({
    width: 1366,
    height: 768,
  });

  // Step 19: Verify Registration page element alignment
  const nameBox = await register.customerNameInput.boundingBox();
  const emailBox = await register.emailAddressInput.boundingBox();
  const countryCodeBox = await register.countryCodeDropdown.boundingBox();
  const contactNumberBox = await register.contactNumberInput.boundingBox();
  const submitButtonBox = await register.submitButton.boundingBox();

  // Verify all elements have valid bounding boxes
  expect(nameBox).not.toBeNull();
  expect(emailBox).not.toBeNull();
  expect(countryCodeBox).not.toBeNull();
  expect(contactNumberBox).not.toBeNull();
  expect(submitButtonBox).not.toBeNull();

  // Verify vertical element order
  expect(nameBox!.y).toBeLessThan(emailBox!.y);
  expect(emailBox!.y).toBeLessThan(countryCodeBox!.y);
  expect(countryCodeBox!.y).toBeLessThan(contactNumberBox!.y);
  expect(contactNumberBox!.y).toBeLessThan(submitButtonBox!.y);
});
