export class EditorPage
{
    locators = {
        texts : {
            prodName : "span.sub-header-font[placement]"
        },
        buttons : {
            addTarget : "[data-testid^=add-target]",
            sharing : "i.fa-share-alt"
        }
    }
    clickSharing()
    {
        cy.get(this.locators.buttons.sharing).click();
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