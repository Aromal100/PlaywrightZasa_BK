


export class ProductPage {

    constructor(page) {
        this.page = page;
        this.addProduct = page.getByRole('button',{name:'Add Product'});
        this.productName = page.locator("#productname");
        this.category = page.locator("//span[text()='Select Category']/parent::div");
        this.uniformCategory = page.locator("//span[text()='Uniform']/parent::li");
        this.description = page.locator("//div[@data-gramm='false']").first();
        this.brand = page.locator("//span[text()='Select Brand ']/parent::div");
        this.brandOption = page.locator("//div//span[text()='NIMS']");
        this.item = page.locator("//span[text()='Select Item Type']/parent::div");
        this.itemType = page.locator("//div//span[text()='SHIRT']");
        this.itemSize = page.getByRole('button',{name:'Select Item Size'});
        this.size = page.locator("//div//span[text()='10']");
        this.gender = page.locator("//span[text()='Select Gender']/parent::div");
        this.male = page.locator("//li//span[text()='Male']");
        this.stockCategory = page.locator("//span[text()='Select Stock Category']/parent::div");
        this.scategory = page.locator("//div//span[text()='Core Uniform']");
        this.grade = page.getByRole('button',{name:'Select Grade'});
        this.selectPrimary = page.locator("//span[text()='Primary']/parent::div");
        this.purchasePrice = page.locator("#price");
        this.sellingPrice = page.locator("#sellingprice");
        this.institute = page.getByRole('button',{name:'Select Institution'});
        this.selectDXB = page.locator("//span[text()='New Indian Model School, Dubai']/parent::div");
        this.saveBtn = page.locator("//button[text()='Save']");
        this.productMessage=page.locator("//div[text()='Product added successfully.']").first();
        this.actionBtn=page.locator("button[aria-haspopup='menu']").nth(2);
        this.editBtn=page.locator("//button[@id='radix-:r25:']");
        this.searchfield=page.getByPlaceholder("Search by Product Name or Category");


    }



    async addUniformProduct(productName, price) {
        await this.addProduct.click();
        await this.productName.fill(productName);
        await this.category.click();
        await this.uniformCategory.click();
        await this.description.fill(productName);
        await this.brand.click();
        await this.brandOption.click();
        await this.item.click();
        await this.itemType.click();
        await this.itemSize.click();
        await this.size.click();
        await this.gender.click();
        await this.page.locator('main').evaluate(el => {
            el.scrollBy(0, 500);
        });
        await this.male.click();
        await this.stockCategory.click();
        await this.scategory.click();
        await this.grade.click();
        await this.selectPrimary.click();
        await this.purchasePrice.fill(price);
        await this.sellingPrice.fill(price);
        await this.institute.click();
        await this.selectDXB.click();
        await this.saveBtn.click();

    }

    async editProduct(productName,editedName)
    {
       await  this.searchfield.fill(productName)
       await this.actionBtn.click(); 
       await this.editBtn.click();
       await this.productName.clear();
       await this.productName.fill(editedName);
       await this.saveBtn.click();

    }






}


