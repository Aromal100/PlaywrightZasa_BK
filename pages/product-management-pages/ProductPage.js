


export class ProductPage {

    constructor(page) {
        this.page = page;
        this.addProduct = page.locator("//button[text()='Add Product']");
        this.productName = page.locator("#productname");
        this.category = page.locator("(//div[contains(@class,'flex items-center justify-between min')])[1]");
        this.uniformCategory = page.locator("(//li[contains(@class,'flex')])[2]");
        this.description = page.locator("(//div[@data-gramm='false'])[1]");
        this.brand = page.locator("(//div[contains(@class,'flex items-center justify-between min')])[2]");
        this.brandOption = page.locator("//div//span[text()='NIMS']");
        this.item = page.locator("(//div[contains(@class,'flex items-center justify-between min')])[3]");
        this.itemType = page.locator("//div//span[text()='SHIRT']");
        this.itemSize = page.locator("(//button[contains(@class,'w-full border')])[1]");
        this.size = page.locator("//div//span[text()='10']");
        this.gender = page.locator("//span[text()='Select Gender']/parent::div");
        this.male = page.locator("//li//span[text()='Male']");
        this.stockCategory = page.locator("(//div[contains(@class,'flex items-center justify-between min')])[6]");
        this.scategory = page.locator("//div//span[text()='Core Uniform']");
        this.grade = page.locator("(//button[contains(@class,'w-full border')])[2]");
        this.selectPrimary = page.locator("(//div[contains(@class,'cursor-pointer p')])[2]");
        this.purchasePrice = page.locator("#price");
        this.sellingPrice = page.locator("#sellingprice");
        this.institute = page.locator("(//button[contains(@class,'w-full border')])[3]");
        this.selectDXB = page.locator("(//div[contains(@class,'cursor-pointer p')])[4]");
        this.saveBtn = page.locator("//button[text()='Save']");

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




}

