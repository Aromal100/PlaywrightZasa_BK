import {test,expect} from '@playwright/test'
import {PurchaseReturn} from '../../pages/quotation&purchase-pages/PurchaseReturn.js'
import {SidePages} from '../../pages/common-pages/SidePages.js'
import {AdminLoginPage} from '../../pages/login-pages/AdminLoginPage.js'
import datas from '../../config/testData.json'

test.beforeEach(async ({ page }) => {
    const adminLoginPage = new AdminLoginPage(page);
    await adminLoginPage.landing();
    await adminLoginPage.adminlogin(datas.username, datas.password);
  });

test('Adding Purchase Return function',async({page})=>{

    const sp= new SidePages(page);
    const pr= new PurchaseReturn(page);
    await sp.openPurchaseReturnPage();
    await pr.newPurchaseReturn(datas.value);
    await expect(pr.purchaseReturnAddedMessage).toHaveText("Purchase Return added Successfully.");



})


