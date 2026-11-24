
import { test, expect } from "../../fixtures/test-fixtures";
import { testData } from "../../test-data/login-data";

test("Verify Login Page UI Elements", async ({
  loginPage,
  util,
  register,
}) => {
  // Step 1: Launch the application
  await loginPage.launchWeb();

  // Step 2: Verify Login page title
  await util.assert.toHaveText(
    loginPage.loginPageTitle,
    testData.validationMessages.loginPageTitle
  );

  // Step 3: Verify CloudAdword logo visibility
  await util.assert.toBeVisible(loginPage.logo);

  // Step 4: Verify Email input field visibility
  await util.assert.toBeVisible(loginPage.emailInput);

  // Step 5: Verify Password input field visibility
  await util.assert.toBeVisible(loginPage.passwordInput);

  // Step 6: Verify Email field placeholder
  await expect(loginPage.emailInput).toHaveAttribute(
    "placeholder",
    "Email"
  );

  // Step 7: Verify Password field placeholder
  await expect(loginPage.passwordInput).toHaveAttribute(
    "placeholder",
    "Password"
  );

  // Step 8: Verify Login button visibility
  await util.assert.toBeVisible(loginPage.loginButton);

  // Step 9: Verify Forgot Password link visibility
  await util.assert.toBeVisible(loginPage.forgotPassword.button);

  // Step 10: Verify Password masking
  await util.action.enterText(
    loginPage.passwordInput,
    testData.testAccountOne.password
  );

  await expect(loginPage.passwordInput).toHaveAttribute(
    "type",
    "password"
  );

  // Step 11: Verify Email field accepts input
  const email = util.data.randomEmail();

  await util.action.enterText(loginPage.emailInput, email);

  await util.assert.toHaveValue(loginPage.emailInput, email);

  // Step 12: Verify Password field accepts input
  await util.assert.toHaveValue(
    loginPage.passwordInput,
    testData.testAccountOne.password
  );

  // Step 13: Verify Login button text and visibility
  await util.assert.toBeVisible(loginPage.loginButton);

  await util.assert.toHaveText(loginPage.loginButton, "LOGIN");

  // Step 14: Verify Forgot Password navigation
  await util.action.clickElement(loginPage.forgotPassword.button);

  await util.assert.toHaveText(
    loginPage.forgotPassword.title,
    testData.validationMessages.forgotPasswordPageTitle
  );

  // Return to Login page
  await loginPage.launchWeb();

  // Step 15: Verify Sign Up navigation
  await util.action.clickElement(register.registrationLink);

  await util.assert.toHaveText(
    register.registrationPageTitle,
    "Register"
  );

  // Return to Login page
  await loginPage.launchWeb();

  // Step 16: Verify Keyboard navigation
  await loginPage.emailInput.focus();

  await loginPage.page.keyboard.press("Tab");

  await expect(loginPage.passwordInput).toBeFocused();

  // Step 17: Verify Login page responsiveness
  await loginPage.page.setViewportSize({
    width: 375,
    height: 812,
  });

  await util.assert.toBeVisible(loginPage.loginPageTitle);
  await util.assert.toBeVisible(loginPage.emailInput);
  await util.assert.toBeVisible(loginPage.passwordInput);
  await util.assert.toBeVisible(loginPage.loginButton);

  // Restore desktop viewport
  await loginPage.page.setViewportSize({
    width: 1366,
    height: 768,
  });

  // Step 18: Verify Login page element alignment
  const logoBox = await loginPage.logo.boundingBox();
  const emailBox = await loginPage.emailInput.boundingBox();
  const passwordBox = await loginPage.passwordInput.boundingBox();
  const loginButtonBox = await loginPage.loginButton.boundingBox();

  // Verify all elements have valid bounding boxes
  expect(logoBox).not.toBeNull();
  expect(emailBox).not.toBeNull();
  expect(passwordBox).not.toBeNull();
  expect(loginButtonBox).not.toBeNull();

  // Verify vertical element order
  expect(emailBox!.y).toBeLessThan(passwordBox!.y);
  expect(passwordBox!.y).toBeLessThan(loginButtonBox!.y);
});
