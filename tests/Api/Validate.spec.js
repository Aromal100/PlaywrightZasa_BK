import {expect, test} from '@playwright/test'

let tokenValue;
test.beforeAll('Auth test the api',async({request})=>{

   const authReq=await request.post("https://restful-booker.herokuapp.com/auth",
    {
        data:
        {
            "username" : "admin",
            "password" : "password123"

        }
    });

    const reqRes=await authReq.json();
    console.log(reqRes)

    tokenValue=await reqRes.token;
    console.log(tokenValue);
    

})


test('Test the token',async({request})=>{

   const putReq=await request.put("https://restful-booker.herokuapp.com/booking/3",
   {
    headers:
    {
        cookie:"token="+tokenValue

    },
    data: {
  firstname: "valis",
  lastname: "Brown",
  totalprice: 111,
  depositpaid: true,
  bookingdates: {
    checkin: "2023-01-01",
    checkout: "2023-01-10"
  },
  additionalneeds: "Breakfast"
}
 });

 const putRep=await putReq.json();
 console.log(putRep)
 expect(putReq.status()).toBe(200);

})