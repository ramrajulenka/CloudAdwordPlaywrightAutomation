import { test as base, expect } from "@playwright/test";
import { LoginPage } from "../pages/login-page";
import { Actions } from "../utility/actions";
import { RegistationPage } from "../pages/registation-page";
import { Assertions } from "../utility/assertions";
import { Dashboard} from "../pages/dashboard";
import { AddCampaignPage } from "../pages/add-campaign";
import {Data} from "../utility/data";
import {Utilities} from "../utility/utilities"
import { Players } from "../pages/players";
import { Profile } from "../pages/profile";

// Define custom fixtures
interface MyFixtures {
  loginPage: LoginPage;
  action: Actions;
  registrationPage: RegistationPage;
  assert: Assertions;
  dashboard: Dashboard;
  addCampaign: AddCampaignPage;
  data:Data;
  util:Utilities;
  player:Players;
  profile:Profile;
}

// Extend Playwright test
export const test = base.extend<MyFixtures>({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },

  // Extend Actions fixture
  action: async ({ page }, use) => {
    const actions = new Actions(page);
    await use(actions);
  },

  //Extend RegistrationPage fixture
  registrationPage: async ({ page }, use) => {
    const registrationPage = new RegistationPage(page);
    await use(registrationPage);
  },

  //Assertions fixture
  assert: async ({ page }, use) => {
    const assertions = new Assertions(page);
    await use(assertions);
  },

  //DashboardPage fixture
  dashboard: async ({ page }, use) => {
    const dashboard = new Dashboard(page);
    await use(dashboard);
  },
  //Add-CampaignPage fixture
  addCampaign: async ({ page }, use) => {
    const addCampaignPage = new AddCampaignPage(page);
    await use(addCampaignPage);
  },

  //Add Utility-Data
  util: async({page}, use) => {
    const util = new Utilities(page);
    await use(util);
  },
//Player Page
player:async({page},use)=>{
const player=new Players(page);
await use(player)

},
//Profile Page
profile:async({page},use)=>{
  const profile=new Profile(page);
  await use(profile);
}
});

export { expect };
