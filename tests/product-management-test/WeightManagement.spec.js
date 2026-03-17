import {test,expect} from '@playwright/test';
import {WeightManagement} from '../../pages/product-management-pages/WeightManagement.js';
import {SidePages} from '../../pages/common-pages/SidePages.js';
import datas from '../../config/testData.json'
import {AdminLoginPage} from '../../pages/login-pages/AdminLoginPage.js'


test.beforeEach(async ({ page }) => {
    const adminLoginPage = new AdminLoginPage(page);
    await adminLoginPage.landing();
    await adminLoginPage.adminlogin(datas.username, datas.password);
  });

test('Adding new weight',async({page})=>{



    const sp= new SidePages(page);
    await sp.openWeightManagementPage();
    const wm= new WeightManagement(page);
    await wm.searchProduct(datas.search);
    await wm.addNewWeight(datas.value);
    await expect(wm.weightAddedMessage).toHaveText("Weights updated successfully!");


}) 