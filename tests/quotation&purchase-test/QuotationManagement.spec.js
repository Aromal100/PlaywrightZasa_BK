import {test,expect} from '@playwright/test'
import {QuotationManagement} from '../../pages/quotation&purchase-pages/QuotationManagement.js'
import {SidePages} from '../../pages/common-pages/SidePages.js'
import {AdminLoginPage} from '../../pages/login-pages/AdminLoginPage.js'
import datas from '../../config/testData.json'

test.beforeEach(async ({ page }) => {
    const adminLoginPage = new AdminLoginPage(page);
    await adminLoginPage.landing();
    await adminLoginPage.adminlogin(datas.username, datas.password);
  });

  test('Adding quotation Management function',async({page})=>{

    const sp= new SidePages(page);
    const qm= new QuotationManagement(page);
    await sp.openQuotationManagementPage();
    await qm.addNewQuotation(datas.value);
    await expect(qm.quotationAddedMessage).toHaveText("Quotation added successfully.");
    await qm.approveQuotationStatus(datas.value)
    await expect(qm.quotationStatusMessage).toHaveText("Quotation status updated successfully.");


})



