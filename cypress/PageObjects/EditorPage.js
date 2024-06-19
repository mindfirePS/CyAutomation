export class EditorPage
{
    locators = {
        texts : {
            prodName : "span.sub-header-font[placement]"
        },
        buttons : {
            addTarget : "[data-testid^=add-target]"
        }
    }

    clickAddTarget()
    {
        cy.get(this.locators.buttons.addTarget).click();
    }
    verifyProdName(pName)
    {
        cy.get(this.locators.texts.prodName).should("have.text", pName);
    }
}