import {test,expect} from '@playwright/test'
import ApiData from '../../config/ApiTestData.json'

test('Fetch and validate the header',async({request})=>{

    const req=await request.get("https://restful-booker.herokuapp.com/booking/2");
    const reqHeaders=req.headers();
    console.log(reqHeaders);
    expect(reqHeaders.server).toEqual("Heroku");

    console.log("###################################")


    const headerArray=req.headersArray();
    console.log(headerArray);
    expect(headerArray.length).toBe(10);




})

