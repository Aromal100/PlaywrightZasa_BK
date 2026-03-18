export class PurchaseManagement
{

    constructor(page)
    {
        this.page=page;
        this.searchBar=page.getByPlaceholder("Search by Purchase ID, Quotation ID or Supplier Name");
        this.addPurchaseOrder=page.getByRole('button',{name: "Add Purchase Order"});
        this.purchaseType=page.locator("//span[text()='Select Purchase Type']/parent::div");
        this.directPurchase=page.locator("//span[text()='Direct Purchase']/parent::li");
        this.supplier=page.locator("//span[text()='Select Supplier']/parent::div");
        this.cordova=page.locator("//span[text()='CORDOVA']/parent::li");
        this.category=page.locator("//span[text()='Select Category']/parent::div");
        this.uniform=page.locator("//span[text()='Uniform']/parent::li");

    }


    async addQuotation()
    {
        await this.addPurchaseOrder.click();
        await this.purchaseType.click();
        await this.directPurchase.click();
        await this.supplier.click();
        await this.cordova.click();
        await this.category.click();
        await this.uniform.click();


    }

}