import { test,expect } from '@playwright/test';
import { AdminLoginPage } from '../../pages/login-pages/AdminLoginPage.js';
import { ProductKit } from '../../pages/product-management-pages/ProductKit.js';
import { SidePages } from '../../pages/common-pages/SidePages.js'
import datas from '../../config/testData.json';

test.describe.serial('Product flow', () => {

    test.beforeEach(async ({ page }) => {
        const adminLoginPage = new AdminLoginPage(page);
        await adminLoginPage.landing();
        await adminLoginPage.adminlogin(datas.username, datas.password);
    });

    test('Product kit creation', async ({ page }) => {
        const sp = new SidePages(page);
        await sp.openProductKitPage();
        const productKit = new ProductKit(page);
        await productKit.addKitProduct(datas.kitname,datas.description,datas.value);
        await expect(productKit.kitAddedMessage).toHaveText("Product kit added successfully.");
       

    })

    test('Delete product kit',async({page})=>{
        const sp = new SidePages(page);
        await sp.openProductKitPage();
        const productKit = new ProductKit(page);
        await productKit.deleteKitProduct(datas.kitname);
        await expect(productKit.kitDeletedMessage).toHaveText("Product kit deleted successfully.");

    })
})