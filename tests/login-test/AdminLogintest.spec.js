import {test} from '@playwright/test';
import {AdminLoginPage} from '../../pages/login-pages/AdminLoginPage.js';
import datas from '../../config/testData.json';

test('Admin Login function test',async ({page})=>{

    const adminLoginPage = new AdminLoginPage(page);
    await adminLoginPage.landing();
    await adminLoginPage.adminlogin(datas.username,datas.password);
    
    

});