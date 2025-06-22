import { expect, Locator, Page } from "@playwright/test";
import { testData } from "../data/testdata";
import * as dotenv from "dotenv";
dotenv.config();

export class LoginPage {
  readonly page: Page;
  readonly logInButton: Locator;
  readonly logInLink: Locator;
  readonly passwordTextbox: Locator | undefined;
  readonly usernameTextbox: Locator;

  constructor(page: Page) {
    this.page = page;
    this.logInButton = page.getByRole("button", { name: "Log In" });
    this.logInLink = page.locator("ul").locator("li").nth(4);
    this.passwordTextbox = page.getByLabel("Password");
    this.usernameTextbox = page.getByLabel("Household Username / Email");
  }

  /**
   * Logs in to the GoodBudget application using valid credentials.
   */
  async login() {
    const url = process.env.URL!;
    const username = process.env.USERNAME!;
    const password = process.env.PASSWORD!;
    await this.page.goto(url);
    await this.logInLink.click();
    await this.usernameTextbox.fill(username);
    await this.passwordTextbox?.fill(password);
    await this.logInButton.click();
    await this.verifyTitle();
  }

  /**
   * Verify Title of the GoodBudget page
   */
  async verifyTitle() {
    const title = await this.page.title();
    expect(title).toBe(testData.dashboard.title);
  }
}
