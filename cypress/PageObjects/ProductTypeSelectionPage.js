export class ProductTypeSelectionPage
{
    locators = {
        radioButtons : {
            standardProdRadioBtn : ".standard-prod i"
        },
        buttons : {
            confirm : "[data-testid=saveBtnTestId]"
        }

    }

    clickOnConfirmButton()
    {
        cy.get(this.locators.buttons.confirm).click();
    }

    
}