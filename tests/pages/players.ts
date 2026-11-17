import { Page } from "@playwright/test";

export class Players {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Players Page Locators
  get Player() {
    const page = this.page;

    return {
      get title() {
        return page.getByRole("heading", { name: "Players" });
      },

      // Total Players
      get totalplayersText() {
        return page.getByText("Total Players");
      },

      get totalPlayersIcon() {
        return page.locator(".icon-screen-desktop").first();
      },

      get totalPlayerCount() {
        return page.locator("h4.number").nth(1);
      },

      // Online Players
      get onlinePlayerText() {
        return page.getByText("Online Players");
      },

      get onlinePlayerIcon() {
        return page.locator(".icon.bg-success > .icon-screen-desktop");
      },

      get onlinePlayerCount() {
        return page
          .locator("div.content")
          .filter({ hasText: /^Online Players/ })
          .locator("h4.number");
      },

      // Offline Players
      get offlinePlayerText() {
        return page.getByText("Offline Players");
      },

      get offlinePlayersIcon() {
        return page.locator(".icon.bg-secondary > .icon-screen-desktop");
      },

      get OfflinePlayerCount() {
        return page.getByRole("heading", { name: "9" });
      },

      // Preset Tagged
      get presetTagText() {
        return page.getByText("Preset Tagged");
      },

      get presetTagIcon() {
        return page.locator(".fa.fa-tags");
      },

      get presetTagCount() {
        return page.getByRole("heading", { name: "2" });
      },

      // Search Players
      get searchPlayer() {
        return page.getByRole("textbox", { name: "Search Players" });
      },
    };
  }

  // Add Group Locators
  get addGroup() {
    const page = this.page;

    return {
      get Button() {
        return page.getByRole("button", { name: "Add Group" });
      },

      get PageText() {
        return page.getByText("Group", { exact: true });
      },

      get nameField() {
        return page.getByRole("textbox", { name: "Group Name" });
      },

      get searchBar() {
        return page.getByRole("textbox", { name: "Search Players" });
      },

      get xButton() {
        return page.getByRole("link", { name: "X" });
      },

      get closeButton() {
        return page.getByRole("button", { name: " Close" });
      },

      get addButton() {
        return page.getByRole("button", { name: " Add" });
      },

      get createdGroup() {
        return page.locator(
          "li:nth-child(4) > .d-flex > .input-group > .input-group-append > .btn",
        );
      },

      get deleteGroup() {
        return page.getByRole("link", { name: " Delete" });
      },

      get yesDelete() {
        return page.getByRole("button", { name: " Yes Delete" });
      },
    };
  }

  get advanceFilter() {
    const page = this.page;
    return {
      get serchPlayer() {
        return page.getByRole("textbox", { name: "Search Players" });
      },
      get button() {
        return page.getByRole("link", { name: "Advance Filters" });
      },
      get title() {
        return page.getByRole("textbox", { name: "Search Players" });
      },
      get byStatus() {
        return {
          get both() {
            return page.getByLabel("Status").selectOption("-1");
          },
          get online() {
            return page.getByLabel("Status").selectOption("1");
          },
          get offline() {
            return page.getByLabel("Status").selectOption("0");
          },
        };
      },
      get byCountryIndia() {
        return page.getByLabel("Country*").selectOption("101");
      },
      get byOs() {
        return page.getByLabel("Player OS").selectOption("Android");
      },
      getbyPlayerType(layout: string) {
        return page.getByLabel("Player Type").selectOption(`${layout}`);
      },
      get applyButton() {
        return page.getByRole("button", { name: " Apply" });
      },
      get clearFilter() {
        return page.getByRole("link", { name: " Clear Filters" });
      },
    };
  }
}
