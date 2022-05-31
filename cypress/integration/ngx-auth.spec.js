import AuthenticationFeatures from "/home/dev/Desktop/Auto-ngx/cypress/integration/ngx-auth-locators.js"; 

describe('NGX Admin Authentication Feature', () => {
    const Auth = new AuthenticationFeatures();

    before(() => {
        cy.visit('http://localhost:4200/')
    })
    context('Login feature from Authentication Feature', () => {
        it('Should verify that sidebar toggles is open', () => {
            Auth.Clicksidebartoggle()
            .click()
        })
        it('Should verify that Auth Feature is clickable', () => {
            Auth.ClickAuth()
            .click()
        })
        //ClickLogin
        it('Should verify that user is able to click on Login Feature', () => {
            Auth.ClickLogin()
            .click()
        })
        it('Should verify that user is able to enter email in Email Address field', () => {
            Auth.EnterEmail()
            .type('sidra123@gmail.com')
        })
        it('Should verify that user is able to enter password in Password field', () => {
            Auth.EnterPassword()
            .type('123456')
        })
        it('Should verify that user is able to click on Forget Password link that will redirect user to Forget Password page', () => {
            Auth.ClickonForgetPasswordlink()
            .click()
            cy.go('back')
        })
        it('Should verify that user is able to click remember me checkbox', () => {
            Auth.ClickRememberme()
            .click()
        })
        it('Should verify that user is able to click on Register link that will redirect user to Registration page', () => {
            Auth.Clickonregisterlink()
            .click()
            cy.go('back')
            cy.go('back')
        })
    })
    //Click on Register
    context('Register feature from Authentication Feature', () => {
        it('Should verify that sidebar toggles is open', () => {
            Auth.Clicksidebartoggle()
            .click()
        })
        it('Should verify that user is able to click on Register Feature', () => {
            Auth.ClickRegister()
            .click()
            // cy.go('back')
        })
        it('Should verify that user is able to enter Full name in Email Address field', () => {
            Auth.EnterFullname()
            .type('Sidra')
        })
        it('Should verify that user is able to enter email in Email Address field', () => {
            Auth.EnterEmailAddress()
            .type('sidra123@gmail.com')
        })
        it('Should verify that user is able to enter password in Password field', () => {
            Auth.EnterPasswordtoRegister()
            .type('123456')
        })
        it('Should verify that if user enter wrong confirm password the textbox will be in red color', () => {
            Auth.ConfirmPassword()
            .type('1256')
        })
        it('Should verify that user is able to retype password in confirm passwordfield', () => {
            Auth.ConfirmPassword()
            .clear()
            .type('123456')
        })
        it('Should verify that user is able to click on Agree to Terms & Conditions checkbox', () => {
            Auth.ClickAgree()
            .click()
        })
        it('Should verify that user is able to click on Login link that will redirect user to login page', () => {
            Auth.ClickonLoginlink()
            .click()
            cy.go('back')
            cy.go('back')
        })
    })
    //Forget Password
    context('Request password feature from Authentication Feature', () => {
        it('Should verify that sidebar toggles is open', () => {
            Auth.Clicksidebartoggle()
            .click()
        })
        it('Should verify that user is able to click on Request password Feature', () => {
            Auth.ClickRequestpassword()
            .click()
        })
        it('Should verify that user is able to enter email in Email Address field', () => {
            Auth.ClickForgetEmail()
            .type('sidra123@gmail.com')
        })
        it('Should verify that user is able to click on Register link that will redirect user to Reister page', () => {
            Auth.ClickonForgetRegisterlink()
            .click()
            cy.go('back')
        })
        it('Should verify that user is able to click on Back to Log In link that will redirect user to login page', () => {
            Auth.ClickonForgetLoginlink()
            .click()
            cy.go('back')
            cy.go('back')
        })
    })
    //Change password
    context('Reset Password feature from Authentication Feature', () => {
        it('Should verify that sidebar toggles is open', () => {
            Auth.Clicksidebartoggle()
            .click()
        })
        it('Should verify that user is able to click on Reset Password Feature', () => {
            Auth.Clickresetpassword()
            .click()
        })
        it('Should verify that user is able to enter password in new password field', () => {
            Auth.ClickChangePassword()
            .type('123456')
        })
        it('Should verify that user is able to enter confirm password in Confirm Password field', () => {
            Auth.ClickConfirmPassword()
            .type('123456')
        })
        it('Should verify that user is able to click on Register link that will redirect user to Reister page', () => {
            Auth.ClickonRessetRegisterlink()
            .click()
            cy.go('back')
        })
        it('Should verify that user is able to click on Back to Log In link that will redirect user to login page', () => {
            Auth.ClickonRessetLoginlink()
            .click()
            cy.go('back')
            cy.go('back')
        })
    })
})
