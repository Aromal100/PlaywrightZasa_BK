export class PurchaseReturn {
   constructor(page) {
      this.page = page;
      this.addPurchaseReturn = page.locator("//button[text()='Add Purchase Return']");
      this.supplier = page.locator("//span[text()='Select Supplier']/parent::div");
      this.cordova = page.locator("//span[text()='CORDOVA']/parent::li");
      this.calender = page.locator("[name='date']");
      this.today = page.locator("//button[text()='Today']");
      this.purchase = page.locator("//span[text()='Select Purchase']/parent::div");
      this.option = page.locator("//ul//li[1]").first();
      this.products = page.getByPlaceholder("Search with Product Name or Barcode");
      this.save = page.getByRole('button', { name: 'SAVE' });
      this.purchaseReturnAddedMessage=page.locator("//div[text()='Purchase Return added Successfully.']").first();

   }


   async newPurchaseReturn(value) {

      await this.addPurchaseReturn.click();
      await this.supplier.click();
      await this.cordova.click();
      await this.calender.fill(
         new Date().toISOString().split('T')[0]
      );
      await this.purchase.click();
      await this.option.click();
      await this.products.click();
      for(let i=0;i<1;i++)
      {
         const add=this.page.locator("//span[text()='Add']/parent::button");
         await add.nth(i).click();
      }

      for(let i=0;i<1;i++)
      {
         const addQty=this.page.locator("[type='text']");
         await addQty.nth(i).fill(value);
      }
      await this.save.click();

   }
}