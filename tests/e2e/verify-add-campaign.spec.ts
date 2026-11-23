import{test} from '../fixtures/test-fixtures'


test("Verify The Add Campaign Funtionality",async({addCampaign,loginPage,util})=>{
await loginPage.launchWeb();
await loginPage.loginWeb();
await util.action.clickElement(addCampaign.addCampaignBtn);
await util.assert. toHaveText(addCampaign.campaignPage.text,'Create Campaign');
await util.action.enterText(addCampaign.campaignPage.enterCampaignName,'verticalhk');
await util.action.clickElement(addCampaign.campaignPage.countinueBtn);
await util.action.clickElement(addCampaign.campaignPage.chooseVerticalLayout);
await util.action.clickElement(addCampaign.campaignPage.chooseVerticalSingleDiv);
await util.action.clickElement(addCampaign.campaignPage.clickAddMedia);
await util.action.clickElement(addCampaign.campaignPage.selectVerticalContnet);
await util.action.clickElement(addCampaign.campaignPage.selectListView);
await util.action.clickElement(addCampaign.campaignPage.selectAllVertical);
await util.action.waitForElement(addCampaign.campaignPage.addToTimeline)
await util.action.clickElement(addCampaign.campaignPage.addToTimeline);
await util.action.clickElement(addCampaign.campaignPage.countinueBtn);
await util.action.clickElement(addCampaign.campaignPage.clickSave);



})

test.skip("Verify The Add Campaign", async ({ addCampaign, loginPage }) => {
  await loginPage.launchWeb();
  await loginPage.loginWeb();
  await addCampaign.AddCampaign();
});