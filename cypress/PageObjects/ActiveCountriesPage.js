export class ActiveCountriesPage
{
    locators = {
        buttons : {
            fastSelc : "#fastSelectOptions",
            country : ".dropdown-item",
            saveClose : "button[data-testid=saveBtnTestId]>span"
        }
        
    }
    clickSaveAndClose()
    {
        cy.get(this.locators.buttons.saveClose).contains("Save and close").scrollIntoView().click();
    }
    clickOnFastSelection()
    {
        cy.get(this.locators.buttons.fastSelc).click();
    }

    selectCountry(loc)
    {
        cy.get(this.locators.buttons.country).contains(loc).click();
    }
}