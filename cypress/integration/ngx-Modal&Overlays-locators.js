import { retry } from "rxjs-compat/operator/retry"

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
    EvenDebouncing1(){
        return cy.get('[test-id="hint1"]')
    }
    EvenDebouncing2(){
        return cy.get('[test-id="hint2"]')
    }
    EvenDebouncing3(){
        return cy.get('[test-id="hint3"]')
    }
    EvenDebouncing4(){
        return cy.get('[test-id="hint4"]')
    }
    EvenDebouncing5(){
        return cy.get('[test-id="hint5"]')
    }
    EvenDebouncing6(){
        return cy.get('[test-id="hint6"]')
    }
    EvenDebouncing7(){
        return cy.get('[test-id="hint7"]')
    }
    EvenDebouncing8(){
        return cy.get('[test-id="hint8"]')
    }
    EvenDebouncing9(){
        return cy.get('[test-id="hint9"]')
    }
    EvenDebouncing10(){
        return cy.get('[test-id="hint10"]')
    }
    EvenDebouncing11(){
        return cy.get('[test-id="hint11"]')
    }
    EvenDebouncing12(){
        return cy.get('[test-id="hint12"]')
    }
    EvenDebouncing13(){
        return cy.get('[test-id="hint13"]')
    }
    EvenDebouncing14(){
        return cy.get('[test-id="hint14"]')
    }
    EvenDebouncing15(){
        return cy.get('[test-id="hint15"]')
    }
    EvenDebouncing16(){
        return cy.get('[test-id="hint16"]')
    }
    //Toastr
    ClickToastr(){
        return cy.contains('Toastr')
    }
    //Toaster configuration
    ClickPoistion(){
        return cy.get('.position-select').should('have.text','top-right')   //By Linktext
    }
    Selecttopend(){
        return cy.contains('top-end')
    }
    Addtitle(){
        return cy.get('input[name="title"]')             //By name
    }
    Addcontent(){
        return cy.get('input[name="content"]')            
    }
    Timetohidetoast(){
        return cy.get('input[ng-reflect-model="2022"]')
    }
    ClickToasttype(){
        // return cy.get('nb-select[.select-button]').should('have.text','primary')
        return cy.contains('primary')
    }
    Selectwarning(){
        return cy.contains('warning')
    }
    Clicktoastcheckbox(){
        return cy.get('[test-id="hide"]')   //By Linktext
    }
    ClickonShowToast(){
        return cy.get('[test-id="show toast"]')
    }
    ClickRandomToast(){
        return cy.get('[test-id="random toast"]')
    }
    //Tooltip
    ClickTooltip(){
        return cy.contains('Tooltip')
    }
    //Tooltip With Icon
    Mouseoverontooltip1(){
        return cy.get('[test-id="show tooltip1"]')
    }
    Mouseoverontooltip2(){
        return cy.get('[test-id="show tooltip2"]')
    }
    // Tooltip Placements
    Tooltiptop(){
        return cy.get('[test-id="top"]')
    }
    Tooltipright(){
        return cy.get('[test-id="right"]')
    }
    Tooltipbottom(){
        return cy.get('[test-id="bottom"]')
    }
    Tooltiponleft(){
        return cy.get('[test-id="left"]')
    }
    //Colored Tooltips
    Tooltipdefault(){
        return cy.get('[test-id="defult"]')
    }
    Tooltipprimary(){
        return cy.get('[test-id="primary"]')
    }
    Tooltipsuccess(){
        return cy.get('[test-id="success"]')
    }
    Tooltipdanger(){
        return cy.get('[test-id="danger"]')
    }
    Tooltipinfo(){
        return cy.get('[test-id="info"]')
    }
    Tooltipwarning(){
        return cy.get('[test-id="warning"]')
    }

}
export default ModalOverlaysFeatures