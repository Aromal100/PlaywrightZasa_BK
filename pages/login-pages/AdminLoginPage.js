export class AdminLoginPage {
    constructor(page) {
        this.page = page;   
        this.email = page.locator("#email");
        this.pass = page.locator("#password");
        this.remember = page.locator("#remember");
        this.signIn = page.locator("//button//span[text()='Sign In']");
    }

    async landing() {
        await this.page.goto("https://store-qa.globtech.in/");
    }

    async adminlogin(username, password) {
        await this.email.fill(username);
        await this.pass.fill(password);
        await this.remember.click();
         await this.signIn.click();

    }


}