import{test} from '../fixtures/test-fixtures'


test("Verify The Add Campaign Funtionality",async({addCampaignPage,actions,loginPage,assertions,page})=>{
await loginPage.launchWeb();
await loginPage.loginWeb();
await actions.clickElement(addCampaignPage.addCampaignBtn);
await assertions.verifyElementText(addCampaignPage.campaignPage.text,'Create Campaign');
await actions.enterText(addCampaignPage.campaignPage.enterCampaignName,'New_Kira_7867kjkj');
await actions.clickElement(addCampaignPage.campaignPage.countinueBtn);
await actions.clickElement(addCampaignPage.campaignPage.chooseVerticalLayout);
await actions.clickElement(addCampaignPage.campaignPage.chooseVerticalSingleDiv);
await actions.clickElement(addCampaignPage.campaignPage.clickAddMedia);
await actions.clickElement(addCampaignPage.campaignPage.selectMediaFolder);
await actions.clickElement(addCampaignPage.campaignPage.selectListView);
await actions.clickElement(addCampaignPage.campaignPage.selectMedia);
await actions.clickElement(addCampaignPage.campaignPage.addToTimeline);
await actions.clickElement(addCampaignPage.campaignPage.countinueBtn);
await actions.clickElement(addCampaignPage.campaignPage.clickSave);


})