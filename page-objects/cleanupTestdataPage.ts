import { expect, Locator, Page } from "@playwright/test";
import { EnvelopesPage } from "./envelopesPage";
import { LoginPage } from "./loginPage";

export class CleanupTestdataPage {
  readonly page: Page;
  readonly clearAllLink: Locator;
  readonly deleteAllDataLink: Locator;
  readonly myHouseholdLink: Locator;
  readonly transactionDeletedMessage: Locator;

  constructor(page: Page) {
    this.page = page;

    this.clearAllLink = page
      .locator("a")
      .filter({ hasText: "Clear All My Data" });
    this.deleteAllDataLink = page.locator(
      "text=Yes, please DELETE ALL MY DATA."
    );
    this.myHouseholdLink = page.getByRole("link", { name: "My Household" });
    this.transactionDeletedMessage = page.locator(
      "text=Your transactions have been deleted and all balances have been set to 0."
    );
  }

  /**
   * To clear all the data
   */
  async cleanAllTheCreatedData() {
    const loginPage = new LoginPage(this.page);
    const envelopesPage = new EnvelopesPage(this.page);
    await loginPage.login();
    await envelopesPage.deleteAllEnvelopes();
    await this.myHouseholdLink.click();
    await this.clearAllLink.click();
    await this.deleteAllDataLink.click();
    await this.transactionDeletedMessage.isVisible();
  }
}
