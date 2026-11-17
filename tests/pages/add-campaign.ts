import { Page } from "@playwright/test";

export class AddCampaignPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  get addCampaignBtn() {
    return this.page.getByRole("button", { name: "Add Campaign" });
  }

  get campaignPage() {
    const page = this.page;

    return {
      get text() {
        return page.getByRole("heading", { name: "Create Campaign" });
      },

      get enterCampaignName() {
        return page.getByRole("textbox", { name: "Campaign Name" });
      },

      get countinueBtn() {
        return page.getByRole("button", { name: "Continue" });
      },

      get chooseHorizentalLayout() {
        return page
          .locator("div")
          .filter({ hasText: /^Horizontal$/ })
          .nth(2);
      },

      get chooseVerticalLayout() {
        return page
          .locator("div")
          .filter({ hasText: /^Vertical$/ })
          .nth(2);
      },

      get chooseHorizentalSingleDiv() {
        return page.locator(
          'div.file-name:has(p.ellipsis:text-is("HorizentalFull"))',
        );
      },

      get chooseVerticalSingleDiv() {
        return page.getByRole("link", { name: "Vertical Full Layout" });
      },

      get clickAddMedia() {
        return page.locator("#tbllayout1").locator("span.btnAddMedia");
      },

      get selectMediaFolder() {
        return page.getByRole("link", { name: " Horizental  0 " });
      },

      get selectListView() {
        return page.getByTitle("List View");
      },

      get selectMedia() {
        return page
          .getByRole("row")
          .filter({ hasText: "Select All" })
          .getByRole("checkbox");
      },

      get selectVerticalContnet() {
        return page.locator(':text-is("VerticalImage")');
      },

      get selectAllVertical() {
        return page.locator(
          "//tr[td[contains(., 'Select All')]]//td[1]//input[@type='checkbox']",
        );
      },

      get addToTimeline() {
        return page.getByRole("button", { name: "Add to timeline" });
      },

      get clickSave() {
        return page.getByText("Save", { exact: true });
      },
    };
  }


  

  public async AddCampaign() {
    await this.addCampaignBtn.click();
    await this.campaignPage.enterCampaignName.fill("New_Kira_7867kjkjghghjhjh");
    await this.campaignPage.countinueBtn.click();
    await this.campaignPage.chooseVerticalLayout.click();
    await this.campaignPage.chooseVerticalSingleDiv.click();

    await this.campaignPage.clickAddMedia.waitFor({
      state: "visible",
    });

    await this.campaignPage.clickAddMedia.click();
    await this.campaignPage.selectMediaFolder.click();
    await this.campaignPage.selectListView.click();
    await this.campaignPage.selectMedia.click();
    await this.campaignPage.addToTimeline.click();
    await this.campaignPage.countinueBtn.click();

    await this.campaignPage.clickSave.waitFor({
      state: "visible",
      timeout: 10000,
    });

    await this.campaignPage.clickSave.click();
  }
}
