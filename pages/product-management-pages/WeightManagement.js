export class WeightManagement
{
    constructor(page)
    {
        this.page=page;
        this.searchBar=page.locator("[placeholder='Search by Product Name or Category']");
        this.save=page.locator("//button[text()='SAVE']");
        this.newWeight=page.getByPlaceholder("Enter New Weight");
        this.weightAddedMessage=page.locator("text=Weights updated successfully!").first();


    }


    async searchProduct(product)
    {
      await this.searchBar.type(product,{delay:100});
    }

    async addNewWeight(value)
    {
      await this.newWeight.fill(value); 
      this.save.click();
    }


}