class FormsFeatures{

    ClickForms(){
        return cy.contains('Forms')
    }

    //Click on Form Layouts
    ClickFormLayouts(){
        return cy.contains('Form Layouts')
    }
    Clicksidebartoggle(){
        return cy.get('[test-id="sidebar"]')
    }
    //Inline form
    ClickEnterName(){
        return cy.get('[test-id="Entername"]')
    }
    ClickEnterEmail(){
        return cy.get('[test-id="Email"]')
    }
    ClickCheckboxRememberme1(){
        return cy.get('[test-id="remember1"]')
    }
    ClickSubmitbutton1(){
        return cy.get('[test-id="submitbtn1"]')
    }
    //Using the Grid
    ClickAddEmail(){
        return cy.get('#inputEmail1')
    }
    ClickAddPassword(){
        return cy.get('#inputPassword2')
    }
    ClickOption1(){
        return cy.get('[test-id="option1"]')
    }
    ClickOption2(){
        return cy.get('[test-id="option2"]')
    }
    ClickDiabledOption(){
        return cy.get('[test-id="disabled"]')
    }
    ClickSignInbutton(){
        return cy.get('[test-id="signinbtn1"]')
    }
    //Basic form
    ClickAddEmail2(){
        return cy.get('#exampleInputEmail1')
    }
    ClickAddPassword2(){
        return cy.get('#exampleInputPassword1')
    }
    ClickCheckmeOut(){
        return cy.get('[test-id="checkout"]')
    }
    ClickSubmitbutton2(){
        return cy.get('[test-id="submitbtn2"]')
    }
    //Form without labels
    ClickAddRecipients(){
        return cy.get('[test-id="recipients"]')
    }
    ClickAddSubject(){
        return cy.get('[test-id="subject"]')
    }
    Clickaddmessage(){
        return cy.get('[test-id="message"]')
    }
    ClickSendbutton(){
        return cy.get('[test-id="send-button"]')
    }
    //Block form
    ClickAddFirstName(){
        return cy.get('#inputFirstName')
    }
    ClickAddLastName(){
        return cy.get('#inputLastName')
    }
    ClickAddEmail(){
        return cy.get('#inputEmail')
    }
    ClickAddWebsiteName(){
        return cy.get('#inputWebsite')
    }
    ClickonSubmitbutton3(){
        return cy.get('#submit-btn3')
    }
    //Horizontal form
    ClickAddEmail3(){
        return cy.get('#inputEmail3')
    }
    ClickAddPassword3(){
        return cy.get('#inputPassword3')
    }
    ClickCheckboxRememberme2(){
        return cy.get('[test-id="remember2"]')
    }
    ClickSigninbutton2(){
        return cy.get('[test-id="signinbtn2"]')
    }

     //Click on Datepicker
    ClickDatepicker(){
        return cy.contains('Datepicker')
    }
    ClickCommonDatepicker(){
        return cy.get('[test-id="Form-picker"]')
    }
    Clickbackbutton(){
        return cy.get('nb-icon', 'chevron-left-outline')
    }
    clicknextbutton(){
        return cy.get('nb-icon','chevron-right')
    }
    ClickonDate(){
        return cy.get('nb-calendar-day-picker').contains('17')
    }
    ClickRangePicker(){
        return cy.get('[test-id="range-picker"]')
    }
    ClickonDateRange1(){
        return cy.get('nb-calendar-picker').contains('10')
    }
    ClickonDateRange2(){
        return cy.get('nb-calendar-picker').contains('27')
    }
    ClickMinMaxPicker(){
        return cy.get('[test-id="minmax"]')
    }
    ClickonMaxDate(){
        return cy.get('nb-calendar-picker').contains('28')
    }


}
export default FormsFeatures