import FormsFeatures from "/home/dev/Desktop/Auto-ngx/cypress/integration/ngx-Forms-locators.js"; 

describe('NGX Admin Layout Feature', () => {
    const Form = new FormsFeatures();

    before(() => {
        cy.visit('http://localhost:4200/')
    })

    context('Click on Forms', () => {
        it('Should verify the Forms feature is clickable', () => {
            Form.ClickForms()
            .click()
        })
    })
    context('Click on Form Layouts', () => {
        it('Should verify that Form Layouts are clickable', () => {
            Form.ClickFormLayouts()
            .click()
        })
        it('Should verify that sidebar toggle will be closed', () => {
            Form.Clicksidebartoggle()
            .click()
        })
        //Inline Form
        it('Should verify that user is able to Enter Name in Name field of Inline Form', () => {
            Form.ClickEnterName()
            .type('Sidra')
        })
        it('Should verify that user is able to Enter Email in Email field of Inline Form', () => {
            Form.ClickEnterEmail()
            .type('Sidra123@gmail.com')
        })
        it('Should verify that remember me checkbox is clickable or not', () => {
            Form.ClickCheckboxRememberme1()
            .click()
        })
        it('Should verify that submit button is clickable or not', () => {
            Form.ClickSubmitbutton1()
            .click()
        })
        //Using the Grid
        it('Should verify that user is able to Enter Email in Emai field of Using the Grid form', () => {
            Form.ClickAddEmail()
            .type('Sidra123@gmail.com')
        })
        it('Should verify that user is able to Enter Password in Password field of Using the Grid form', () => {
            Form.ClickAddPassword()
            .type('123456')
        })
        it('Should verify that Option1 Radio button is clickable or not', () => {
            Form.ClickOption1()
            .click()
        })
        it('Should verify that Option2 Radio button is clickable or not', () => {
            Form.ClickOption2()
            .click()
        })
        it('Should verify that Diabled Option Radio button should not be clickable', () => {
            Form.ClickDiabledOption()
            .click()
        })
        it('Should verify that SignIn button is clickable or not', () => {
            Form.ClickSignInbutton()
            .click()
        })
        //Basic form
        it('Should verify that user is able to Enter Email in Email field of Basic Form', () => {
            Form.ClickAddEmail2()
            .type('Sidra123@gmail.com')
        })
        it('Should verify that user is able to Enter Password in Password field of Basic Form', () => {
            Form.ClickAddPassword2()
            .type('123456')
        })
        it('Should verify that user is able to click on Check me Out', () => {
            Form.ClickCheckmeOut()
            .click()
        })
        it('Should verify that user is able to click on Submit button of Basic form', () => {
            Form.ClickSubmitbutton2()
            .click()
        })
        //Form without labels
        it('Should verify that user is able to add Recipients name in Recipients field of Form without labels', () => {
            Form.ClickAddRecipients()
            .type('Sidra')
        })
        it('Should verify that user is able to add Subject in Subject field of Form without labels', () => {
            Form.ClickAddSubject()
            .type('Cypress')
        })
        it('Should verify that user is able to add message in Message field of Form without labels', () => {
            Form.Clickaddmessage()
            .type('Cypress Automation')
        })
        it('Should verify that user is able to click on Send button of Form without labels', () => {
            Form.ClickSendbutton()
            .click()
        })
        //Block form
        it('Should verify that user is able to add First name in First Name field of Block Form', () => {
            Form.ClickAddFirstName()
            .type('Sidra')
        })
        it('Should verify that user is able to add Last Name in Last Name field of Block Form', () => {
            Form.ClickAddLastName()
            .type('Mushtaq')
        })
        it('Should verify that user is able to add Email in Email field of Block Form', () => {
            Form.ClickAddEmail()
            .type('Sidra123@gmail.com')
        })
        it('Should verify that user is able to add Website Name in Website field of Block Form', () => {
            Form.ClickAddWebsiteName()
            .type('Cypress')
        })
        it('Should verify that user is able to click on Send button of Block Form', () => {
            Form.ClickonSubmitbutton3()
            .click()
        })
        //Horizontal form
        it('Should verify that user is able to add Email in Email field of Horizontal form', () => {
            Form.ClickAddEmail3()
            .type('Sidra123@gmail.com')
        })
        it('Should verify that user is able to add Password in password field of Horizontal form', () => {
            Form.ClickAddPassword3()
            .type('Cypress')
        })
        it('Should verify that user is able to click on remember me checkbox of Horizontal form', () => {
            Form.ClickCheckboxRememberme2()
            .type('Cypress Automation')
        })
        it('Should verify that user is able to click on SignIn button of Horizontal form', () => {
            Form.ClickSigninbutton2()
            .click()
        })
    
    context('Click on Form Layouts', () => {
        it('Should verify that sidebar toggle will be Opened', () => {
            Form.Clicksidebartoggle()
            .click()
        })
        it('Should verify that Datepicker is clickable', () => {
            Form.ClickDatepicker()
            .click()
        })
        it('Should verify that sidebar toggle will be closed', () => {
            Form.Clicksidebartoggle()
            .click()
        })
        it('Should verify that user is able to click on Form picker from Common date picker', () => {
            Form.ClickCommonDatepicker()
            .click()
        })
        // it('Should verify that user is able to click on back button of calendar Form picker from Common date picker', () => {
        //     Form.Clickbackbutton()
        //     .click()
        // })
        // it('Should verify that Datepicker is clickable', () => {
        //     Form.clicknextbutton()
        //     .click()
        // })
        it('Should verify that user is able to click on particular date from calendar in common date picker', () => {
            Form.ClickonDate()
            .click()
        })
        it('Should verify that user is able to click on Range picker from Datepicker With Range', () => {
            Form.ClickRangePicker()
            .click()
        })
        it('Should verify that user is able to click on particular range date1 from calendar in Datepicker With Range', () => {
            Form.ClickonDateRange1()
            .click()
        })
        it('Should verify that user is able to click on particular range date2 from calendar in Datepicker With Range', () => {
            Form.ClickonDateRange2()
            .click()
        })
        it('Should verify that user is able to click on Min/Max picker from Datepicker With Disabled Min Max Values', () => {
            Form.ClickMinMaxPicker()
            .click()
        })
        it('Should verify that user is able to click on Max date from calendar in Datepicker With Disabled Min Max Values', () => {
            Form.ClickonMaxDate()
            .click()
        })
    })
})
})
