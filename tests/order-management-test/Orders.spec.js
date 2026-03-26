import {test,expect} from '@playwright/test'
import {Orders} from '../../pages/order-management-pages/Orders.js'
import {SidePages} from '../../pages/common-pages/SidePages.js'
import {AdminLoginPage} from '../../pages/login-pages/AdminLoginPage.js'
import datas from '../../config/testData.json'

test('Checking the order function',async({page,request})=>{

   
    const or= new Orders(page);

    //  Frontend
    await or.landingOnlineStore(datas.email,datas.password);
    const orderId=await or.orderAnItem();
    console.log('Frontend Order ID:', orderId);

  
    //backend
    const bk = new AdminLoginPage(page);
    await bk.landing();
    await bk.adminlogin(datas.username, datas.password);
    const sp= new SidePages(page);
    await sp.openOrdersPage();
    const orderIdBack = page.locator(`//span[text()='${orderId}']`).first();
    await expect(orderIdBack).toBeVisible();
    await expect(orderIdBack).toHaveText(orderId);
    const code=await or.barcodeScan();
    console.log(code);
    await sp.openOrderStatusScannerPage();
    await or.orderStatusScanner();
    await sp.openScanToPackPage();
    await or.scanToPack();
    await page.pause();



})
