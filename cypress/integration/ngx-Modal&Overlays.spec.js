import ModalOverlaysFeatures from "/home/dev/Desktop/Auto-ngx/cypress/integration/ngx-Modal&Overlays-locators.js"; 

describe('NGX Admin Modal & Overlays Feature', () => {
    const Modal = new ModalOverlaysFeatures();

    before(() => {
        cy.visit('http://localhost:4200/')
    })
    context('Modal and Overlays', () => {
        it('Should verify that Modal and Overlays Feature is clickable', () => {
            Modal.ClickModalLayout()
            .click()
        })
        //ClickDialog
        it('Should verify that Dialog Feature is clickable under Modal and Overlays', () => {
            Modal.ClickDialog()
            .click()
        })
        it('Should verify that sidebar toggles is closed', () => {
            Modal.Clicksidebartoggle()
            .click()
        })
        //Open Dialog
        it('Should verify that user is able to click on Open Dialog with Component', () => {
            Modal.ClickOpenDialogwithComponent()
            .click()
        })
        it('Should verify that user is able to click on Dismiss dialog to dismiss dialog with component card', () => {
            Modal.ClickDismissDialog()
            .click()
        })
        it('Should verify that user is able to click on Open Dialog with Template', () => {
            Modal.ClickOpenDialogwithTemplte()
            .click()
        })
        it('Should verify that user is able to click on Close dialog to close dialog with component card', () => {
            Modal.ClickCloseDialog()
            .click()
        })
        //Open Without Backdrop
        it('Should verify that user is able to click on Open Dialog with Backdrop', () => {
            Modal.ClickOpenDialogwithbackdrop()
            .click()
        })
        it('Should verify that user is able to click on Dismiss dialog to dismiss dialog with Backdrop card', () => {
            Modal.ClickDismissDialog()
            .click()
        })
        it('Should verify that user is able to click on Open Dialog without Backdrop', () => {
            Modal.ClickOpenDialogwithoutbackdrop()
            .click()
        })
        it('Should verify that user is able to click on Close dialog to close dialog without Backdrop card', () => {
            Modal.ClickCloseDialog()
            .click()
        })
        //Open Without Esc Close
        it('Should verify that user is able to click on Open Dialog with ESC Close', () => {
            Modal.ClickOpenDialogwithESCClose()
            .click()
        })
        it('Should verify that user is able to click on Dismiss dialog to dismiss dialog with ESC Close card', () => {
            Modal.ClickDismissDialog()
            .click()
        })
        it('Should verify that user is able to click on Open Dialog without ESC Close', () => {
            Modal.ClickOpenDialogwithoutESCClose()
            .click()
        })
        it('Should verify that user is able to click on Close dialog to close dialog without ESC Close card', () => {
            Modal.ClickCloseDialog()
            .click()
        })
        //Open Without Backdrop Click
        it('Should verify that user is able to click on Open Dialog with Backdrop Click', () => {
            Modal.ClickOpenDialogwithBackdropClick()
            .click()
        })
        it('Should verify that user is able to click on Dismiss dialog to dismiss dialog with Backdrop Click card', () => {
            Modal.ClickDismissDialog()
            .click()
        })
        it('Should verify that user is able to click on Open Dialog without Backdrop Click', () => {
            Modal.ClickOpenDialogwithoutBackdropClick()
            .click()
        })
        it('Should verify that user is able to click on Close dialog to close dialog without Backdrop Click card', () => {
            Modal.ClickCloseDialog()
            .click()
        })
        //Return Result From Dialog
        it('Should verify that user is able to click on Close dialog to Enter name and Enter your name dialog will be open', () => {
            Modal.ClickEnterNamebutton()
            .click()
        })
        it('Should verify that user is able to Entr Name in the name field', () => {
            Modal.ClickAddName()
            .type('Sidra')
        })
        it('Should verify that user is able to click on Submit button', () => {
            Modal.ClickSubmitbutton()
            .click()
        })
        it('Should verify that user is able to click on Close dialog to Enter name and Enter your name dialog will be open', () => {
            Modal.ClickEnterNamebutton()
            .click()
        })
        it('Should verify that user is able to click on Cancel button', () => {
            Modal.ClickCancelbutton()
            .click()
        })
    })
    context('Modal and Overlays', () => {
        it('Should verify that sidebar toggles is opened', () => {
            Modal.Clicksidebartoggle()
            .click()
        })
        it('Should verify that Modal and Overlays Feature is clickable', () => {
            Modal.ClickModalLayout()
            .click()
        })
        it('Should verify that Dialog Feature is clickable under Modal and Overlays', () => {
            Modal.ClickWindow()
            .click()
        })
        it('Should verify that sidebar toggles is closed', () => {
            Modal.Clicksidebartoggle()
            .click()
        })
        //Click on Open Window Form
        it('Should verify that user is able to click on Open Window form', () => {
            Modal.ClickOpenWindowForm()
            .click()
        })
        it('Should verify that user is able to add subject in Window form', () => {
            Modal.ClickAddSubject()
            .type('Cypress')
        })
        it('Should verify that user is able to click on collapse icon of Window form', () => {
            Modal.ClickCollapse()
            .click()
        })
        it('Should verify that user is able to add text in Windows form', () => {
            Modal.ClickAddText()
            .type('Cypress Autmation')
        })
        it('Should verify that user is able to click on minus icon to minimize Window form', () => {
            Modal.ClickMinimize()
            .click()
        })
        it('Should verify that user is able to Close Window form with ESC key', () => {
            Modal.ClickESCKey()
            .type('{esc}')
        })
        //Click on Open Window With Template
        it('Should verify that user is able to click on Open Window with template form', () => {
            Modal.ClickOpenwindowwithtemplate()
            .click()
        })
        it('Should verify that user is able to click on collapse icon of Window with template form', () => {
            Modal.ClickCollapse()
            .click()
        })
        it('Should verify that user is able to click on minus icon to minimize Window with template form', () => {
            Modal.ClickMinimize()
            .click()
        })
        it('Should verify that user is able to close Window with template form with ESC key', () => {
            Modal.ClickESCKey()
            .type('{esc}')
        })
        //Click on Open Window With Backdrop
        it('Should verify that user is able to click on Open Window with backdrop button', () => {
            Modal.ClickOpenWindowwithBackdrop()
            .click()
        })
        it('Should verify that user is able to close Window with backdrop form with ESC key', () => {
            Modal.ClickESCKey()
            .type('{esc}')
        })
        //Click on Open Window Without Backdrop
        it('Should verify that user is able to click on Open Window without backdrop button', () => {
            Modal.ClickOpenWindowwithoutBackdrop()
            .click()
        })
        it('Should verify that user is able to close Window without backdrop form without ESC key', () => {
            Modal.ClickCloseButton()
            .click()
        })


    })
})