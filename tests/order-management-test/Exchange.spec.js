import {test,expect} from '@playwright/test';
import {Exchange} from '../../pages/order-management-pages/Exchange.js'
import {Orders} from '../../pages/order-management-pages/Orders.js'
import {AdminLoginPage} from '../../pages/login-pages/AdminLoginPage.js'
import {SidePages} from '../../pages/common-pages/SidePages.js'
import datas from '../../config/testData.json'


test('Checking the Exchange process functionality',async({page})=>{

    const or= new Orders(page);
    await or.landingOnlineStore(datas.email,datas.password);

    const ex= new Exchange(page);
    await ex.exchangeProcess();
    await ex.exchangeNewSize("14");

//backend
    const bk = new AdminLoginPage(page);
    await bk.landing();
    await bk.adminlogin(datas.username, datas.password);
    const sp= new SidePages(page);
    await sp.openExchangePage();
    await ex.updateExchange();
    await sp.openScanToPackPage();
    await ex.scanToPack();
    await sp.openExchange();
    await ex.barcodeScan();
    await sp.openOrderStatusScannerPage();
    await ex.orderStatusScanner();
    await ex.waitForExchangeCompleted();
    expect(ex.statusText).toHaveText("Exchange status updated to Exchange Process Completed.");

})
