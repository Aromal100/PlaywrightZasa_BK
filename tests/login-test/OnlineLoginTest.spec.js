import {test} from '@playwright/test';
import {OnlineLoginPage} from '../../pages/login-pages/OnlineLoginPage.js';
import datas from '../../config/testData.json';


test('Online login test',async({page})=>{

   await page.goto("https://store-dev.globtech.in/");

   const ol= new OnlineLoginPage(page);
   await ol.openLogin(datas.email,datas.password);
   await page.pause();

})



