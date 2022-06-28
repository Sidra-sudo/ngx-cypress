import TablesandDataFeatures from "/home/dev/Desktop/Auto-ngx/cypress/integration/ngx-tablesdata-locators.js"; 

describe('NGX Admin Tables and Data Feature', () => {
    const Table = new TablesandDataFeatures();

    before(() => {
        cy.visit('http://localhost:4200/')
    })
    context('Smart Tables feature from Tables & Data Feature', () => {
        it('Should verify that sidebar toggles is open', () => {
            Table.Clicksidebartoggle()
            .click()
        })
        it('Should verify that Tables & Data Feature is clickable', () => {
            Table.ClickTablesandData()
            .click()
        })
        //ClickCalendar
        it('Should verify that Smart Table Feature is clickable under Tables & Data', () => {
            Table.ClickSmartTable()
            .click()
        })
        it('Should verify that sidebar toggle is closed', () => {
            Table.Clicksidebartoggle()
            .click()
        })
        it('Should verify that ID is clickable and sorting IDs column', () => {
            Table.ClickonID()
            .click()
        })
        it('Should verify that ID is clickable and sorting IDs column from ascending to decending', () => {
            Table.ClickonID()
            .click()
        })
        it('Should verify that ID is clickable and sorting IDs column from descending to ascending', () => {
            Table.ClickonID()
            .click()
        })
        it('Should verify that FirstName is clickable and sorting FirstName', () => {
            Table.ClickonFirstName()
            .click()
        })
        it('Should verify that FirstName is clickable and sorting FirstName column from ascending to decending', () => {
            Table.ClickonFirstName()
            .click()
        })
        it('Should verify that FirstName is clickable and sorting FirstName column from descending to ascending', () => {
            Table.ClickonFirstName()
            .click()
        })
        it('Should verify that LastName is clickable and sorting LastName', () => {
            Table.ClickonLastName()
            .click()
        })
        it('Should verify that LastName is clickable and sorting LastName column from ascending to decending', () => {
            Table.ClickonLastName()
            .click()
        })
        it('Should verify that LastName is clickable and sorting LastName column from descending to ascending', () => {
            Table.ClickonLastName()
            .click()
        })
        it('Should verify that Username is clickable and sorting Username', () => {
            Table.ClickonUsername()
            .click()
        })
        it('Should verify that Username is clickable and sorting Username column from ascending to decending', () => {
            Table.ClickonUsername()
            .click()
        })
        it('Should verify that Username is clickable and sorting Username column from descending to ascending', () => {
            Table.ClickonUsername()
            .click()
        })
        it('Should verify that Email is clickable and sorting Email', () => {
            Table.ClickonEmail()
            .click()
        })
        it('Should verify that Email is clickable and sorting Email column from ascending to decending', () => {
            Table.ClickonEmail()
            .click()
        })
        it('Should verify that Email is clickable and sorting Email column from descending to ascending', () => {
            Table.ClickonEmail()
            .click()
        })
        it('Should verify that Age is clickable and sorting Age', () => {
            Table.ClickonAge()
            .click()
        })
        it('Should verify that Age is clickable and sorting Age column from ascending to decending', () => {
            Table.ClickonAge()
            .click()
        })
        it('Should verify that Age is clickable and sorting Age column from descending to ascending', () => {
            Table.ClickonAge()
            .click()
        })
        it('Should verify that user is able to click on + button under action', () => {
            Table.ClickonPlus()
            .click()
        })
        it('Should verify that user is able to Enter ID and add ID in ID field', () => {
            Table.ClicktoAddID()
            .eq(0)
            .type('01')
        })
        it('Should verify that user is able to FirstName and add FirstName in FirstName field', () => {
            Table.ClicktoAddFirstName()
            .eq(1)
            .type('Sidra')
        })
        it('Should verify that user is able to LastName and add LastName in LastName field', () => {
            Table.ClicktoAddLastName()
            .eq(1)
            .type('Mushtaq')
        })
        it('Should verify that user is able to Enter Username and add Username in Username field', () => {
            Table.ClicktoAddUsername()
            .eq(1)
            .type('SidraMushtaq')
        })
        it('Should verify that user is able to Enter Email and add Email in Email field', () => {
            Table.ClicktoAddEmail()
            .eq(1)
            .type('Sidra@gmail.com')
        })
        it('Should verify that user is able to Enter Age and add Age in Age field', () => {
            Table.ClicktoAddAge()
            .eq(1)
            .type('abc')
        })
        it('Should verify that user is able to click on check mark', () => {
            Table.ClickonCheckMark()
            .click()
        })
        it('Should verify that user is able to click on check mark', () => {
            Table.Clickonedit()
            .eq(1)
            .click()
        })
        it('Should verify that user is able to Enter ID and add ID in ID field', () => {
            Table.ClicktoAddID()
            .eq(1)
            .type('01')
        })
        it('Should verify that user is able to click on check mark', () => {
            Table.ClickonCheckMark()
            .click()
        })
        it('Should verify that user is able to click on check mark', () => {
            Table.Clickondelete()
            .eq(1)
            .click()
        })
        it('Should verify that user is able to search Username by keywords', () => {
            Table.ClicktoAddUsername()
            .type('J')
        })
        it('Should verify that user is able to clear ID', () => {
            Table.ClicktoAddID()
            .eq(0)
            .clear()
        })
                                         
    })
    context('Tree Grid feature from Tables & Data Feature', () => {
        it('Should verify that sidebar toggles is open', () => {
            Table.Clicksidebartoggle()
            .click()
        })
        it('Should verify that Smart Table Feature is clickable under Tables & Data', () => {
            Table.ClickTreeGrid()
            .click()
        })
        it('Should verify that sidebar toggle is closed', () => {
            Table.Clicksidebartoggle()
            .click()
        })
        it('Should verify that user is able to click on project and rows will be expand', () => {
            Table.ClickonProjects()
            .click()
            cy.wait(1000)
        })
        it('Should verify that user is able to click on Reports and rows will be expand', () => {
            Table.ClickonReports()
            .click()
            cy.wait(1000)
        })
        it('Should verify that user is able to click on Others and rows will be expand', () => {
            Table.ClickonOthers()
            .click()
            cy.wait(1000)
        })
        //circlci
        it('Should verify that user is able to click on search', () => {
            Table.ClickonSearch()
            .type('project')
        })
    })
})