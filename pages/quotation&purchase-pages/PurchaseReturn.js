export class PurchaseReturn
{
   constructor(page)
   {
    this.page=page;
    this.addPurchaseReturn=page.locator("//button[text()='Add Purchase Return']");
    this.supplier=page.locator("//span[text()='Select Supplier']/parent::div");
    this.cordova=page.locator("//span[text()='CORDOVA']/parent::li")
   }
}