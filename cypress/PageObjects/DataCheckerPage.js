export class DataCheckerPage
{
    locators = {
        text : {
            dataSizeChecker : "app-snoopstar-small-popup-header h5"
        },
        buttons :{
            close : "[data-testid=rightBtnTestId]"
        }
    }
    dataSizeCheckerIsDisplayed()
    {
        cy.get(this.locators.text.dataSizeChecker).should("be.visible");
    }
    clickClose()
    {
        cy.get(this.locators.buttons.close).click();
    }
}