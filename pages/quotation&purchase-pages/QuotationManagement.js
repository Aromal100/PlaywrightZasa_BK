export class QuotationManagement
{

    constructor(page)
    {
        this.page=page;
        this.addQuotation=page.locator("//button[text()='Add Quotation']");
        this.supplier=page.locator("//span[text()='Select Supplier']/parent::div");
        this.cordova=page.locator("//span[text()='Cordova']/parent::li");
        this.category=page.locator("//span[text()='Select Category']/parent::div");
        this.uniform=page.locator("//span[text()='Uniform']/parent::li");
        this.products=page.getByPlaceholder("Search with Product Name or Barcode");
        this.save=page.locator("//button[text()='Save Quotation']");
        this.proceed=page.locator("//button[text()='Yes, Proceed']");
        this.quotationAddedMessage=page.locator("//div[text()='Quotation added successfully.']").first();
        this.changeStatus=page.locator('[class="focus:outline-none cursor-pointer"]').nth(1);
        this.approve=page.getByRole('menuitem', { name: 'Approve' });
        this.reasonTextbox=page.getByPlaceholder('Enter reason here...');
        this.save=page.getByRole('button', { name: 'Save' });
        this.quotationStatusMessage=page.locator("//div[text()='Quotation status updated successfully.']").first();





    }

    async addNewQuotation(value)
    {
        await this.addQuotation.click();
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
            const add= this.page.locator("[inputmode='numeric']");
            await add.nth(i).fill(value);
        }

        await this.save.click();
        await this.proceed.click();

    }

    async approveQuotationStatus(value)
    {
        await this.changeStatus.waitFor();
        await this.changeStatus.click();
        await this.approve.click();
        await this.reasonTextbox.click({force:true});
        await this.reasonTextbox.fill(value,{force:true});
        await this.save.click({force:true});
    }






}