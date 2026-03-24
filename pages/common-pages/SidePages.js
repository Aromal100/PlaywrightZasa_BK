export  class SidePages
{

constructor(page)
{

    this.page=page;
    this.productManagement=page.locator("//span[text()='Product Management']/parent::button");
    this.product=page.locator("//button[text()='Product']");
    this.productKit=page.locator("//button[text()='Product Kit']");
    this.productSettings=page.locator("//button[text()='Product Settings']");
    this.weightManagement=page.locator("//button[text()='Weight Management']");
    this.quotation=page.locator("//span[text()='Quotation & Purchase']/parent::button");
    this.quotationManagement=page.locator("//button[text()='Quotation Management']");
    this.purchaseManagement=page.locator("//button[text()='Purchase Management']");
    this.quotationManagement=page.locator("//button[text()='Quotation Management']");



}

async openProductPage()
{
    await this.productManagement.click();
    await this.product.click();
}

async openProductKitPage()
{
    await this.productManagement.click();
    await this.productKit.click();
}

async openProductSettingsPage()
{
    await this.productManagement.click();
    await this.productSettings.click();
}

async openWeightManagementPage()
{
     await this.productManagement.click();
     await this.weightManagement.click();
}

async openQuotationManagementPage()
{
    await this.quotation.click();
    await this.quotationManagement.click();

}

async openPurchaseManagementPage()
{
    await this.quotation.click();
    await this.purchaseManagement.click();

}

async openQuotationManagementPage()
{
    await this.quotation.click();
    await this.quotationManagement.click();

}





}

