class FormsFeatures{

    ClickForms(){
        return cy.contains('Forms')
    }

    //Click on Form Layouts
    ClickFormLayouts(){
        return cy.contains('Form Layouts')
    }

}
export default FormsFeatures