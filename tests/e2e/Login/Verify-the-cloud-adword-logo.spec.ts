
import { test } from "../../fixtures/test-fixtures";

test("Verify the Login Page Logo", async ({ loginPage, util }) => {
  // Launch the application
  await loginPage.launchWeb();

  // Verify that the CloudAdword logo is visible
  await util.assert.toBeVisible(loginPage.logo);
});
