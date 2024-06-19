export class ProductsPage
{
    //all web-locators
    locators = {
        inputTextBoxes : {
            search : "[name=search-text]"
        },
        texts : {
            prdName : ".product-name>span",
            noDataAvailable :".no-data >h4"
        },
        icons : {
            prodTrash : ".product-name~.delete-btn>i"
        },
        buttons : {
            prodClose : "[data-testid=header-close-item]"
        }

        
    }
    closeProducts()
    {
        cy.get(this.locators.buttons.prodClose).click();
    }
    verifyNoDataAvailableIsDisplayed()
    {
        cy.get(this.locators.texts.noDataAvailable).contains("NO DATA AVAILABLE.").should("be.visible");
    }
    clickProdTrashIcon()
    {
        cy.get(this.locators.icons.prodTrash).click();
    }
    verifyProductName(pName)
    {
        cy.get(this.locators.texts.prdName).should("have.text",pName);
    }
    enterProductNameInSearch(pName)
    {
        cy.get(this.locators.inputTextBoxes.search).type(pName +"{enter}");
    }

}