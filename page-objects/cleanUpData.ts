import { Locator, Page } from "@playwright/test";

export class CleanUpData {
  readonly page: Page;
  readonly clearAllLink: Locator;
  readonly deleteAllDataLink: Locator;
  readonly myHouseholdLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.clearAllLink = page.getByRole("link", { name: "Clear All My Data" });
    this.deleteAllDataLink = page.getByRole("link", {
      name: "Yes, please DELETE ALL MY DATA.",
    });
    this.myHouseholdLink = page.getByRole("link", { name: "My Household" });
  }

  /**
   * To clear all the data
   */
  async cleanAllTheCreatedData() {
    this.myHouseholdLink.click();
    this.clearAllLink.click();
    this.deleteAllDataLink.click();
  }
}
