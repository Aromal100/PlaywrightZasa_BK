import { test, expect } from '@playwright/test';
import { ProductPage } from '../../pages/product-management-pages/ProductPage.js';
import { AdminLoginPage } from '../../pages/login-pages/AdminLoginPage.js';
import { SidePages } from '../../pages/common-pages/SidePages.js';
import datas from '../../config/testData.json';


test.describe.serial('Product flow', () => {

  test.beforeEach(async ({ page }) => {
    const adminLoginPage = new AdminLoginPage(page);
    await adminLoginPage.landing();
    await adminLoginPage.adminlogin(datas.username, datas.password);
  });

  test('Adding the uniform product', async ({ page }) => {

    const pp = new ProductPage(page);
    const sp = new SidePages(page);
    await sp.openProductPage();
    await pp.addUniformProduct(datas.productname, datas.age);
    await expect(pp.productMessage).toHaveText('Product added successfully.');

  })

  test('Editing the product', async ({ page }) => {

    const sp = new SidePages(page);
    await sp.openProductPage();
    const pp = new ProductPage(page);
    const productName="Auto"+Date.now();
    await pp.addUniformProduct(productName, datas.age);
    await pp.searchProduct(productName);
    await pp.editProduct(datas.editedname);
    await expect(pp.editProductMessage).toHaveText('Product updated successfully.');

  })

  test('Delete the product', async ({ page }) => {

    const sp = new SidePages(page);
    await sp.openProductPage();
    const pp = new ProductPage(page);
    const productName="Auto"+Date.now();
    await pp.addUniformProduct(productName, datas.age);
    await pp.searchProduct(productName);
    await pp.productDelete();
    await expect(pp.deleteProductMessage).toHaveText('Product deleted successfully.');



  })
});
