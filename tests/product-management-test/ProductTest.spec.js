import {test,expect} from  '@playwright/test';
import { ProductPage } from '../../pages/product-management-pages/ProductPage.js';
import {AdminLoginPage} from '../../pages/login-pages/AdminLoginPage.js';
import  {SidePages} from '../../pages/common-pages/SidePages.js';
const datas= JSON.parse(JSON.stringify(require('../../config/testData.json')));

test.beforeEach(async ({ page }) => {
  const adminLoginPage = new AdminLoginPage(page);
  await adminLoginPage.landing();
  await adminLoginPage.adminlogin(datas.username, datas.password);
});

test('Adding the uniform product', async ({ page }) => {

    // const pp = new ProductPage(page);
    // const adminLoginPage = new AdminLoginPage(page);
    // await adminLoginPage.landing();
    // await adminLoginPage.adminlogin(datas.username, datas.password);
    const sp= new SidePages(page);
    await sp.openProductPage();
    await pp.addUniformProduct("Uniform", "25");
    await expect (pp.productMessage).toHaveText('Product added successfully.');

      
})

test('Editing the product',async({page})=>{
    
    const sp= new SidePages(page);
    await sp.openProductPage();
    const pp = new ProductPage(page);
   await pp.editProduct(datas.editedname);


})
