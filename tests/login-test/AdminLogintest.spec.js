const {test}=require('@playwright/test');
//import {AdminLoginPage} from '../LoginPages/AdminLoginPage.js';
const { AdminLoginPage } = require('../../pages/login-pages/AdminLoginPage.js');

test('Admin Login function test',async ({page})=>{

    const adminLoginPage = new AdminLoginPage(page);
    await adminLoginPage.landing();
    await adminLoginPage.adminlogin("shakki09@gmail.com","123456");
    

});