export class TargetImageSizePg
{
    locators = {
        buttons : {
            ok : "[data-testid=saveBtnTestId]"
        }
    }

    clickOnOk()
    {
        cy.get(this.locators.buttons.ok).click();
    }
}