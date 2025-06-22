import { test, Page, Locator } from "@playwright/test";
import { testData } from "../data/testdata";

export class EnvelopesPage {
  readonly page: Page;
  readonly addButton: Locator;
  readonly addEditLink: Locator;
  readonly amount: Locator;
  readonly deleteEnvelopes: Locator;
  readonly envelopeName: Locator;
  readonly monthlyDropdown: any;
  readonly periodList: Locator;
  readonly saveChangesButton: Locator;
  readonly saveChangesDialogBox: Locator;

  constructor(page: Page) {
    this.page = page;

    this.addEditLink = page.getByRole("link", { name: "Add / Edit" });
    this.amount = page.locator("div.row-amount").locator('input[type="text"]');
    this.addButton = page.locator('button[class="btn btn-add"]');
    this.deleteEnvelopes = page.locator(".icon-remove-sign");
    this.envelopeName = page
      .locator("div.row-name")
      .locator('input[type="text"]');
    this.monthlyDropdown = page.locator("text=Monthly (Primary)");
    this.periodList = page.locator("#period-extra-MON");
    this.saveChangesButton = page.getByRole("button", { name: "Save Changes" });
    this.saveChangesDialogBox = page.getByRole("button", { name: "No thanks" });
  }

  /**
   * Add Multiple Envelopes
   */
  async addMultipleEnvelops() {
    await this.addEditLink.click();
    await this.periodList.click();
    const envelopeData = testData.envelopes;
    for (let i = 0; i < envelopeData.length; i++) {
      await this.addButton.first().dblclick();
      this.envelopeName.nth(i).fill(envelopeData[i].name);
      await this.page.keyboard.press("Tab");
      this.amount.nth(i).fill(envelopeData[i].amount);
      await this.page.keyboard.press("Tab");
    }
    await this.page.mouse.click(0, 0);
    await this.saveChangesButton.click();
    await this.saveChangesDialogBox.click();
  }

  /**
   * Delete all the created envelopes.
   */
  async deleteAllEnvelopes() {
    await this.addEditLink.click();
    await this.monthlyDropdown.waitFor();
    const deleteButtons = this.deleteEnvelopes;
    while ((await deleteButtons.count()) > 0) {
      await deleteButtons.nth(0).click();
    }
    await this.saveChangesButton.click();
  }
}
