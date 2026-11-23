import { Page } from "@playwright/test";

export class Players {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

get playerbutton(){
  return  this.page.getByRole('link', { name: 'Players' })
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
        return page.getByRole('heading', { name: '11' })
      },

      // Online Players
      get onlinePlayerText() {
        return page.getByText("Online Players");
      },

      get onlinePlayerIcon() {
        return page.locator(".icon.bg-success > .icon-screen-desktop");
      },

      get onlinePlayerCount() {
        return page.getByRole('heading', { name: '0' });
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

    get selectPlayer() {
    return page
        .getByRole("row", { name: /L Shape Device/ })
        .getByRole("checkbox");


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
    return page.locator("//li[@title='Testing']");
},

get groupMenuButton() {
    return this.createdGroup.locator("button.grp_btn");
},

get deleteGroup() {
    return page.locator(
        "//div[contains(@class,'dropdown-menu') and contains(@class,'show')]//a[normalize-space()='Delete']"
    );
},
      get yesDelete() {
        return page.locator('#confirmModal button[type="button"]', {hasText: 'Yes Delete'});
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
        return page.getByText("Advance Filters", { exact: true });
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
      get countryDropdown() {
    return page.getByLabel("Country*");
},
      get byOs() {
        return page.getByLabel("Player OS");
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
