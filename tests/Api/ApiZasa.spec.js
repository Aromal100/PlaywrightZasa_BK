import {test,expect} from '@playwright/test'


test('Api ui test ',async({page,request})=>{

    const req=await request.get("https://api.demoblaze.com/entries");
    const body = await req.json();  
    console.log(body.Items[0].title);

    await page.goto("https://demoblaze.com/");
    await expect(page.getByRole('link',{name:'Samsung galaxy s6'})).toHaveText(body.Items[0].title);

})

test.only('Post Api Testing',async({request})=>{

   const postapi=await request.post("/booking",{
    data:{
         "firstname": "Jim",
        "lastname": "Brown",
        "totalprice": 111,
        "depositpaid": true,
        "bookingdates": {
            "checkin": "2018-01-01",
            "checkout": "2019-01-01"
        },
        "additionalneeds": "Breakfast"
    }
   })
   const res= await postapi.json();
   console.log(res);


})