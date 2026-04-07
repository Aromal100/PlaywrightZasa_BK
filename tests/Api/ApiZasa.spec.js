import { test, expect } from '@playwright/test'


test('Api ui test ', async ({ page, request }) => {

    const req = await request.get("https://api.demoblaze.com/entries");

    const body = await req.json();
    console.log(body.Items[1].title);

    await page.goto("https://demoblaze.com/");
    await expect(page.getByRole('link', { name: 'Nokia lumia 1520' })).toHaveText(body.Items[1].title);

})


test('Api test with post method', async ({ page, request }) => {

    const req = await request.post("/booking", {
        data:
        {
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

    const jsonRes = await req.json();

    console.log(jsonRes);
    expect(jsonRes.booking).toMatchObject({
        firstname: 'Jim',
        lastname: 'Brown',
        totalprice: 111,
        depositpaid: true,
        bookingdates: { checkin: '2018-01-01', checkout: '2019-01-01' },
        additionalneeds: 'Breakfast'
    })

})

test('Api post on BM store', async ({ request }) => {


       const loginRes=await request.post("https://storeapi-qa.globtech.in/api_fe/signin",{
        data:{
        "email":"arshadazadad@yahoo.com","password":"123456"
        }
       });

       const loginBody=await loginRes.json();
       const token=loginBody.response.token;
       console.log(token);
       



        const newReq =await request.post("  ",{
            headers:{
                Authorization: `Bearer ${token}`
            },
            data: {
                "school_id": "4", "student_id": "652", "house": "mystique", "user_id": 434, "product_id": 1845, 
                "product_name": "Pe Girls Top Mystique NIMS", "amount": 75, "quantity": 1, "total_amount": 75, 
                "category": "uniform", "type": "single", "size_id": 103
            }
        });

        const res=await newReq.json();
        console.log(res);
      


    })


    test('update the api test',async({request})=>{

       const putReq=await request.put("https://restful-booker.herokuapp.com/booking/1",{ 
        
        headers: {
        'Authorization': 'Basic YWRtaW46cGFzc3dvcmQxMjM='
      },

        data:{

            "firstname": "Jimmy",
            "lastname": "Brown",
            "totalprice": 111,
            "depositpaid": true,
            "bookingdates": {
                "checkin": "2018-01-01",
                "checkout": "2019-01-01"
            },
            "additionalneeds": "Breakfasts"
        }


       });

       const jsonRes = await putReq.json();
       console.log(jsonRes);





    })
