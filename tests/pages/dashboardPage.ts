import { Page, Locator } from "@playwright/test";
import { dashboardData } from "../test-data/deshboard-data";
import { Assertions } from "../utility/assertions";
import { assert } from "node:console";

export class DashboardPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }
  get dashboardPageTitle() {
    return this.page.locator("#main-content").getByText("Dashboard");
  }
  getCloudIDText(string: string) {
    return this.page.getByText(`Cloud ID : ${string}`);
  }
  getDashboardClientName(string: string) {
    return this.page.locator(`//h2[normalize-space()='Hi, ${string}.']`);
  }

  get locationsText() {
    return this.page.getByText("Locations");
  }

  get locationIcon() {
    return this.page.locator(".fa.fa-map-marker");
  }
  get totalLocationCount() {
    return this.page
      .locator("div")
      .filter({ hasText: /^Locations\d+$/ })
      .nth(2)
      .innerText();
  }
  get totalPlayersText() {
    return this.page.getByText("Total Players");
  }
  get totalPlayersIcon() {
    return this.page.locator(".icon-screen-desktop").first();
  }
  get totalScreensCount() {
    return this.page.locator("h4.number").nth(1);
  }

  get onlineScreensCount() {
    return this.page
      .locator("div.content")
      .filter({ hasText: /^Online Players/ })
      .locator("h4.number");
  }

  get onlineScreenIcon() {
    return this.page.locator(".icon.bg-success > .icon-screen-desktop");
  }

  getOnlinePlayersCount(string: string) {
    return this.page.getByRole("heading", { name: "${string}", exact: true });
  }

  get addPlayerButton() {
    return this.page.getByRole("button", { name: /Add Player/i });
  }
  get addPlayerPageText() {
    return this.page.getByRole("heading", { name: "Add Player" });
  }
  get addCampaignButton() {
    return this.page.getByRole("button", { name: /Add Campaign/i });
  }
  get addCampaignPageText() {
    return this.page.getByRole("heading", { name: "Create Campaign" });
  }

  get notificationIcon() {
    return this.page.locator("i.fa.fa-bell");
  }
  get notificationPopupHeader() {
    return this.page.locator("strong").filter({ hasText: /^Notifications$/ });
  }

  // Calendar Elements
  get calander() {
    const page = this.page;

    return {
      get calendarIcon() {
        return page.locator(".icon-calendar");
      },

      get calendarOverlay() {
        return page.locator(".cdk-overlay-backdrop");
      },

      get nextMonthButton() {
        return page.getByLabel('Next month');
      },

      get previousMonthButton() {
        return page.getByLabel('Previous month');
      },

      get calendarDateTimeIcon() {
        return page.locator(".calendar_icon");
      },

      get minusHourButton() {
        return page.getByRole("button", { name: "Minus a hour" });
      },
      get addHourButton(){
return page.getByRole('button', { name: 'Add a hour' })

      },

      get minusMinuteButton() {
        return page.getByRole("button", { name: "Minus a minute" });
      },

      get addMinuteButton() {
        return page.getByRole('button', { name: 'Add a minute' });
      },

      get setButton() {
        return page.getByRole("button", { name: "Set" });
      },

      get cancelButton() {
        return page.getByRole("button", { name: "Cancel" });
      },
 get clearButton(){
return page.getByTitle('Clear');
 } ,
      get todayButton() {
        return page.getByRole("button", { name: "today" });
      },
    };
  }
  public async TotalLocationCount(): Promise<string> {
    const actualText = await this.totalLocationCount;

    const actualCount = actualText.match(/\d+/)?.[0];

    console.log("Actual Location Count:", actualCount);

    return actualCount ?? "";
  }

  public async TotalScreensCount(): Promise<string> {
    return await this.totalScreensCount.innerText();
  }

  public async OnlineScreensCount(): Promise<string> {
    return await this.onlineScreensCount.innerText();
  }
}
