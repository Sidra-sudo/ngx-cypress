 /// <reference types="cypress"/>

describe('Our first suite',() => {

    it('Header-Container',() => { 

        cy.visit('http://localhost:4200/')
    
        //Click on profile
        cy.get('[class="user-picture image ng-star-inserted"]').click()
        cy.contains('Profile').click()
        cy.get('[class="user-picture image ng-star-inserted"]').click()
        cy.contains('Log out').click()
        cy.get('[data-name="search"]').click()
        cy.get('[class="search-input"]').type('Hello, World')
        cy.get('[data-name="close"]').click()
        cy.get('[class="sidebar-toggle"]').click()
    })

    it('Layout Feature',() => {
        cy.contains('Layout').click()
        cy.contains('Stepper').click()
        cy.get('[test-id="next1"]').click()
        cy.contains('Accordion').click()
    })

    it('Forms Feature',() => {
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()
        cy.contains('Datepicker').click()

    })

    it('Modal & Overlays',() => {
        cy.contains('Modal & Overlays').click()
        cy.contains('Dialog').click()
        cy.contains('Window').click()
        cy.contains('Popover').click()
        cy.contains('Toastr').click()
        cy.contains('Tooltip').click()
        cy.contains('Modal & Overlays').click()

    })

    it('Extra Components',() => {
        cy.contains('Extra Components').click()
        cy.contains('Calendar').click()
        cy.contains('Extra Components').click()

    })

    it('Tables & Data',() => {
        cy.contains('Tables & Data').click()
        cy.contains('Smart Table').click()
        cy.contains('Tree Grid').click()

    })

    it('Authentication features',() => {
        // cy.visit('http://localhost:4200/')
        cy.contains('Auth').click()
        cy.contains('Login').click()
        cy.go('back')
        cy.contains('Auth').click()
        cy.contains('Auth').click()
        cy.contains('Register').click()
        cy.go('back')
        cy.contains('Auth').click()
        cy.contains('Auth').click()
        cy.contains('Login').click()
        cy.go('back')
        cy.contains('Auth').click()
        cy.contains('Auth').click()
        cy.contains('Request Password').click()
        cy.go('back')
        cy.contains('Auth').click()
        cy.contains('Auth').click()
        cy.contains('Reset Password').click()
        cy.go('back')

    })
    //     cy.contains('Forms').click()
    //     cy.contains('Form Layouts').click()

        //By test data Ids
        // cy.get('[data-cy="imputEmail1"]').text('sidra')
        // cy.get('[data-cy="signin button"]')
        // cy.contains('Sign in')
        // cy.contains('[status="warning"],Sign in')

        // cy.get('#inputEmail3')
        //   .parents('form')
        //   .find('button')
        //   .should('contain','Sign in')
        //   .parents('form')
        //   .find('nb-checkbox')
        // cy.click()

        // cy.contains('nb-card','Horizontal form').find('[type="email"]')


        it.only('Run this test first', () => {
            cy.visit('/')
            cy.contains('Modal and Overlays').click()
        })


    
//

})
