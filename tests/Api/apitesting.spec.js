import {test,request} from '@playwright/test'

let req;
test.beforeAll('Before Test',async()=>{

    req=await request.newContext({
        baseURL:"https://restful-booker.herokuapp.com",
        extraHTTPHeaders:{
            Accept:"application/json"
        }
    })
})

// test('Api testing',async ({request})=>{
//    const req=await request.get("https://restful-booker.herokuapp.com/booking");
//    console.log(await req.json());
// })

// test('Api testing 2',async ()=>{
//     const basereq= await request.newContext({
//         baseURL:"https://restful-booker.herokuapp.com"
//     });
//    const req=await basereq.get("/booking");
//    console.log(await req.json());
// })


test('Api testing 3',async ()=>{
   const req1=await req.get("/booking",{
    params:{
        firstname:"Mark",
        lastname:"Wilson"
    }
   });
   console.log(await req1.json());
})


