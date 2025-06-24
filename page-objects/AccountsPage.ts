import { Locator, Page } from "@playwright/test";
import { testData } from "../data/testdata";

export class AccountsPage {
  readonly page: Page;
  readonly accountsLink: Locator;
  readonly addEditLink: Locator;
  readonly currentBalance: Locator;
  readonly amount: Locator;
  readonly header: Locator;
  readonly addButton: Locator;
  readonly accountName: Locator;
  readonly addButtonForDebt: Locator;
  readonly debtName: Locator;
  readonly currentBalanceDebtAmount: Locator;
  readonly monthlyPayment: Locator;
  readonly interestRate: Locator;
  readonly selectEnvelope: Locator;
  readonly doneButton: Locator;
  readonly saveChangesButton: Locator;
  readonly saveChangesDialogBox: Locator;

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
    this.accountName = page.locator(
      'input[class="bank-controls-input ng-untouched ng-pristine ng-valid"]'
    );
    this.currentBalance = page.locator(
      'input[class="amount pull-right ng-untouched ng-pristine ng-valid"]'
    );
    this.addButtonForDebt = page.getByRole("button", { name: "Add" });
    this.debtName = page.locator(
      'input[class="name bank-controls-input ng-untouched ng-pristine ng-valid"]'
    );
    this.currentBalanceDebtAmount = page.locator(
      'input[class="amount expanded-amount ng-untouched ng-pristine ng-valid"]'
    );
    this.monthlyPayment = page.locator(
      'input[class="debt-info-amount ng-untouched ng-pristine ng-valid"]'
    );
    this.interestRate = page.locator(
      'input[class="ng-untouched ng-pristine ng-valid"]'
    );
    this.selectEnvelope = page.locator("select").nth(1);
    this.doneButton = page.getByRole("button", { name: "Done" });
    this.saveChangesButton = page.getByRole("button", { name: "Save Changes" });
    this.saveChangesDialogBox = page.getByRole("button", {
      name: " No thanks",
    });
  }

  /**
   * To add account and Debt
   */
  async clickOnAccountsLink() {
    await this.accountsLink.click();
    await this.addEditLink.click();
    await this.accountName.dblclick();
    await this.page.keyboard.press("Control+A");
    await this.page.keyboard.press("Backspace");
    await this.accountName.fill("Checking");
    await this.page.keyboard.press("Tab");
    await this.currentBalance.fill("4000");
    await this.addButtonForDebt.nth(2).click();
    await this.debtName.fill(testData.debtAccountDetails.name);
    await this.page.keyboard.press("Tab");
    await this.currentBalanceDebtAmount.fill(
      testData.debtAccountDetails.currentBalance
    );
    await this.page.keyboard.press("Tab");
    await this.page.keyboard.press("Tab");
    await this.monthlyPayment.fill(testData.debtAccountDetails.monthlyPayment);
    await this.page.keyboard.press("Tab");
    await this.selectEnvelope.selectOption({
      label: "[NEW] Debt Payment: House",
    });
    await this.page.keyboard.press("Tab");
    await this.interestRate.fill(testData.debtAccountDetails.interestRate);
    await this.doneButton.click();
    await this.page.mouse.click(0, 0);
    await this.saveChangesButton.click();
    await this.saveChangesDialogBox.click();
  }
}
