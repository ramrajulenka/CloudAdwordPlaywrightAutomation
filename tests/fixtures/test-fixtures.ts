import { test as base, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { Actions } from "../utility/actions";
import { RegistationPage } from "../pages/registationPage";
import { Assertions } from "../utility/assertions";
import { DashboardPage } from "../pages/dashboardPage";
import { AddCampaignPage } from "../pages/add-campaign";

// Define custom fixtures
interface MyFixtures {
  loginPage: LoginPage;
  actions: Actions;
  registrationPage: RegistationPage;
  assertions: Assertions;
  dashboardPage: DashboardPage;
  addCampaignPage: AddCampaignPage;
}

// Extend Playwright test
export const test = base.extend<MyFixtures>({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },

  // Extend Actions fixture
  actions: async ({ page }, use) => {
    const actions = new Actions(page);
    await use(actions);
  },

  //Extend RegistrationPage fixture
  registrationPage: async ({ page }, use) => {
    const registrationPage = new RegistationPage(page);
    await use(registrationPage);
  },

  //Assertions fixture
  assertions: async ({ page }, use) => {
    const assertions = new Assertions(page);
    await use(assertions);
  },

  //DashboardPage fixture
  dashboardPage: async ({ page }, use) => {
    const dashboardPage = new DashboardPage(page);
    await use(dashboardPage);
  },
  //Add-CampaignPage fixture
  addCampaignPage: async ({ page }, use) => {
    const addCampaignPage = new AddCampaignPage(page);
    await use(addCampaignPage);
  },
});

export { expect };
