export class SidePages
{

constructor(page)
{

    this.page=page;
    this.productManagement=page.locator("//span[text()='Product Management']");
    this.product=page.locator("//button[text()='Product']");

}

async openProductPage()
{
    await this.productManagement.click();
    await this.product.click();
}


}