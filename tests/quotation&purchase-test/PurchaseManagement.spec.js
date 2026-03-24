import {test,expect} from '@playwright/test'
import {PurchaseManagement} from '../../pages/quotation&purchase-pages/PurchaseManagement.js'
import {SidePages} from '../../pages/common-pages/SidePages.js'
import {AdminLoginPage} from '../../pages/login-pages/AdminLoginPage.js'
import datas from '../../config/testData.json'

test.beforeEach(async ({ page }) => {
    const adminLoginPage = new AdminLoginPage(page);
    await adminLoginPage.landing();
    await adminLoginPage.adminlogin(datas.username, datas.password);
  });

test('Adding and Approving Purchase Management function',async({page})=>{

    const sp= new SidePages(page);
    const pm= new PurchaseManagement(page);
    await sp.openPurchaseManagementPage();
    await pm.addNewPurchaseOrder(datas.value);
    await expect(pm.purchaseOrderMessage).toHaveText("Purchase Order added successfully.");
    await pm.approvePurchaseStatus(datas.value);
    await expect(pm.purchaseStatusMessage).toHaveText("Purchase status updated successfully.");


})