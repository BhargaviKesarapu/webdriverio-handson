import { LoginPage } from "../../support/module/sauce_login/LoginPage.screen";
import userdata from "../../fixtures/sauce-credentials.json";

describe('sawg labs ',() =>{
    it('Login functionality check', async() =>{

        const obj = new LoginPage();
        obj.performLogin(userdata.validCredentials.userName,userdata.validCredentials.password);

        //dashboard assertion
        const text = await $('//android.widget.TextView[@text ="PRODUCTS"]');
        await expect(text).toHaveText("PRODUCTS");
        
    })
})
