class LayoutFeatures{

    ClickLayout(){
        return cy.contains('Layout')
    }

    //Click on Stepper
    ClickStepper(){
        return cy.contains('Stepper')
    }
    //In Stepper 1
    ClickNext1(){
        return cy.get('[test-id="next1"]')
    }
    ClickNext2(){
        return cy.get('[test-id="next2"]')
    }
    ClickNext3(){
        return cy.get('[test-id="next3"]')
    }
    ClickPrev2(){
        return cy.get('[test-id="prev2"]')
    }
    ClickPrev3(){
        return cy.get('[test-id="prev3"]')
    }
    ClickPrev4(){
        return cy.get('[test-id="prev4"]')
    }

    //In Stepper 2

    Enteryourname(){
        return cy.get('[test-id="EnterName"]')
    }
    EnterfavMovie(){
        return cy.get('[test-id="EnterMovie"]')
    }
    EnterSomething(){
        return cy.get('[test-id="EnterSomething"]')
    }
    ClickNameNext(){
        return cy.get('[test-id="next5"]')
    }
    ClickMovieNext(){
        return cy.get('[test-id="next6"]')
    }
    ClickConfirmSomething(){
        return cy.get('[test-id="confirm"]')
    }
    ClickPrevName(){
        return cy.get('[test-id="prev5"]')
    }
    ClickPrevMovie(){
        return cy.get('[test-id="prev6"]')
    }
    ClickonAgain(){
        return cy.get('[test-id="tryagain"]')
    }
    //In Stepper 3
    ClickFirstNext(){
        return cy.get('[test-id="next7"]')
    }
    ClickSecondNext(){
        return cy.get('[test-id="next8"]')
    }
    ClickThirdNext(){
        return cy.get('[test-id="next9"]')
    }
    ClickSecondPrev(){
        return cy.get('[test-id="prev8"]')
    }
    ClickThirdPrev(){
        return cy.get('[test-id="prev9"]')
    }
    ClickForthPrev(){
        return cy.get('[test-id="prev10"]')
    }

    //Click on Accordion
    ClickAccordion(){
        return cy.contains('Accordion')
    }
    Clicksidebartoggle(){
        return cy.get('[test-id="sidebar"]')
    }
    ClickToggleFirstbutton(){
        return cy.contains('button','Toggle First Item')
        // .contains('button','Toggle First Item')
    }
    ClickProductDetail(){
        return cy.get('[test-id="Product"]')
    }
    ClickReview(){
        return cy.get('[test-id="Review"]')
    }
    ClickEdit(){
        return cy.get('[test-id="Edit"]')
    }
    ClickProductDropdown(){
        return cy.get('[test-id="Product2"]')
    }
    ClickReviewDropdown(){
        return cy.get('[test-id="reviews2"]')
    }
    ClickEditDropdown(){
        return cy.get('[test-id="edit2"]')
    }



}
export default LayoutFeatures