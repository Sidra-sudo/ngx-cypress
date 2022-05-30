import ModalOverlaysFeatures from "/home/dev/Desktop/Auto-ngx/cypress/integration/ngx-Modal&Overlays-locators.js"; 

describe('NGX Admin Modal & Overlays Feature', () => {
    const Modal = new ModalOverlaysFeatures();

    before(() => {
        cy.visit('http://localhost:4200/')
    })
    context('Dialog feature from Modal and Overlays', () => {
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
    context('Window feature from Modal and Overlays', () => {
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
    context('Popover feature from Modal and Overlays', () => {
        it('Should verify that sidebar toggles is opened', () => {
            Modal.Clicksidebartoggle()
            .click()
        })
        it('Should verify that Modal and Overlays Feature is clickable', () => {
            Modal.ClickModalLayout()
            .click()
        })
        it('Should verify that Popover Feature is clickable under Modal and Overlays', () => {
            Modal.ClickPopover()
            .click()
        })
        it('Should verify that sidebar toggles is closed', () => {
            Modal.Clicksidebartoggle()
            .click()
        })
        //Popover Position
        it('Should allow user to mouseover on left popover', () => {
            Modal.PopoverLeft()
            .trigger('mousemove')
        })
        it('Should allow user to mouseover on top popover', () => {
            Modal.PopoverTop()
            .trigger('mousemove')
        })
        it('Should allow user to mouseover on bottom popover', () => {
            Modal.PopoverBottom()
            .trigger('mousemove')
        })
        it('Should allow user to mouseover on right popover', () => {
            Modal.PopoverRight()
            .trigger('mousemove')
        })
        //Simple Popovers
        it('Should verify that popover shown on click', () => {
            Modal.PopoveronClick()
            .click()
        })
        it('Should verify that popover shown on mouseover', () => {
            Modal.PopoveronHover()
            .trigger('mousemove')
        })
        it('Should allow user to mouseover on hint popover', () => {
            Modal.PopoveronHint()
            .trigger('mousemove')
        })
        //Template Popovers
        it('Should verify that template popver shown when user click on Tabs', () => {
            Modal.TemplatepopoverwithTabs()
            .click()
        })
        it('Should verify that on template popover user is able to click on second tab', () => {
            Modal.ClickonSecondTab()
            .click()
        })
        it('Should verify that on template popover user is able to click on Whats Up?', () => {
            Modal.ClickonWhatsup()
            .click()
        })
        it('Should verify that template popover shown when user click on Forms', () => {
            Modal.TemplatepopoverwithForm()
            .click()
        })
        it('Should verify that user is able to Enter Recipients Name in recipients field', () => {
            Modal.TemplateFormRecipients()
            .type('Sidra')
        })
        it('Should verify that user is able to add Subject Name in Subject field', () => {
            Modal.TemplateFormSubject()
            .type('Cypress')
        })
        it('Should verify that user is able to Enter Message in message field', () => {
            Modal.TemplateFormMessage()
            .type('Cypress Automation')
        })
        it('Should verify that user is able to click on send button of froms template', () => {
            Modal.TemplateFormSendbutton()
            .click()
        })
        it('Should verify that template popover shown when user click on card', () => {
            Modal.TemplatepopoverwithCard()
            .click()
        })
        //Component Popovers
        it('Should verify that component popver shown when user click on Tabs', () => {
            Modal.Componentpopoverwithtabs()
            .click()
        })
        it('Should verify that component popver shown when user click on Form', () => {
            Modal.ComponentpopoverwithForm()
            .click()
        })
        it('Should verify that component popver shown when user click on Card', () => {
            Modal.ComponentpopoverwithCard()
            .click()
        })
        //Event Debouncing
        it('Should allow user to mouseover on event debounsing to show hint on popover', () => {
            Modal.EvenDebouncing1()
            .trigger('mousemove')
        })
        it('Should allow user to mouseover on event debounsing to show hint on popover', () => {
            Modal.EvenDebouncing2()
            .trigger('mousemove')
        })
        it('Should allow user to mouseover on event debounsing to show hint on popover', () => {
            Modal.EvenDebouncing3()
            .trigger('mousemove')
        })
        it('Should allow user to mouseover on event debounsing to show hint on popover', () => {
            Modal.EvenDebouncing4()
            .trigger('mousemove')
        })
        it('Should allow user to mouseover on event debounsing to show hint on popover', () => {
            Modal.EvenDebouncing5()
            .trigger('mousemove')
        })
        it('Should allow user to mouseover on event debounsing to show hint on popover', () => {
            Modal.EvenDebouncing6()
            .trigger('mousemove')
        })
        it('Should allow user to mouseover on event debounsing to show hint on popover', () => {
            Modal.EvenDebouncing7()
            .trigger('mousemove')
        })
        it('Should allow user to mouseover on event debounsing to show hint on popover', () => {
            Modal.EvenDebouncing8()
            .trigger('mousemove')
        })
        it('Should allow user to mouseover on event debounsing to show hint on popover', () => {
            Modal.EvenDebouncing9()
            .trigger('mousemove')
        })
        it('Should allow user to mouseover on event debounsing to show hint on popover', () => {
            Modal.EvenDebouncing10()
            .trigger('mousemove')
        })
        it('Should allow user to mouseover on event debounsing to show hint on popover', () => {
            Modal.EvenDebouncing11()
            .trigger('mousemove')
        })
        it('Should allow user to mouseover on event debounsing to show hint on popover', () => {
            Modal.EvenDebouncing12()
            .trigger('mousemove')
        })
        it('Should allow user to mouseover on event debounsing to show hint on popover', () => {
            Modal.EvenDebouncing13()
            .trigger('mousemove')
        })
        it('Should allow user to mouseover on event debounsing to show hint on popover', () => {
            Modal.EvenDebouncing14()
            .trigger('mousemove')
        })
        it('Should allow user to mouseover on event debounsing to show hint on popover', () => {
            Modal.EvenDebouncing15()
            .trigger('mousemove')
        })
        it('Should allow user to mouseover on event debounsing to show hint on popover', () => {
            Modal.EvenDebouncing16()
            .trigger('mousemove')
        })

    })
    context('Toastr feature from Modal and Overlays', () => {
        it('Should verify that sidebar toggles is opened', () => {
            Modal.Clicksidebartoggle()
            .click()
        })
        it('Should verify that Modal and Overlays Feature is clickable', () => {
            Modal.ClickModalLayout()
            .click()
        })
        it('Should verify that Popover Feature is clickable under Modal and Overlays', () => {
            Modal.ClickToastr()
            .click()
        })
        it('Should verify that sidebar toggles is closed', () => {
            Modal.Clicksidebartoggle()
            .click()
        })
        it('Should verify that user is able to click on position', () => {
            Modal.ClickPoistion()
            .click()
        })
        it('Should verify that user is able to select bottom left position', () => {
            Modal.Selecttopend()
            .click()
        })
        it('Should verify that user is able to add title', () => {
            Modal.Addtitle()
            .clear()
            .type('Hello World!')
        })
        it('Should verify that user is able to add content in content field', () => {
            Modal.Addcontent()
            .clear()
            .type('Hello World! Today we will learn cypress automation')
        })
        // it('Should verify that user is able to update time to hide toast', () => {
        //     Modal.Timetohidetoast()
        //     .click()
        // })
        it('Should verify that user is able to click on toast type', () => {
            Modal.ClickToasttype()
            .first()
            .click()
        })
        it('Should verify that user is able to select Select warning toast', () => {
            Modal.Selectwarning()
            .click()
        })
        it('Should verify that user is able to unselect hide on click', () => {
            Modal.Clicktoastcheckbox()
            .click()
        })
        it('Should verify that user is able to select again hide on click', () => {
            Modal.Clicktoastcheckbox()
            .click()
        })
        it('Should verify that user is able to click on Show Toast button and toast will appear at the top-end', () => {
            Modal.ClickonShowToast()
            .first()
            .click()
        })
        it('Should verify that user is able to click on Random Toast button and random toast will appear at the top-end', () => {
            Modal.ClickRandomToast()
            .click()
        })
        it('Should verify that user is able to click on Random Toast button and random toast will appear at the top-end', () => {
            Modal.ClickRandomToast()
            .click()
        })
        it('Should verify that user is able to click on Random Toast button and random toast will appear at the top-end', () => {
            Modal.ClickRandomToast()
            .click()
        })
        it('Should verify that user is able to click on Random Toast button and random toast will appear at the top-end', () => {
            Modal.ClickRandomToast()
            .click()
        })

    })
    context('Tooltip feature from Modal and Overlays', () => {
        it('Should verify that sidebar toggles is opened', () => {
            Modal.Clicksidebartoggle()
            .click()
        })
        it('Should verify that Tooltip Feature is clickable under Modal and Overlays', () => {
            Modal.ClickTooltip()
            .first()
            .click()
        })
        it('Should verify that sidebar toggles is closed', () => {
            Modal.Clicksidebartoggle()
            .click()
        })
        it('Should allow user to mouseover on first show tooltip and it will show default tooltip', () => {
            Modal.Mouseoverontooltip1()
            .trigger('mousemove')
        })
        it('Should allow user to mouseover on second show tooltip and it will show danger tooltip', () => {
            Modal.Mouseoverontooltip2()
            .trigger('mousemove')
        })
        it('Should allow user to mouseover on top tooltip and it will show tooltip on top', () => {
            Modal.Tooltiptop()
            .trigger('mousemove')
        })
        it('Should allow user to mouseover on right tooltip and it will show tooltip on right', () => {
            Modal.Tooltipright()
            .trigger('mousemove')
        })
        it('Should allow user to mouseover on bottom tooltip and it will show tooltip on bottom', () => {
            Modal.Tooltipbottom()
            .trigger('mousemove')
        })
        it('Should allow user to mouseover on left tooltip and it will show tooltip on left', () => {
            Modal.Tooltiponleft()
            .trigger('mousemove')
        })
        it('Should allow user to mouseover on colored tooltip and it will show default tooltip', () => {
            Modal.Tooltipdefault()
            .trigger('mousemove')
        })
        it('Should allow user to mouseover on colored tooltip and it will show primary tooltip', () => {
            Modal.Tooltipprimary()
            .trigger('mousemove')
        })
        it('Should allow user to mouseover on colored tooltip and it will show success tooltip', () => {
            Modal.Tooltipsuccess()
            .trigger('mousemove')
        })
        it('Should allow user to mouseover on colored tooltip and it will show danger tooltip', () => {
            Modal.Tooltipdanger()
            .trigger('mousemove')
        })
        it('Should allow user to mouseover on colored tooltip and it will show info tooltip', () => {
            Modal.Tooltipinfo()
            .trigger('mousemove')
        })
        it('Should allow user to mouseover on colored tooltip and it will show warning tooltip', () => {
            Modal.Tooltipwarning()
            .trigger('mousemove')
        })
    })
})