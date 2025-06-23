import { Locator, Page } from "@playwright/test";

export class AccountsPage {
  readonly page: Page;
  readonly accountsLink: Locator;
  readonly addEditLink: Locator;
  readonly currentBalance: Locator;
  readonly amount: Locator;
  readonly header: Locator;
  readonly addButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.accountsLink = page.getByRole("link", { name: "accounts " });
    this.addEditLink = page.getByRole("link", { name: "Add / Edit" });
    this.currentBalance = page
      .locator('div[class="row-name account-name"]')
      .locator(
        'input[class="amount pull-right ng-untouched ng-pristine ng-valid"]'
      );
    this.amount = page.locator(
      'input[class="bank-controls-input ng-pristine ng-valid ng-touched"]'
    );
    this.header = page.getByRole("heading", {
      name: "Checking, Savings, Or Cash",
    });
    this.addButton = page.locator('button[class="btn btn-add"]');
  }

  /**
   * To add account
   */
  async clickOnAccountsLink() {
    await this.accountsLink.click();
    await this.addEditLink.click();
  }
}
