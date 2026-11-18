
import { expect } from "@playwright/test";
import { test } from "../fixtures/test-fixtures";
import { Players } from "../pages/players";
import { time } from "node:console";

test.describe("Verify Players Page Functionality", () => {

    test.beforeEach(async({loginPage,util,player})=>{
    await loginPage.launchWeb();
    await loginPage.loginWeb();
    await util.action.clickElement(player.playerbutton);

    })

    test("Verify Players Page Title", async ({player,util }) => {
    await util.assert.verifyElementText(player.Player.title,'Players')
       
    });

test("Verify Total Players Card", async ({ player, util }) => {
  await util.assert.verifyElementText(
    player.Player.totalplayersText,
    "Total Players",
  );
  await util.assert.verifyElementVisible(player.Player.onlinePlayerIcon);
  const totalPlayerCount = await util.action.InnerText(
    player.Player.totalPlayerCount,
  );
  console.log(totalPlayerCount);
  await util.assert.verifyElementText(
    player.Player.totalPlayerCount,
    totalPlayerCount,
  );
});

    test("Verify Online Players Card", async ({player,util}) => {

        const onlinePlayerCardTitle=await util.action.InnerText(player.Player.onlinePlayerText)
       await util.assert.verifyElementVisible(player.Player.onlinePlayerIcon);
       await util.assert.verifyElementText(player.Player.onlinePlayerText,'Online Players');
       const onlinePlayerCount=await util.action.InnerText(player.Player.onlinePlayerCount);
       console.log('Count',onlinePlayerCount);
       await util.assert.verifyElementText(player.Player.onlinePlayerCount,onlinePlayerCount);
       
    });

    test("Verify Offline Players Card", async ({player,util }) => {
      await util.assert.verifyElementText(player.Player.offlinePlayerText,'Offline Players');
      await util.assert.verifyElementVisible(player.Player.offlinePlayersIcon);
      const offlinePlayerCount=await util.action.InnerText(player.Player.OfflinePlayerCount);
      console.log(offlinePlayerCount);
      await util.assert.verifyElementText(player.Player.OfflinePlayerCount,offlinePlayerCount);


    });

    test("Verify Preset Tagged Card", async ({player,util }) => {
       
        await util.assert.verifyElementText(player.Player.presetTagText,'Preset Tagged')
        await util.assert.verifyElementVisible(player.Player.presetTagIcon);
        const presetTagCount=await util.action.InnerText(player.Player.presetTagCount);
        console.log(presetTagCount)
        await util.assert.verifyElementText(player.Player.presetTagCount,presetTagCount);
    });

    test("Verify Search Players Functionality", async ({player,util }) => {
        await util.action.enterText(player.Player.searchPlayer,'L-Shape');
       // await util.assert.verifyElementVisible(player.Player.searchPlayer)
    });

    // Add Group Test Cases
    test("Verify Add Group Button", async ({ player, util }) => {
      await util.action.clickElement(player.addGroup.Button);
      await util.assert.verifyElementVisible(player.addGroup.PageText);
      await util.assert.verifyElementText(player.addGroup.PageText, "Group");
      await util.assert.verifyElementVisible(player.addGroup.nameField);
      await util.assert.verifyElementVisible(player.addGroup.searchBar);
      await util.assert.verifyElementVisible(player.addGroup.xButton);
      await util.assert.verifyElementVisible(player.addGroup.closeButton);
      await util.assert.verifyElementVisible(player.addGroup.addButton);
    });

    test("Verify Close Group Popup Using X Button", async ({player, util }) => {
        await util.action.clickElement(player.addGroup.Button);
       await util.action.clickElement(player.addGroup.xButton);
       await util.assert.verifyElementText(player.Player.title,'Players');
    });

    test("Verify Close Group Popup Using Close Button", async ({player, util}) => {
         await util.action.clickElement(player.addGroup.Button);
         await util.assert.verifyElementVisible(player.addGroup.closeButton);
         await util.action.clickElement(player.addGroup.closeButton);
         await util.assert.verifyElementText(player.Player.title,'Players');
    });

  test("Verify Group Creation", async ({ player, page }) => {
    const groupName = "Testing";
    await player.addGroup.Button.click();
    await expect(player.addGroup.nameField).toBeVisible();
    await player.addGroup.nameField.fill(groupName);
    await expect(player.addGroup.nameField).toHaveValue(groupName);
    await expect(player.addGroup.selectPlayer).toBeVisible();
    await player.addGroup.selectPlayer.check();
    await expect(player.addGroup.selectPlayer).toBeChecked();
    await player.addGroup.addButton.click();
    await expect(player.addGroup.createdGroup).toBeVisible();
    await expect(page.locator(".cdk-overlay-backdrop")).toBeHidden();
    await player.addGroup.groupMenuButton.click();

    // STEP 7: Verify Delete option
    // await expect(player.addGroup.deleteGroup).toBeVisible();

    // // STEP 8: Click Delete
    // await player.addGroup.deleteGroup.click();

    // // STEP 9: Verify confirmation popup
    // await expect(player.addGroup.yesDelete).toBeVisible();

    // // STEP 10: Confirm deletion
    // await player.addGroup.yesDelete.click();

    // // STEP 11: Verify group is deleted
    // await expect(player.addGroup.createdGroup).toBeHidden();
  });
//Advance Filters Test Cases

    test("Verify Advance Filters Popup", async ({ player, util }) => {
      await util.action.clickElement(player.advanceFilter.button);
      await util.assert.verifyElementText(
        player.advanceFilter.title,
        "Advance Filters",
      );
    });

    test("Verify Status Filter - Both", async ({player,util}) => {
         await util.action.clickElement(player.advanceFilter.button);
         await player.advanceFilter.byStatus.both;
         await util.action.clickElement(player.advanceFilter.applyButton);
         await util.assert.verifyElementVisible(player.Player.title);
    });

    test("Verify Status Filter - Online", async ({player,util}) => {
        await util.action.clickElement(player.advanceFilter.button);
         await player.advanceFilter.byStatus.online;
         await util.action.clickElement(player.advanceFilter.applyButton);
         await util.assert.verifyElementVisible(player.Player.title);
    });

    test("Verify Status Filter - Offline", async ({player,util}) => {
        await util.action.clickElement(player.advanceFilter.button);
         await player.advanceFilter.byStatus.offline;
         await util.action.clickElement(player.advanceFilter.applyButton);
         await util.assert.verifyElementVisible(player.Player.title); 
    });

    // test("Verify Country Filter - India", async ({ page }) => {
    //     const players = new Players(page);

    //     await players.advanceFilter.button.click();

    //     await players.advanceFilter.byCountryIndia;

    //     await expect(page.getByLabel("Country*")).toHaveValue("101");
    // });

    // test("Verify Player OS Filter - Android", async ({ page }) => {
    //     const players = new Players(page);

    //     await players.advanceFilter.button.click();

    //     await players.advanceFilter.byOs;

    //     await expect(page.getByLabel("Player OS")).toHaveValue("Android");
    // });

    // test("Verify Player Type Filter - Horizontal", async ({ page }) => {
    //     const players = new Players(page);

    //     await players.advanceFilter.button.click();

    //     await players.advanceFilter.getbyPlayerType("Horizontal");

    //     await expect(page.getByLabel("Player Type")).toHaveValue("Horizontal");
    // });

    // test("Verify Player Type Filter - Vertical", async ({ page }) => {
    //     const players = new Players(page);

    //     await players.advanceFilter.button.click();

    //     await players.advanceFilter.getbyPlayerType("Vertical");

    //     await expect(page.getByLabel("Player Type")).toHaveValue("Vertical");
    // });

    // test("Verify Apply Filters Button", async ({ page }) => {
    //     const players = new Players(page);

    //     await players.advanceFilter.button.click();

    //     await players.advanceFilter.byStatus.online;

    //     await players.advanceFilter.applyButton.click();

    //     await expect(
    //         page.getByRole("heading", { name: "Advance Filters" })
    //     ).not.toBeVisible();
    // });

    // test("Verify Clear Filters Button", async ({ page }) => {
    //     const players = new Players(page);

    //     await players.advanceFilter.button.click();

    //     await players.advanceFilter.byStatus.offline;

    //     await players.advanceFilter.clearFilter.click();

    //     await expect(page.getByLabel("Status")).toHaveValue("-1");
    // });

});
