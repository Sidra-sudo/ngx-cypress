import LayoutFeatures from "/home/dev/Desktop/Auto-ngx/cypress/integration/ngx-layout-locators.js"; 

describe('NGX Admin Layout Feature', () => {
    const Layout = new LayoutFeatures();

    before(() => {
        cy.visit('/')
    })
    context('Layout', () => {
        it('Should verify the layout feature is clickable', () => {
            Layout.ProfitCardPosition()
            .should('have.css', 'display')
            .and('match', /inline/)
        })
        it('Should verify the heading of the profit card', () => {
            EComCards.ProfitCardHeading()
            .should('have.text', 'Profit')
        })
        it('Should allow user to flip the profit card', () => {
            EComCards.ProfitCardFlip1()
            .click()
        })
        it('Should allow user to flip back the profit card', () => {
            EComCards.ProfitCardFlip2()
            .click()
        })
        it('Should allow user to scroll through the graph', () => {
            EComCards.ProfitStatsChart()
            .trigger('mousemove')
        })

    })
})