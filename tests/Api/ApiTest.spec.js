import {test,expect} from '@playwright/test'
import ApiData from '../../config/ApiTestData.json'

test.only('New Api test with post using testdata',async ({request})=>{

    const postReq=await request.post("https://restful-booker.herokuapp.com/booking",{
        data:ApiData.postData
    })

    const apijson=await postReq.json();
    console.log(apijson);

    expect(apijson.booking).toMatchObject(ApiData.postData);
    expect(apijson.booking.additionalneeds).toEqual(ApiData.postData.additionalneeds);

})

test('New Api test with put using testdata',async({request})=>{

    const putReq=await request.put("https://restful-booker.herokuapp.com/booking/3212",
    {
     data:ApiData.putData
    })

    const putJson=await putReq.json();
    console.log(putJson);

    expect(putJson).toMatchObject(ApiData.putData);
    expect(putJson.firstname).toEqual("Gautham");





})