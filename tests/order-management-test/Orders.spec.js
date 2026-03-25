import {test,expect} from '@playwright/test'
import {Orders} from '../../pages/order-management-pages/Orders.js'
import {SidePages} from '../../pages/common-pages/SidePages.js'
import {AdminLoginPage} from '../../pages/login-pages/AdminLoginPage.js'
import datas from '../../config/testData.json'

test('Checking the order function',async({page})=>{

   
    const or= new Orders(page);

    //  Frontend
    await or.landingOnlineStore(datas.email,datas.password);
    const orderId=await or.orderAnItem();

    //backend
    const bk = new AdminLoginPage(page);
    await bk.landing();
    await bk.adminlogin(datas.username, datas.password);




})