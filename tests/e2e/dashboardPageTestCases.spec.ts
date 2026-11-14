import { Page } from "@playwright/test";
import { test } from "../fixtures/test-fixtures";
import { DashboardPage } from "../pages/dashboardPage";
import { dashboardData } from "../test-data/deshboard-data";

test.describe("Verify The Dashboard Functionality", () => {
  // Login before every test
  test.beforeEach(async ({ loginPage }) => {
    await loginPage.launchWeb();
    await loginPage.loginWeb();
  });

  // Verify Dashboard Page Title
  test("Verify the Dashboard Page Title", async ({
    dashboardPage,
    assertions,
  }) => {
    await assertions.verifyElementText(
      dashboardPage.dashboardPageTitle,
      dashboardData.dashboardPageTitle,
    );
  });

  // Verify Cloud ID on Dashboard
  test("Verify The Cloud ID On The Dashboard", async ({
    dashboardPage,
    assertions,
  }) => {
    await assertions.verifyElementText(
      dashboardPage.getCloudIDText(dashboardData.CloudID),
      `Cloud ID : ${dashboardData.CloudID}`,
    );
  });

  // Verify Client Name on Dashboard
  test("Verify the Client Name on the Dashboard Page", async ({
    dashboardPage,
    assertions,
  }) => {
    await assertions.verifyElementText(
      dashboardPage.getDashboardClientName(dashboardData.clientName),
      `Hi, ${dashboardData.clientName}.`,
    );
  });

  //verify the Location Text
  test("Verify the Location Textfiedl", async ({
    dashboardPage,
    assertions,
  }) => {
    await assertions.verifyElementText(
      dashboardPage.locationsText,
      dashboardData.locationText,
    );
  });
  //Verify the Location Icon
  test("Verify the Location Icon", async ({ dashboardPage, actions }) => {
    await actions.isVisible(dashboardPage.locationIcon);
  });

  //Verify the Location Count
  test("Verify the Location Count", async ({ dashboardPage, assertions }) => {
    await assertions.verifyTextCount(
      await dashboardPage.TotalLocationCount(),
      16,
    );
  });

  //Verify the total players
  test("Verify The Total Screens Count", async ({
    dashboardPage,
    assertions,
  }) => {
    await assertions.verifyTextCount(
      await dashboardPage.TotalScreensCount(),
      11,
    );
  });

  //Verify the Online Screens
  test("Verify The Online Screen Count", async ({
    dashboardPage,
    assertions,
  }) => {
    const onlineCount = await dashboardPage.OnlineScreensCount();

    console.log("Online Screens Count:", onlineCount);

    await assertions.verifyTextCount(onlineCount, 0);
  });

  //Verify The Add Screen Vutton
  test("Verify The Add Screen Button", async ({
    dashboardPage,
    assertions,
    actions,
  }) => {
    await assertions.verifyElementVisible(dashboardPage.addPlayerButton);
    await actions.clickElement(dashboardPage.addPlayerButton);
    await assertions.verifyElementText(
      dashboardPage.addPlayerPageText,
      "Add Player",
    );
  });

  // Verify The Add Campaign Page Text
  test("Verify The Add Campaign Page Text", async ({
    dashboardPage,
    assertions,
    actions,
  }) => {
    await assertions.verifyElementVisible(dashboardPage.addCampaignButton);
    await actions.clickElement(dashboardPage.addCampaignButton);
    await assertions.verifyElementText(
      dashboardPage.addCampaignPageText,
      "Create Campaign",
    );
  });



  
});
