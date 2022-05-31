import { retry } from "rxjs-compat/operator/retry"

class AuthenticationFeatures{

    ClickAuth(){
        return cy.contains('Auth')
    }

    //Login
    ClickLogin(){
        return cy.contains('Login')
    }
    EnterEmail(){
        return cy.get('#input-email')
    }
    EnterPassword(){
        return cy.get('#input-password')
    }
    ClickonForgetPasswordlink(){
        return cy.get('a:contains("Forgot Password?")')
    }
    ClickRememberme(){
        return cy.get('nb-checkbox[name="rememberMe"]')
    }
    Clickonregisterlink(){
        return cy.get('a:contains("Register")')
    }
    Clicksidebartoggle(){
        return cy.get('[test-id="sidebar"]')
    }
    //Register
    ClickRegister(){
        return cy.contains('Register')
    }
    EnterFullname(){
        return cy.get('input[name="fullName"]')
    }
    EnterEmailAddress(){
        return cy.get('input[name="email"]')
    }
    EnterPasswordtoRegister(){
        return cy.get('input[name="password"]')
    }
    ConfirmPassword(){
        return cy.get('input[name="rePass"]')
    }
    ClickAgree(){
        return cy.get('.custom-checkbox')
    }
    ClickonLoginlink(){
        return cy.get('a:contains("Log in")')
    }
    // Forget Password
    ClickRequestpassword(){
        return cy.contains('Request Password')
    }
    ClickForgetEmail(){
        return cy.get('#input-email')
    }
    ClickonForgetRegisterlink(){
        return cy.get('a:contains("Register")')
    }
    ClickonForgetLoginlink(){
        return cy.get('a:contains("Back to Log In")')
    }
    //Change password
    Clickresetpassword(){
        return cy.contains('Reset Password')
    }
    ClickChangePassword(){
        return cy.get('#input-password')
    }
    ClickConfirmPassword(){
        return cy.get('#input-re-password')
    }
    ClickonRessetRegisterlink(){
        return cy.get('a:contains("Register")')
    }
    ClickonRessetLoginlink(){
        return cy.get('a:contains("Back to Log In")')
    }

}
export default AuthenticationFeatures