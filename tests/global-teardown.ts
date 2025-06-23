import { chromium } from "@playwright/test";
import { CleanupTestdataPage } from "../page-objects/cleanupTestdataPage";

export default async function globalTeardown() {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  const cleanupTestdataPage = new CleanupTestdataPage(page);
  await cleanupTestdataPage.cleanAllTheCreatedData();
  await browser.close();
}
