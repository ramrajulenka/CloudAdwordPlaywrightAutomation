import{test} from '../fixtures/test-fixtures'


test("Verify The Add Campaign Funtionality",async({addCampaignPage,actions,loginPage,assertions,page})=>{
await loginPage.launchWeb();
await page.keyboard.press('F11');
await loginPage.loginWeb();
await actions.clickElement(addCampaignPage.addCampaignBtn);
await assertions.verifyElementText(addCampaignPage.campaignPage.text,'Create Campaign');
await actions.enterText(addCampaignPage.campaignPage.enterCampaignName,'verticalh');
await actions.clickElement(addCampaignPage.campaignPage.countinueBtn);
await actions.clickElement(addCampaignPage.campaignPage.chooseVerticalLayout);
await actions.clickElement(addCampaignPage.campaignPage.chooseVerticalSingleDiv);
await actions.clickElement(addCampaignPage.campaignPage.clickAddMedia);
await actions.clickElement(addCampaignPage.campaignPage.selectVerticalContnet);
await actions.clickElement(addCampaignPage.campaignPage.selectListView);
await actions.clickElement(addCampaignPage.campaignPage.selectAllVertical);
await actions.clickElement(addCampaignPage.campaignPage.addToTimeline);
await actions.clickElement(addCampaignPage.campaignPage.countinueBtn);
await actions.clickElement(addCampaignPage.campaignPage.clickSave);



})

test.skip("Verify The Add Campaign", async ({ addCampaignPage, loginPage }) => {
  await loginPage.launchWeb();
  await loginPage.loginWeb();
  await addCampaignPage.AddCampaign();
});