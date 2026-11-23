
import { assert } from "node:console";
import { test } from "../fixtures/test-fixtures";
import { dashboardData } from "../test-data/deshboard-data";

test.describe("Verify The Dashboard Functionality", () => {

  // =====================================================
  // Login Before Every Test
  // =====================================================
  test.beforeEach(async ({ loginPage, dashboard }) => {
    await loginPage.launchWeb();
    await loginPage.loginWeb();

    // Verify Dashboard Is Loaded
    await dashboard.dashboardTitle.waitFor({
      state: "visible",
      timeout: 15000,
    });
  });

  // =====================================================
  // Dashboard Basic Information
  // =====================================================

  // Verify Dashboard Page Title
  test("Verify the Dashboard Page Title", async ({ dashboard, util }) => {
    await util.assert.toHaveText(
      dashboard.dashboardTitle,
      dashboardData.title
    );
  });

  // Verify Cloud ID
  test("Verify The Cloud ID On The Dashboard", async ({ dashboard, util }) => {
    await util.assert.toHaveText(
      dashboard.getCloudIDText(dashboardData.CloudID),
      `Cloud ID : ${dashboardData.CloudID}`
    );
  });

  // Verify Client Name
  test("Verify the Client Name on the Dashboard Page", async ({ dashboard, util }) => {
    await util.assert.toHaveText(
      dashboard.getDashboardClientName(dashboardData.clientName),
      `Hi, ${dashboardData.clientName}.`
    );
  });

  // =====================================================
  // Location Section
  // =====================================================

  // Verify Location Text
  test("Verify the Location Text", async ({ dashboard, util }) => {
    await util.assert.toHaveText(
      dashboard.locationsText,
      dashboardData.locationText
    );
  });

  // Verify Location Icon
  test("Verify the Location Icon", async ({ dashboard, util }) => {
    await util.action.isVisible(dashboard.locationIcon);
  });

  // Verify Location Count
  test("Verify the Location Count", async ({ dashboard, util }) => {
    await util.assert.toBeTextCount(
      await dashboard.TotalLocationCount(),
      16
    );
  });
//Verify The Map
test("Verify The Dashboard Map",async({dashboard,util})=>{
  await util.assert.toBeVisible(dashboard.map);


});
  // =====================================================
  // Players / Screens Section
  // =====================================================

  // Verify Total Screens Count
  test("Verify The Total Screens Count", async ({ dashboard, util }) => {
    await util.assert.toBeTextCount(
      await dashboard.TotalScreensCount(),
      11
    );
  });

  // Verify Online Screens Count
  test("Verify The Online Screen Count", async ({ dashboard, util }) => {
    const onlineCount = await dashboard.OnlineScreensCount();

    console.log("Online Screens Count:", onlineCount);

    await util.assert.toBeTextCount(onlineCount, 0);
  });

  // =====================================================
  // Add Player / Add Campaign
  // =====================================================

  // Verify Add Screen Button
  test("Verify The Add Screen Button", async ({ dashboard, util }) => {
    await util.assert.toBeVisible(dashboard.addPlayerButton);
    await util.action.clickElement(dashboard.addPlayerButton);

    await util.assert.toHaveText(
      dashboard.addPlayerPageText,
      "Add Player"
    );
  });

  // Verify Add Campaign Page Text
  test("Verify The Add Campaign Page Text", async ({ dashboard, util }) => {
    await util.assert.toBeVisible(dashboard.addCampaignButton);
    await util.action.clickElement(dashboard.addCampaignButton);

    await util.assert.toHaveText(
      dashboard.addCampaignPageText,
      "Create Campaign"
    );
  });

  // =====================================================
  // Notification Section
  // =====================================================

  // Verify Notification Button Functionality
  test("Verify the Notification Button Functionality", async ({ dashboard, util }) => {
    await util.assert.toBeVisible(dashboard.notificationIcon);
    await util.action.clickElement(dashboard.notificationIcon);

    await util.assert.toHaveText(
      dashboard.notificationPopupHeader,
      "Notifications"
    );
  });

  // =====================================================
  // Calendar Section
  // =====================================================

  // Verify Calendar Icon Visibility
  test("Verify Calendar Icon Visibility", async ({ dashboard, util }) => {
    await util.assert.toBeVisible(
      dashboard.calander.calendarIcon
    );
  });

  // Verify Calendar Opens
  test("Verify Calendar Opens", async ({ dashboard, util }) => {
    await util.action.clickElement(
      dashboard.calander.calendarIcon
    );
  });

  // Verify Calendar Overlay
  test("Verify Calendar Overlay", async ({ dashboard, util }) => {
    await util.action.clickElement(
      dashboard.calander.calendarIcon
    );

    await util.assert.toBeVisible(
      dashboard.calander.calendarOverlay
    );
  });

  // Verify Next Month Button
  test("Verify Next Month Button", async ({ dashboard, util }) => {
    await util.action.clickElement(
      dashboard.calander.calendarIcon
    );

    await util.assert.toBeVisible(
      dashboard.calander.nextMonthButton
    );

    await util.action.clickElement(
      dashboard.calander.nextMonthButton
    );
  });

  // Verify Previous Month Button
  test("Verify Previous Month Button", async ({ dashboard, util }) => {
    await util.action.clickElement(
      dashboard.calander.calendarIcon
    );

    await util.assert.toBeVisible(
      dashboard.calander.previousMonthButton
    );

    await util.action.clickElement(
      dashboard.calander.previousMonthButton
    );
  });

  // Verify Calendar Date Time Icon
  test("Verify Calendar Date Time Icon", async ({ dashboard, util }) => {
    await util.action.clickElement(
      dashboard.calander.calendarIcon
    );

    await util.assert.toBeVisible(
      dashboard.calander.calendarDateTimeIcon
    );
  });

  // Verify Minus Hour Button
  test("Verify Minus Hour Button", async ({ dashboard, util }) => {
    await util.action.clickElement(
      dashboard.calander.calendarIcon
    );

    await util.assert.toBeVisible(
      dashboard.calander.minusHourButton
    );

    await util.action.clickElement(
      dashboard.calander.minusHourButton
    );
  });

  // Verify Minus Minute Button
  test("Verify Minus Minute Button", async ({ dashboard, util }) => {
    await util.action.clickElement(
      dashboard.calander.calendarIcon
    );

    await util.assert.toBeVisible(
      dashboard.calander.minusMinuteButton
    );

    await util.action.clickElement(
      dashboard.calander.minusMinuteButton
    );
  });

  // Verify Add Hour Button
  test("Verify The Add Hour Button", async ({ dashboard, util }) => {
    await util.action.clickElement(
      dashboard.calander.calendarIcon
    );

    await util.assert.toBeVisible(
      dashboard.calander.addHourButton
    );

    await util.action.clickElement(
      dashboard.calander.addHourButton
    );
  });

  // Verify Add Minute Button
  test("Verify Add Minute Button", async ({ dashboard, util }) => {
    await util.action.clickElement(
      dashboard.calander.calendarIcon
    );

    await util.assert.toBeVisible(
      dashboard.calander.addMinuteButton
    );

    await util.action.clickElement(
      dashboard.calander.addMinuteButton
    );
  });

  // Verify Set Button
  test("Verify Set Button", async ({ dashboard, util }) => {
    await util.action.clickElement(
      dashboard.calander.calendarIcon
    );

    await util.assert.toBeVisible(
      dashboard.calander.setButton
    );

    await util.action.clickElement(
      dashboard.calander.setButton
    );
  });

  // Verify Cancel Button
  test("Verify Cancel Button", async ({ dashboard, util }) => {
    await util.action.clickElement(
      dashboard.calander.calendarIcon
    );

    await util.assert.toBeVisible(
      dashboard.calander.cancelButton
    );

    await util.action.clickElement(
      dashboard.calander.cancelButton
    );
  });

  // Verify Date And Time Clear Button
  test("Verify The Date And Time Clear Button", async ({ dashboard, util }) => {
    await util.action.clickElement(
      dashboard.calander.calendarIcon
    );

    await util.action.clickElement(
      dashboard.calander.setButton
    );

    await util.assert.toBeVisible(
      dashboard.calander.clearButton
    );

    await util.action.clickElement(
      dashboard.calander.clearButton
    );
  });

  // =====================================================
  // Schedule Calendar Section
  // =====================================================

  // Verify Today Button
  test("Verify Today Button Schedule Calendar", async ({ dashboard, util }) => {
    await util.action.clickElement(
      dashboard.scheduleCalendar.nextMonthButton
    );

    await util.assert.toBeVisible(
      dashboard.scheduleCalendar.todayButton
    );

    await util.action.clickElement(
      dashboard.scheduleCalendar.todayButton
    );

    await util.assert.toHaveText(
      dashboard.scheduleCalendar.getVerifyMonthText("November"),
      "November 2026"
    );
  });

  // Verify Next Month Button
  test("Verify Next Month Button In Schedule Calendar", async ({ dashboard, util }) => {
    await util.action.clickElement(
      dashboard.scheduleCalendar.nextMonthButton
    );

    await util.assert.toHaveText(
      dashboard.scheduleCalendar.getVerifyMonthText("December"),
      "December 2026"
    );
  });

  // Verify Previous Month Button
  test("Verify Previous Month Button In Schedule Calendar", async ({ dashboard, util }) => {
    await util.action.clickElement(
      dashboard.scheduleCalendar.previousMonthButton
    );

    await util.assert.toHaveText(
      dashboard.scheduleCalendar.getVerifyMonthText("October"),
      "October 2026"
    );
  });

});
