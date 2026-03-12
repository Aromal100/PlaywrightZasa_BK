
export class ProductKit {
    constructor(page) {
        this.page = page;
        this.addkit = page.getByRole('button', { name: 'Add Kit' });
        this.kitName = page.locator("#kitname");
        this.category = page.locator("//span[text()='Select an option...']/parent::div");
        this.bookOption = page.locator("//span[text()='Book']/parent::li");
        this.description = page.locator("[class='ql-editor ql-blank']").nth(0);
        this.institute = page.locator("//span[text()='Select Institution']/parent::div");
        this.dxbInstitute = page.locator("//span[text()='New Indian Model School, Dubai']/parent::li");
        this.grades = page.locator("//span[text()='Select Grade(s)']/parent::div");
        this.kg1 = page.getByText("KG 1");
        this.kg2 = page.getByText("KG 2");
        this.items = page.getByPlaceholder("Search Item Code / Item Name / Barcode");
        this.q1 = page.locator("[inputmode='numeric']").nth(0);
        this.q2 = page.locator("[inputmode='numeric']").nth(1);
        this.kitStatus = page.getByText("Select Kit Status Type");
        this.online = page.getByText("Online Kit");
        this.offline = page.getByText("Offline Kit");
        this.saveKit = page.getByText("Save Product Kit");
        this.search=page.getByPlaceholder("Search by Kit Name and Category");
        this.actionBtn=page.locator("button[data-slot='dropdown-menu-trigger']").nth(1);
        this.delete= page.locator("div[data-slot='dropdown-menu-item']").nth(3);
        this.ok=page.locator("//button[text()='OK']");
        this.kitAddedMessage=page.locator("//div[text()='Product kit added successfully.']").first();
        this.kitDeletedMessage=page.locator("//div[text()='Product kit deleted successfully.']").first();

    }

    async addKitProduct(kitname, decrp, value) {
        await this.addkit.click();
        await this.kitName.waitFor();
        await this.kitName.type(kitname);
        await this.category.click();
        await this.bookOption.click();
        await this.description.fill(decrp);
        await this.institute.click();
        await this.dxbInstitute.click();
        await this.grades.click();
        await this.kg1.click();
        await this.kg2.click();
        await this.items.click();
        for(let i=0;i<3;i++)
        {
            const add= this.page.locator("//button[.//span[text()='Add']]");
            await add.nth(i).click();
        }
        await this.q1.fill(value);
        await this.q2.fill(value);
        await this.kitStatus.click();
        await this.online.click();
        await this.offline.click();
        await this.saveKit.click();

    }

    async deleteKitProduct(kitname)
    {
        await this.search.type(kitname, { delay: 100 });
        await this.actionBtn.click();
        await this.delete.click();
        await this.ok.click();

    }

}