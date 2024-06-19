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
            prodClose : "[data-testid=header-close-item]",
            showLang : ".open-close-btn button",
            openProdEditor : ".act-deact-btn [data-testid=product-setup-test-id]"
        }
    
    }

    clickOpenProdInEditor()
    {
        cy.get(this.locators.buttons.openProdEditor).click();
    }

    clickShowLanguages()
    {
        cy.get(this.locators.buttons.showLang).click();
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