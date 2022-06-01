import { retry } from "rxjs-compat/operator/retry"

class TablesandDataFeatures{

    ClickTablesandData(){
        return cy.contains('Tables & Data')
    }

    //Click on Smart Table
    ClickSmartTable(){
        return cy.contains('Smart Table')
    }
    Clicksidebartoggle(){
        return cy.get('[test-id="sidebar"]')
    }
    ClickonPlus(){
        return cy.get('.nb-plus')
    }
    ClicktoAddID(){
        return cy.get('input[placeholder="ID"]')
    }
    ClicktoAddFirstName(){
        return cy.get('input[placeholder="First Name"]')
    }
    ClicktoAddLastName(){
        return cy.get('input[placeholder="Last Name"]')
    }
    ClicktoAddUsername(){
        return cy.get('input[placeholder="Username"]')
    }
    ClicktoAddEmail(){
        return cy.get('input[placeholder="E-mail"]')
    }
    ClicktoAddAge(){
        return cy.get('input[placeholder="Age"]')
    }
    ClickonCheckMark(){
        return cy.get('.nb-checkmark')
    }
    ClickonID(){
        return cy.contains(' ID ')
    }
    ClickonFirstName(){
        return cy.contains(' First Name ')
    }
    ClickonLastName(){
        return cy.contains(' Last Name ')
    }
    ClickonUsername(){
        return cy.contains(' Username ')
    }
    ClickonEmail(){
        return cy.contains(' E-mail ')
    }
    ClickonAge(){
        return cy.contains(' Age ')
    }
    Clickonedit(){
        return cy.get('.nb-edit')
    }
    Clickondelete(){
        return cy.get('.nb-trash')
    }
    ClickTreeGrid(){
        return cy.contains('Tree Grid')
    }
    ClickonProjects(){
        return cy.contains(' Projects ')
    }
    ClickonReports(){
        return cy.contains(' Reports ')
    }
    ClickonOthers(){
        return cy.contains(' Other ')
    }
    ClickonSearch(){
        return cy.get('#search')
    }
    //final
}
export default TablesandDataFeatures