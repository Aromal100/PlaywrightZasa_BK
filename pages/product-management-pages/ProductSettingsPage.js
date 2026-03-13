export class ProductSettingsPage {

    constructor(page) {
        this.page = page;
        this.addColorButton = page.locator('text=Add color');
        this.colorName = page.getByRole('textbox', { name: 'Color Name' });
        this.colorCode = page.getByRole('textbox', { name: 'Color Code' });
        this.category = page.getByRole('combobox', { name: 'Category' });
        this.saveButton = page.getByRole('button', { name: 'Save' });
        this.successMessage = page.locator('text=Color added successfully').first(); // assuming the message
    }

    async addColor(colorName, colorCode) {
        await this.addColorButton.click();
        await this.colorName.fill(colorName);
        await this.colorCode.fill(colorCode);
        await this.saveButton.click();
    }

}