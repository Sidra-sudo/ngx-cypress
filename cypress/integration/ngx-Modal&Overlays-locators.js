class ModalOverlaysFeatures{

    ClickModalLayout(){
        return cy.contains('Modal & Overlays')
    }

    //Click on Dialog
    ClickDialog(){
        return cy.contains('Dialog')
    }
    Clicksidebartoggle(){
        return cy.get('[test-id="sidebar"]')
    }
    ClickOpenDialogwithComponent(){
        return cy.get('[test-id="dialog-comp1"]')
    }
    ClickDismissDialog(){
        return cy.get('[test-id="Dismiss"]')
    }
    ClickCloseDialog(){
        return cy.get('[test-id="close"]')
    }
    ClickOpenDialogwithTemplte(){
        return cy.get('[test-id="dialog-temp1"]')
    }
    ClickOpenDialogwithbackdrop(){
        return cy.get('[test-id="dialog-backdrop1"]')
    }
    ClickOpenDialogwithoutbackdrop(){
        return cy.get('[test-id="dialog-backdrop2"]')
    }
    ClickOpenDialogwithESCClose(){
        return cy.get('[test-id="dialog-esc1"]')
    }
    ClickOpenDialogwithoutESCClose(){
        return cy.get('[test-id="dialog-esc2"]')
    }
    ClickOpenDialogwithBackdropClick(){
        return cy.get('[test-id="dialog-click1"]')
    }
    ClickOpenDialogwithoutBackdropClick(){
        return cy.get('[test-id="dialog-click2"]')
    }
    ClickEnterNamebutton(){
        return cy.get('[test-id="enter-name"]')
    }
    ClickAddName(){
        return cy.get('[test-id="name"]')
    }
    ClickSubmitbutton(){
        return cy.get('[test-id="submit"]')
    }
    ClickCancelbutton(){
        return cy.get('[test-id="cancel"]')
    }
    //Window
    ClickWindow(){
        return cy.contains('Window')
    }
    ClickOpenWindowForm(){
        return cy.get('[test-id="windowform"]')
    }
    ClickAddSubject(){
        return cy.get('#subject')
    }
    ClickAddText(){
        return cy.get('#text')
    }
    ClickCollapse(){
        return cy.get('nb-icon[icon="collapse-outline"]')
    }
    ClickMinimize(){
        return cy.get('nb-icon[icon="minus-outline"]')
    }
    ClickESCKey(){
        return cy.get('nb-icon[icon="close-outline"]')
    }
    ClickOpenwindowwithtemplate(){
        return cy.get('[test-id="windowtemplate"]')
    }
    ClickOpenWindowwithBackdrop(){
        return cy.get('[test-id="windowbackdrop1"]')
    }
    ClickOpenWindowwithoutBackdrop(){
        return cy.get('[test-id="windowbackdrop2"]')
    }
    ClickCloseButton(){
        return cy.get('nb-icon[icon="close-outline"]')
    }

     //Popover
    ClickPopover(){
        return cy.contains('Popover')
    }
    PopoverLeft(){
        return cy.get('[test-id="left"]')
    }
    PopoverTop(){
        return cy.get('[test-id="top"]')
    }
    PopoverBottom(){
        return cy.get('[test-id="bottom"]')
    }
    PopoverRight(){
        return cy.get('[test-id="right"]')
    }
    PopoveronClick(){
        return cy.get('[test-id="click"]')
    }
    PopoveronHover(){
        return cy.get('[test-id="hover"]')
    }
    PopoveronHint(){
        return cy.get('[test-id="hint"]')
    }
    TemplatepopoverwithTabs(){
        return cy.get('[test-id="tab1"]')
    }
    ClickonSecondTab(){
        return cy.contains('Second Tab')
    }
    ClickonWhatsup(){
        return cy.contains('Whats up?')
    }
    TemplatepopoverwithForm(){
        return cy.get('[test-id="form1"]')
    }
    TemplateFormRecipients(){
        return cy.get('[test-id="recipients"]')
    }
    TemplateFormSubject(){
        return cy.get('[test-id="subject"]')
    }
    TemplateFormMessage(){
        return cy.get('[test-id="message"]')
    }
    TemplateFormSendbutton(){
        return cy.get('[test-id="send"]')
    }
    TemplatepopoverwithCard(){
        return cy.get('[test-id="card1"]')
    }
    Componentpopoverwithtabs(){
        return cy.get('[test-id="tab2"]')
    }
    ComponentpopoverwithForm(){
        return cy.get('[test-id="form2"]')
    }
    ComponentpopoverwithCard(){
        return cy.get('[test-id="card2"]')
    }
    ClickonSecondTab(){
        return cy.contains('Second Tab')
    }
    ClickonWhatsup(){
        return cy.contains('Whats up?')
    }



}
export default ModalOverlaysFeatures