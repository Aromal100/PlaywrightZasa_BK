export  class SidePages
{

constructor(page)
{

    this.page=page;
    this.productManagement=page.locator("//span[text()='Product Management']/parent::button");
    this.product=page.locator("//button[text()='Product']");
    this.productKit=page.locator("//button[text()='Product Kit']");
    this.productSettings=page.locator("//button[text()='Product Settings']");

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

}
