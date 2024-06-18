export class EditorPage
{
    locators = {
        texts : {
            prodName : "span.sub-header-font[placement]"
        }
    }

    verifyProdName(pName)
    {
        cy.get(this.locators.texts.prodName).should("have.text", pName);
    }
}