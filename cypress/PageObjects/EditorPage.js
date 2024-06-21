export class EditorPage
{
    locators = {
        texts : {
            prodName : "span.sub-header-font[placement]"
        },
        buttons : {
            addTarget : "[data-testid^=add-target]",
            sharing : "i.fa-share-alt",
            dataChecker : "button.scene-data-size"
        }
    }
    clickDataChecker()
    {
        cy.get(this.locators.buttons.dataChecker).click();
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