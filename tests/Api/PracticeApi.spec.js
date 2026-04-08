import {test} from '@playwright/test'
import ApiData from '../../config/ApiTestData.json'

let authData;
test.beforeAll('Login API test',async({request})=>{

    const apiReq=await request.post("https://storeapi-qa.globtech.in/api/signin",{
        data:ApiData.loginData
    });

    const apiRes=await apiReq.json();
    console.log(apiRes);
    const tokenValue=apiRes.response.accessToken;
    console.log(tokenValue);

    const userData=apiRes.response.data;
    console.log(userData)

    authData=
    {
        name:userData.name,
        token:tokenValue,
        userid:userData.user_id,
        role:userData.role?.role_name || 'Master Admin',
        permissions:userData.role?.module_privileges.map(p=>p.module_id) || [21,6,7,8,66,87,37,80,18,103,102,67,101,3,2,1,26,12,27,28,29,32,34,14,47,43,73,72,40,39,52,36,85,4,5,24,63,68,51,9,10,57,16,17,62,53,54,55,56,69,70,61,76,75,74,77,42,41,38,35,100,99,98,97,86,88,89,90,91,71,82,31,49,20,96,95,94,93,106,92,13,60,58,65,23,22,44,45,46,59,50,64,79,48,33,25,19,112,113,83,84,104,105,114,115]

    };

})

test.beforeEach(async ({ page }) => {
  await page.addInitScript((data) => {
    localStorage.setItem('name', data.name);
    localStorage.setItem('token', data.token);
    localStorage.setItem('userid', data.userid.toString());
    localStorage.setItem('role', data.role);
    localStorage.setItem('permissions', JSON.stringify(data.permissions));
  }, authData);

  await page.goto("https://store-qa.globtech.in/");
});


test('Product test without ui login',async({page})=>{

    await page.locator("//span[text()='Product Management']/parent::button").click();


})