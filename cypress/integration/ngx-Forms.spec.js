import FormsFeatures from "/home/dev/Desktop/Auto-ngx/cypress/integration/ngx-Forms-locators.js"; 

describe('NGX Admin Layout Feature', () => {
    const Form = new FormsFeatures();

    before(() => {
        cy.visit('http://localhost:4200/')
    })

    context('Layout Stepper1', () => {
        it('Should verify the layout feature is clickable', () => {
            Layout.ClickLayout()
            .click()
        })
    }
})
