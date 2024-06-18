export class LoginPage
{
    locators = {
        ddOptions : {
            langDD : "#custom-select[class~='ng-tns-c124-3']"
        },
        ddlist : {
            lang : "ul>li"
        },
        inputTextBox : {
            emailAdd : "[name=emailAddress]",
            password : "[name=password]"
        },
        buttons : {
            login : "[data-testid=productSetupOpenMedia]"
        }
    }

    clickLogin()
    {
        cy.get(this.locators.buttons.login).click();
    }
    enterEmail(email)
    {
        cy.get(this.locators.inputTextBox.emailAdd).type(email);
    }
    enterPassword(pwd)
    {
        cy.get(this.locators.inputTextBox.password).type(pwd);
    }
    clickOnLangDD()
    {
        cy.get(this.locators.ddOptions.langDD).click();
    }

    selectLang(language)
    {
        cy.get(this.locators.ddlist.lang).contains(language).click();
    }
}