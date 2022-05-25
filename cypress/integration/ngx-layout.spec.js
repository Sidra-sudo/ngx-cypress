import LayoutFeatures from "/home/dev/Desktop/Auto-ngx/cypress/integration/ngx-layout-locators.js"; 

describe('NGX Admin Layout Feature', () => {
    const Layout = new LayoutFeatures();

    before(() => {
        cy.visit('http://localhost:4200/')
    })
    context('Layout Stepper1', () => {
        it('Should verify the layout feature is clickable', () => {
            Layout.ClickLayout()
            .click()
        })
        it('Should verify Stepper is under Layout is clickable', () => {
            Layout.ClickStepper()
            .click()
        })
        it('Should allow user to click on Next button from First Step', () => {
            Layout.ClickNext1()
            .click()
        })
        it('Should allow user to click on Next button from Second Step', () => {
            Layout.ClickNext2()
            .click()
        })
        it('Should allow user to click on Next button from Third Step', () => {
            Layout.ClickNext3()
            .click()
        })
        it('Should allow user to click on Prev button from Forth Step', () => {
            Layout.ClickPrev4()
            .click()
        })
        it('Should allow user to click on Prev button from Third Step', () => {
            Layout.ClickPrev3()
            .click()
        })
        it('Should allow user to click on Prev button from Second Step', () => {
            Layout.ClickPrev2()
            .click()
        })

    context('Layout Stepper2', () => {
            it('Should verify that user is able to Enter Name in Name field', () => {
                Layout.Enteryourname()
                .type('Sidra')
            })
            it('Should verify that user is able to click on Next button after entering Name', () => {
                Layout.ClickNameNext()
                .click()
            })
            it('Should verify that user is able to Enter Movie Name in Movie field', () => {
                Layout.EnterfavMovie()
                .type('Movie:XYZ')
            })
            it('Should verify that user is able to click on Next button after entering Movie Name', () => {
                Layout.ClickMovieNext()
                .click()
            })
            it('Should verify that user is able to Enter Something in text field', () => {
                Layout.EnterSomething()
                .type('Hello, World')
            })
            it('Should verify that user is able to click on sidebar toggle to close list of features', () => {
                Layout.Clicksidebartoggle()
                .click()
            })
            it('Should verify that user is able to click on Prev button after entering Something', () => {
                Layout.ClickPrevMovie()
                .click()
            })
            it('Should verify that user is able to click on Prev button From Movie Step', () => {
                Layout.ClickPrevName()
                .click()
            })
            it('Should verify that user is able to click on Next button From Name Step', () => {
                Layout.ClickNameNext()
                .click()
            })
            it('Should verify that user is able to click on Next button From Movie Step', () => {
                Layout.ClickMovieNext()
                .click()
            })
            it('Should verify that user is able to click on Confirm button From Last Step', () => {
                Layout.ClickConfirmSomething()
                .click()
            })
            it('Should verify that user is able to click on Try Again button when Wizard completed!', () => {
                Layout.ClickonAgain()
                .click()
            })
    })
    context('Layout Stepper3', () => {
        it('Should allow user to click on Next button from First Step', () => {
            Layout.ClickFirstNext()
            .click()
        })
        it('Should allow user to click on Next button from Second Step', () => {
            Layout.ClickSecondNext()
            .click()
        })
        it('Should allow user to click on Next button from Third Step', () => {
            Layout.ClickThirdNext()
            .click()
        })
        it('Should allow user to click on Prev button from Forth Step', () => {
            Layout. ClickForthPrev()
            .click()
        })
        it('Should allow user to click on Prev button from Third Step', () => {
            Layout.ClickThirdPrev()
            .click()
        })
        it('Should allow user to click on Prev button from Second Step', () => {
            Layout.ClickSecondPrev()
            .click()
        })
    })

    //Go to Accordion
    context('Click on Accordion', () => {
        it('Should verify that user is able to click on sidebar toggle to close list of features', () => {
            Layout.Clicksidebartoggle()
            .click()
        })
        it('Should verify that user is able to click on Accordion from Layout dropdown', () => {
            Layout.ClickAccordion()
            .click()
        })
        it('Should verify that user is able to click on sidebar toggle to close list of features', () => {
            Layout.Clicksidebartoggle()
            .click()
        })
        it('Should verify that user is able to click on Toggle First button from Accordion', () => {
            Layout.ClickToggleFirstbutton()
            .should('contain','Toggle First Item')
            .click()
        })
        it('Should verify that user is able to click on Product Detail button from Left Toggle', () => {
            Layout.ClickProductDetail()
            .click()
        })
        it('Should verify that user is able to click on Review button from Left Toggle', () => {
            Layout.ClickReview()
            .click()
        })
        it('Should verify that user is able to click on Edit button from Left Toggle', () => {
            Layout.ClickEdit()
            .click()
        })
        it('Should verify that user is able to click on Product Detail button from Right Toggle', () => {
            Layout.ClickProductDropdown()
            .click()
        })
        it('Should verify that user is able to click on Review button from Right Toggle', () => {
            Layout.ClickReviewDropdown()
            .click()
        })
        it('Should verify that user is able to click on Edit button from Right Toggle', () => {
            Layout.ClickEditDropdown()
            .click()
        })
    })
})
})