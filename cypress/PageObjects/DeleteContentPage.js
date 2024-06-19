export class DeleteContentPage
{
    locators = {
        text : {
            prodName : "span.productName"
        },
        buttons : {
            delete : "[data-testid=saveBtnTestId]"
        }
    }

    verifyProductName(pName)
    {
        cy.get(this.locators.text.prodName).should("have.text",pName);
    }
    clickDeleteButton()
    {
        cy.get(this.locators.buttons.delete).click();
    }
}