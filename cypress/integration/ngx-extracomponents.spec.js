import ExtraComponentsFeatures from "./ngx-extra-components-locators"; 

describe('NGX Admin Extra Components Feature', () => {
    const Component = new ExtraComponentsFeatures();

    before(() => {
        cy.visit('http://localhost:4200/')
    })
    context('Calendar feature from Extra Components', () => {
        it('Should verify that sidebar toggles is open', () => {
            Component.Clicksidebartoggle()
            .click()
        })
        it('Should verify that Modal and Overlays Feature is clickable', () => {
            Component.ClickExtraComponents()
            .click()
        })
        //ClickCalendar
        it('Should verify that Dialog Feature is clickable under Extra Components', () => {
            Component.ClickCalendar()
            .click()
        })
        it('Should verify that sidebar toggles is closed', () => {
            Component.Clicksidebartoggle()
            .click()
        })
        it('Should verify that user is able to click on calendar button', () => {
            Component.ClickCalendarbutton()
            .click()
        })
        it('Should verify that user is able to Select 2021 Year', () => {
            Component.Click2021year()
            .click()
        })
        it('Should verify that user is able to Select Jan Month', () => {
            Component.ClickJanMonth()
            .click()
        })
        it('Should verify that user is able to Select 23 Date', () => {
            Component.Click23Date()
            .click()
        })
        // it('Should verify that user is able to Select 23 Date', () => {
        //     Component.SelectedRange()
        //     .click()
        // })
        it('Should verify that user is able to click on calendar button', () => {
            Component.ClickCalendarbutton()
            .click()
        })
        it('Should verify that user is able to Select 2012 Year', () => {
            Component.Click2012year()
            .click()
        })
        it('Should verify that user is able to Select Jun Month', () => {
            Component.ClickJunMonth()
            .click()
        })
        it('Should verify that user is able to Select 12 Date', () => {
            Component.Click12Date()
            .click()
        })
        it('Should verify that user is able to click on calendar button', () => {
            Component.ClickCalendarbutton()
            .click()
        })
        it('Should verify that user is able to Select 2022 Year', () => {
            Component.Click2022year()
            .click()
        })
        it('Should verify that user is able to Select Jan Month', () => {
            Component.ClickJunMonth()
            .click()
        })
        it('Should verify that user is able to Select 23 Date', () => {
            Component.Click23Date()
            .click()
        })
    })
})