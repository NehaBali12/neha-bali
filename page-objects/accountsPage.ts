import { Locator, Page } from "@playwright/test";

export class AccountsPage {
  readonly page: Page;
  readonly accountsLink: Locator;
  readonly addEditLink: Locator;
  readonly currentBalance: Locator;

  constructor(page: Page) {
    this.page = page;
    this.accountsLink = page.getByRole("link", { name: "accounts " });
    this.addEditLink = page.getByRole("link", { name: "Add / Edit" });
    this.currentBalance = page.getByLabel("Current Balance").locator("input");
  }

  /**
   * To add account
   */
  async clickOnAccountsLink() {
    await this.accountsLink.click();
    await this.addEditLink.click();
    await this.currentBalance.click();
    await this.currentBalance.clear();
    await this.currentBalance.fill("4000");
  }
}
