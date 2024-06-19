export class ExpSharLinkSnoopCode
{
    locators = {
        toggleSwitch : {
            toDeactivate : ".modal-content .fa-toggle-on",
            toActivate : ".modal-content .fa-toggle-off"
        },
        buttons : {
            changeSettingsCreateNew : "[data-testid=saveBtnTestId]",
            modalClose : "[data-testid=header-close-item]"
        },
        img : {
            snoopcodeQR : "div.qrImage"
        }
        
    }
    clickExpSharLinkSnoopCodeModalClose()
    {
        cy.get(this.locators.buttons.modalClose).click();
    }
    verifySnoopCodeQRvisible()
    {
        cy.get(this.locators.img.snoopcodeQR).should("be.visible");
    }
    clickChangeSettingsCreateNew()
    {
        cy.get(this.locators.buttons.changeSettingsCreateNew).click();
    }
    clickToDeactivate()
    {
        cy.get(this.locators.toggleSwitch.toDeactivate).click();
    }
    clickToActivate()
    {
        cy.get(this.locators.toggleSwitch.toActivate).click();
    }
}