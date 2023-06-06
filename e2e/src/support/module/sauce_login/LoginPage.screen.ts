export class LoginPage{
    
    usernameLocator(){
        return $('~test-Username');
    }

    passwordLocator(){
        return $('~test-Password');
    }

    loginLocator(){
        return $('~test-LOGIN');
    }

    async performLogin(userName: string, password:string){
        
       await this.usernameLocator().setValue(userName);
       await this.passwordLocator().setValue(password);
       await this.loginLocator().click();
      
    }
    
}
