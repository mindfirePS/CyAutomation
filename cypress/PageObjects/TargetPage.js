export class TargetPage
{
    locators = {
        button : {
            select : "[data-testid=target-image-select]",
            saveChanges : "[data-testid=target-panel-save]"
        }
    }

    clickOnSaveChanges()
    {
        cy.get(this.locators.button.saveChanges).click();
    }
    clickOnSelect()
    {
        cy.get(this.locators.button.select).click();
    }
}