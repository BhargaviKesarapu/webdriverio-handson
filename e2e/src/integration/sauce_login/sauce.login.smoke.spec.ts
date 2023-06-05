
import { loginPage } from "../../support/module/sauce_login/LoginPage.screen";
import * as fs from 'fs';

describe('sawg labs ',() =>{
    it('Login functionality check', async() =>{

        // json parse is used to convert json string into object
        const credentials = JSON.parse(fs.readFileSync('./e2e/src/fixtures/sauce-credentials.json','utf8'));

        // extracting the values from validcredentials
        const valid_credentials = credentials['validCredentials'];
        const {userName, password} = valid_credentials;

        const obj = new loginPage();
        obj.performLogin(userName,password);
        //obj.dashboardAseertion();
        

        //dashboard assertion
        const text = await $('//android.widget.TextView[@text ="PRODUCTS"]');
        await expect(text).toHaveText("PRODUCTS");
        
    })
})
