import datas from '../../config/testData.json';

export class Orders
{

    constructor(page)
    {
        this.page=page;
        this.login=page.getByRole('button',{name:'Login'});
        this.email=page.locator("[name='signinEmail']");
        this.pass=page.locator("[name='signinPassword']");
        this.rememberme=page.locator("[name='rememberMe']");
        this.submit=page.locator("[type='submit']");
        this.selectStu=page.locator("//div[contains(@class,'cursor-pointer bg-white')]").first();
        this.continue=page.getByRole('button',{name:'Select & Continue'});
        this.schoolUniform=page.locator("//h3[text()='School Uniforms']/ancestor::button");
        this.product=page.locator("//button[text()='Add to cart']").first();
        this.proceed=page.locator("//span[text()='PROCEED TO CHECKOUT']/ancestor::button");
        this.deliveryMethod=page.locator("//button[text()='Select Delivery Method']");
        this.selectDelivery=page.locator("//span[text()='Select delivery method']/parent::div");
        this.homeDelivery=page.locator("//span[text()='Classroom Delivery']/parent::div");
        this.pay=page.getByRole('button',{name:'Proceed to pay'});
        this.cashOnDelivery=page.locator("//label[text()='Cash on Delivery']/parent::div");
        this.agree=page.locator("//input[contains(@class,'rounded focus')]");
        this.confirm=page.getByRole('button',{name:'Confirm Order'});
        this.viewOrder=page.getByRole('button',{name:'View Order History'});
        this.orderId=page.locator("//span[@class='text-gray-700 text-sm']").first();

    }

     async landingOnlineStore(email,pass) {
        await this.page.goto(datas.onlineStoreUrl);   
        await this.login.click();
        await this.email.fill(email);
        await this.pass.fill(pass);
        await this.rememberme.click();
        await this.submit.click();
        await this.selectStu.click();
        await this.continue.click();
        await this.schoolUniform.click();

    }

    async orderAnItem()
    {
       await this.product.click();
       await this.proceed.click();
       await this.deliveryMethod.click();
       await this.selectDelivery.click();
       await this.homeDelivery.click();
       await this.pay.click();
       await this.cashOnDelivery.click();
       await this.agree.click();
       await this.confirm.click();
       await this.viewOrder.click();
       await this.orderId.waitFor();
       const orderId = (await this.orderId.innerText()).trim();
       console.log(orderId);

    }




}