import datas from '../../config/testData.json';

export class OnlineLoginPage
{

    constructor(page)
    {
      this.page=page;
      this.login=page.getByRole('button',{name:"Login"});
      this.email=page.getByPlaceholder("name@flowbite.com");
      this.password=page.getByPlaceholder("Enter your password");
      this.submit=page.getByRole('button',{name:"Login and Select Student"})
      this.selectStu = page.locator("//div[contains(@class,'cursor-pointer bg-white')]").first();
      this.continue = page.getByRole('button', { name: 'Select & Continue' });
    }

    async openLogin(email,pass)
    {
       await this.login.click();
    await this.email.pressSequentially(email,{delay:100});
     await this.password.pressSequentially(pass,{delay:100});

     await this.submit.click();
      await this.page.waitForLoadState('networkidle');
     await this.selectStu.click();
     await this.continue.click();
    }

}