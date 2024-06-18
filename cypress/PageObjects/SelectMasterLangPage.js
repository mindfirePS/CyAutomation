export class SelectMasterLangPage
{
    locators = {
        options : {
            lang : "[data-testid=masterLanguageSelectorEN]"
        }
    }

    selectMasterLanguage()
    {
        cy.get(this.locators.options.lang).first().click();
    }
}