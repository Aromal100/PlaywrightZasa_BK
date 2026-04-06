import { expect } from '@playwright/test'


export class Exchange {

  constructor(page) {
    this.page = page;
    this.exBarcode = page.locator("//button[@aria-label='Copy Barcode']").first();
    this.exchange = page.locator("//button[text()='Exchange']");
    this.deliverOrders = page.locator("//button[@id='orders']");
    this.order = page.locator("//button[contains(@class,'flex w')]").first();
    this.startExchange = page.locator("//button[text()='Start Exchange']");
    this.select = page.locator("//input[@type='checkbox']").last();
    this.newSize = page.locator("//button[@title='Click to select new size']").last();
    this.exchangeReason = page.locator("//button[@title='Click to select reason']").last();
    this.exchangeReasonField = page.getByRole('option', { name: 'Wrong Item' });
    this.remark = page.getByPlaceholder("Type your remarks here...").last();
    this.exchangeOrder = page.locator("//button[text()='Exchange Order']");
    this.confirmExchange = page.locator("//button[text()='Yes']")
    this.scanPack = page.getByPlaceholder("Scan or type the order / exchange barcode...");
    this.barcode = page.locator("//button[contains(@class,'bg-slate-50')]");
    this.scanProductBarcode = page.getByPlaceholder("Scan or enter product barcode");
    this.statusScan=page.getByPlaceholder("Scan or type the barcode...");
    this.statusText=page.locator('text=Exchange status updated to Exchange Process Completed.');
  }


  async exchangeProcess() {
    await this.exchange.click();
    await this.deliverOrders.click();
    await this.order.click();
    await this.startExchange.click();

  }

  async exchangeNewSize(size) {
    await this.select.click();
    await this.newSize.click();
    await this.page.getByRole('option', { name: size }).click();
    await this.exchangeReason.click();
    await this.exchangeReasonField.click();
    await this.remark.fill("New");
    await this.exchangeOrder.click();
    await this.confirmExchange.click();

  }


  async updateExchange() {
    await this.exBarcode.click();
  }

  async scanToPack() {
    await this.scanPack.click();
    await this.page.keyboard.press('Control+V');
    await this.barcode.click();
    await this.scanProductBarcode.click();
    await this.page.keyboard.press('Control+V');

  }

  async barcodeScan() {
    await this.exBarcode.click();

  }

  async orderStatusScanner() {
    await this.statusScan.click();
    await this.page.keyboard.press('Control+V');
  }

  async waitForExchangeCompleted() {

        while(true)
        {
        await this.orderStatusScanner();

        await this.page.waitForTimeout(1000);

         if (await this.statusText.isVisible()) {
                break;
            }

        }
    }





}