import { Page } from "@playwright/test";

export class Profile {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  get profileIcon() {
    return this.page.getByRole("img", { name: "User Pic" });
  }

  get accounSetting() {
    return this.page.getByRole("link", { name: "Account Settings" });
  }
  get clientName() {
    return this.page.getByRole("textbox", { name: "Client Name" });
  }
  get mobileNumber() {
    return this.page.getByRole("textbox", { name: "Address Line" });
  }
  get address() {
    return this.page.getByRole("textbox", { name: "City" });
  }

  getUpdateButton(index: number) {
    return this.page.locator('button').filter({ hasText: 'Update' }).nth(index);
}
  get userDetailsUpdatedToast() {
    return this.page.getByText("User details updated");
  }

  public async landOnProfilePage() {
    await this.profileIcon.click();
    await this.accounSetting.click();
  }
}
