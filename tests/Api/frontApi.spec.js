import {test} from '@playwright/test'
import ApiData from '../../config/ApiTestData.json'
import {Orders} from '../../pages/order-management-pages/Orders.js'

let authData;
test.beforeAll('Login API test',async({request})=>{

    const apiReq=await request.post("https://storeapi-qa.globtech.in/api_fe/signin",{
        data:ApiData.loginDatas
    });

    const apiRes=await apiReq.json();
    console.log(apiRes);
    const tokenValue=apiRes.response.token;
    console.log(tokenValue);

    const userData = apiRes.response;
    console.log(userData)

    authData=
    {
         email: userData.email,
        name:userData.name,
         id: userData.id,
        token:tokenValue,
    };

})

test.beforeEach(async ({ page }) => {
  await page.addInitScript((data) => {

    const userData = {
      status: { code: 200, message: "Success" },
      response: {
        message: "Login successful",
        token: data.token,
        id: data.id,
        email: data.email,
        name: data.name,
        inst_id: 4,
        institution_id: 4
      }
    };

     localStorage.setItem('userData', JSON.stringify(userData));

    // ✅ Required additional keys
    localStorage.setItem('schoolId', '4');
    localStorage.setItem('schoolName', 'New Indian Model School, Dubai');

    localStorage.setItem('selected_student_id', '808');
    localStorage.setItem('selected_student_name', 'ADAM');
    localStorage.setItem('selected_student_house', 'Unknown');
    localStorage.setItem('selected_student_gender', 'male');

    localStorage.setItem('all_student_selected_data', JSON.stringify([808, 807]));
  }, authData);

  await page.goto("https://store-dev.globtech.in/");
  await page.reload();
});


test('Product test without ui login',async({page})=>{

    await page.locator("//h3[text()='School Uniforms']/ancestor::button").click();
    await page.pause();
    // const od= new Orders(page);
    // await od.orderAnItem()
    

})