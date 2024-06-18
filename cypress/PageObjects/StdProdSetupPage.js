export class StdProdSetupPage
{
    locators = {
        inputTextBoxes : {
            prodName : "[name=product-info-productname]"
        },
        selectDD :{
            productType : "select[data-testid]"
        },
        buttons : {
            countrySetup : "button[data-testid=productSetupOpenCountrySelector]",
            saveOpenEditor : "[data-testid=saveBtnTestId]"
        },
        icons : {
            masterLangSet : "[data-testid=productSetupMasterLanguageSelector]"
        }
    }

    clickSaveAndOpenInEditor()
    {
        cy.get(this.locators.buttons.saveOpenEditor).click();
    }
    clickMasterLangSetup()
    {
        cy.get(this.locators.icons.masterLangSet).click();
    }
    selectActCountries()
    {
        cy.get(this.locators.buttons.countrySetup).click();
    }
    enterProductName(pName)
    {
        cy.get(this.locators.inputTextBoxes.prodName).type(pName);
    }

    selectProductType(pType)
    {
        cy.get(this.locators.selectDD.productType).select(pType);
    }


}