const {test} = require('@playwright/test');
const { ProductPage } = require('../../pages/product-management-pages/ProductPage.js');
const {AdminLoginPage}=require('../../pages/login-pages/AdminLoginPage.js');
const {SidePages}=require('../../pages/common-pages/SidePages.js')

test('Adding the uniform product', async ({ page }) => {

    const pp = new ProductPage(page);
    const adminLoginPage = new AdminLoginPage(page);
    await adminLoginPage.landing();
    await adminLoginPage.adminlogin("ajay@store.com", "123456");
    const sp= new SidePages(page);
    await sp.openProductPage();
    await pp.addUniformProduct("Uniform", "25");
    
    await page.pause();
    





})