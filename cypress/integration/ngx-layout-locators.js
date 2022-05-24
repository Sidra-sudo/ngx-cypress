class LayoutFeatures{

    ClickLayout(){
        return cy.get('Layout')
    }
    ClickStepper(){
        return cy.get('Stepper')
    }
    //In Stepper 1
    ClickNext1(){
        return cy.get('#next1')
    }
    ClickNext2(){
        return cy.get('#next2')
    }
    ClickNext3(){
        return cy.get('#next3')
    }
    ClickPrev2(){
        return cy.get('#prev2')
    }
    ClickPrev3(){
        return cy.get('#prev3')
    }
    ClickPrev4(){
        return cy.get('#prev4')
    }

    //In Stepper 2

    Enteryourname(){
        return cy.get('#EnterName')
    }
    EnterfavMovie(){
        return cy.get('#EnterMovie')
    }
    EnterSomething(){
        return cy.get('#EnterSomething')
    }
    ClickNameNext(){
        return cy.get('#next5')
    }
    ClickMovieNext(){
        return cy.get('#next6')
    }
    ClickConfirmSomething(){
        return cy.get('#confirm')
    }
    ClickPrevName(){
        return cy.get('#prev5')
    }
    ClickPrevMovie(){
        return cy.get('#prev6')
    }
    ClickonAgain(){
        return cy.get('#tryagain')
    }
    ProfitCardHeading(){
        return cy.contains('span', 'Profit')
    }

    //In Stepper 3
    ClickFirstNext(){
        return cy.get('#next7')
    }
    ClickSecondNext(){
        return cy.get('#next8')
    }
    ClickThirdNext(){
        return cy.get('#next9')
    }
    ClickSecondPrev(){
        return cy.get('#prev8')
    }
    ClickThirdPrev(){
        return cy.get('#prev9')
    }
    ClickForthPrev(){
        return cy.get('#prev10')
    }


}
export default LayoutFeatures