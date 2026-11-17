import { Page } from "@playwright/test";
import { test } from "../fixtures/test-fixtures";
import { DashboardPage } from "../pages/dashboardPage";
import { dashboardData } from "../test-data/deshboard-data";

test.describe("Verify The Dashboard Functionality", () => {
  // Login before every test
  test.beforeEach(async ({ loginPage, dashboardPage }) => {
    await loginPage.launchWeb();

    await loginPage.loginWeb();

    // Confirm dashboard is loaded
    await dashboardPage.dashboardPageTitle.waitFor({
      state: "visible",
      timeout: 15000,
    });
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
  // Verify the Notification Button Functionality
  test("Verify the Notification Button Functionality", async ({
    dashboardPage,
    assertions,
    actions,
  }) => {
    await assertions.verifyElementVisible(dashboardPage.notificationIcon);
    await actions.clickElement(dashboardPage.notificationIcon);
    await assertions.verifyElementText(
      dashboardPage.notificationPopupHeader,
      "Notifications",
    );
  });
  //Verify Calendar Icon Visibility
  test("Verify Calendar Icon Visibility", async ({
    dashboardPage,
    assertions,
  }) => {
    await assertions.verifyElementVisible(dashboardPage.calander.calendarIcon);
  });
  //Verify Calendar Opens
  test(" Verify Calendar Opens", async ({
    dashboardPage,
    actions,
    assertions,
  }) => {
    await actions.clickElement(dashboardPage.calander.calendarIcon);

    await assertions.verifyElementVisible(dashboardPage.calander.todayButton);
  });
  //Verify Calendar Overlay
  test("Verify Calendar Overlay", async ({
    dashboardPage,
    actions,
    assertions,
  }) => {
    await actions.clickElement(dashboardPage.calander.calendarIcon);

    await assertions.verifyElementVisible(
      dashboardPage.calander.calendarOverlay,
    );
  });
  //Verify Next Month Button
  test("Verify Next Month Button", async ({
    dashboardPage,
    actions,
    assertions,
  }) => {
    await actions.clickElement(dashboardPage.calander.calendarIcon);

    await assertions.verifyElementVisible(
      dashboardPage.calander.nextMonthButton,
    );

    await actions.clickElement(dashboardPage.calander.nextMonthButton);
  });
  //Verify Previous Month Button
  test("Verify Previous Month Button", async ({
    dashboardPage,
    actions,
    assertions,
  }) => {
    await actions.clickElement(dashboardPage.calander.calendarIcon);

    await assertions.verifyElementVisible(
      dashboardPage.calander.previousMonthButton,
    );

    await actions.clickElement(dashboardPage.calander.previousMonthButton);
  });
  //Verify Today Button
  test.skip("Verify Today Button", async ({
    dashboardPage,
    actions,
    assertions,
  }) => {
    await actions.clickElement(dashboardPage.calander.nextMonthButton);

    await assertions.verifyElementVisible(dashboardPage.calander.todayButton);

    await actions.clickElement(dashboardPage.calander.todayButton);
  });
  //Verify Calendar Date Time Icon
  test("Verify Calendar Date Time Icon", async ({
    dashboardPage,
    actions,
    assertions,
  }) => {
    await actions.clickElement(dashboardPage.calander.calendarIcon);

    await assertions.verifyElementVisible(
      dashboardPage.calander.calendarDateTimeIcon,
    );
  });
  //Verify Minus Hour Button
  test("Verify Minus Hour Button", async ({
    dashboardPage,
    actions,
    assertions,
  }) => {
    await actions.clickElement(dashboardPage.calander.calendarIcon);

    await assertions.verifyElementVisible(
      dashboardPage.calander.minusHourButton,
    );

    await actions.clickElement(dashboardPage.calander.minusHourButton);
  });
  //Verify Minus Minute Button
  test("Verify Minus Minute Button", async ({
    dashboardPage,
    actions,
    assertions,
  }) => {
    await actions.clickElement(dashboardPage.calander.calendarIcon);

    await assertions.verifyElementVisible(
      dashboardPage.calander.minusMinuteButton,
    );

    await actions.clickElement(dashboardPage.calander.minusMinuteButton);
  });
  //Verify the add Hour Button
  test("Verify The Add Hour Button", async ({
    dashboardPage,
    actions,
    assertions,
  }) => {
    await actions.clickElement(dashboardPage.calander.calendarIcon);
    await assertions.verifyElementVisible(dashboardPage.calander.addHourButton);
    await actions.clickElement(dashboardPage.calander.addHourButton);
  });
  //Verify Add Minute Button
  test("Verify Add Minute Button", async ({
    dashboardPage,
    actions,
    assertions,
  }) => {
    await actions.clickElement(dashboardPage.calander.calendarIcon);

    await assertions.verifyElementVisible(
      dashboardPage.calander.addMinuteButton,
    );

    await actions.clickElement(dashboardPage.calander.addMinuteButton);
  });
  test("Verify Set Button", async ({ dashboardPage, actions, assertions }) => {
    await actions.clickElement(dashboardPage.calander.calendarIcon);

    await assertions.verifyElementVisible(dashboardPage.calander.setButton);

    await actions.clickElement(dashboardPage.calander.setButton);
  });
  //Verify Cancel Button
  test("Verify Cancel Button", async ({
    dashboardPage,
    actions,
    assertions,
  }) => {
    await actions.clickElement(dashboardPage.calander.calendarIcon);
    await assertions.verifyElementVisible(dashboardPage.calander.cancelButton);
    await actions.clickElement(dashboardPage.calander.cancelButton);
  });
  //Verify The Date And Time Clear Button
  test("Verify The Date And Time Clear Button", async ({
    dashboardPage,
    actions,
    assertions,
  }) => {
    await actions.clickElement(dashboardPage.calander.calendarIcon);
    await actions.clickElement(dashboardPage.calander.setButton);
    await assertions.verifyElementVisible(dashboardPage.calander.clearButton);
    await actions.clickElement(dashboardPage.calander.clearButton);
  });
});
