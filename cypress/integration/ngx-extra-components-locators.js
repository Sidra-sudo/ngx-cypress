import { retry } from "rxjs-compat/operator/retry"

class ExtraComponentsFeatures{

    ClickExtraComponents(){
        return cy.contains('Extra Components')
    }

    //Click on Calendar
    ClickCalendar(){
        return cy.contains('Calendar')
    }
    Clicksidebartoggle(){
        return cy.get('[test-id="sidebar"]')
    }
    ClickCalendarbutton(){
        return cy.contains(' May 2022 ')
    }
    Click2021year(){
        return cy.contains('2021')
    }
    ClickJanMonth(){
        return cy.contains('Jan')
    }
    Click23Date(){
        return cy.contains('23')
    }
    SelectedRange(){
        return cy.get('test-id="selectRange"')
    }
    Click2012year(){
        return cy.contains('2012')
    }
    ClickJunMonth(){
        return cy.contains('Jun')
    }
    Click12Date(){
        return cy.contains('12')
    }
    Click2022year(){
        return cy.contains('2022')
    }
    SelectDate(){
        return cy.contains(' Selected date: Apr 14, 2021 ')
    }
    SelectdateinRange(){
        return cy.contains(' Selected range: Jan 23, 2000 - Jan 23, 2022 ')
    }
    Clickondate(){
        return cy.contains(' Selected date: May 17, 2022 ')
    }


}
export default ExtraComponentsFeatures