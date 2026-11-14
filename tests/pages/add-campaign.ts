import { Page } from "@playwright/test";
import { get } from "node:http";

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
      // get chooseHorizentalSingleDiv() {
      //   return page.getByRole('link', { name: 'HorizentalFull Campaigns (16)' });
      // },
get chooseHorizentalSingleDiv() {
    return page.locator(
        'div.file-name:has(p.ellipsis:text-is("HorizentalFull"))'
    );
},
      get chooseVerticalSingleDiv() {
        return page.getByRole("link", { name: "Vertical Full Layout" });
      },
      get clickAddMedia() {
        return page.getByText("Click To Add Media Here");
      },
     get selectMediaFolder(){
        return page.getByRole('link', { name: ' Horizental  0 ' });
     },
     get selectListView(){
        return  page.getByTitle('List View');

     },
     get selectMedia(){
        return page.getByRole('cell', { name: 'Select All' }).getByLabel('');
     },
     get addToTimeline() {
        return page.getByRole('button', { name: ' Add to timeline' });
     },
     get clickSave(){
        return  page.getByRole('button', { name: 'Save' })

     }
    };
  }
}
