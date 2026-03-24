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
        this.products=page.getByPlaceholder("Search Item Name / Barcode");
        this.save=page.locator("//button[text()='SAVE']");
        this.proceed=page.locator("//button[normalize-space()='Yes, Proceed']");
        this.purchaseOrderMessage=page.locator("//div[text()='Purchase Order added successfully.']").first();
        this.statusBtn=page.locator('[class="focus:outline-none cursor-pointer"]').nth(1);
        this.approve=page.getByRole('menuitem', { name: 'Approve' });
        this.modal = page.locator("//h2[text()='Approve Purchase']/ancestor::div[contains(@class,'shadow-lg')]");
        this.reasonTextbox=this.modal.getByPlaceholder('Enter reason here...');
        this.ok=this.modal.getByRole('button', { name: 'Approve' });
        this.purchaseStatusMessage=page.locator("//div[text()='Purchase status updated successfully.']").first();

    }


    async addNewPurchaseOrder(value)
    {
        await this.addPurchaseOrder.click();
        await this.purchaseType.click();
        await this.directPurchase.click();
        await this.supplier.click();
        await this.cordova.click();
        await this.category.click();
        await this.uniform.click();
        await this.products.click();
        for(let i=0;i<3;i++)
        {
            const add= this.page.locator("//button[.//span[text()='Add']]");
            await add.nth(i).click();
        }

        for(let i=0;i<3;i++)
        {
            const add= this.page.locator("[type='number']");
            await add.nth(i).fill(value);
        }
        await this.save.click();
        await this.proceed.click();
        
    }

    async approvePurchaseStatus(value)
    {
        await this.statusBtn.waitFor();
        await this.statusBtn.click();
        await this.approve.click();
        await this.modal.waitFor({ state: 'visible' });
        await this.reasonTextbox.waitFor({ state: 'visible' });
        await this.reasonTextbox.click({ force: true });
        await this.reasonTextbox.fill(value,{ force: true });
        await this.ok.click({ force: true });
    }

}