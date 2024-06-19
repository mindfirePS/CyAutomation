export class PersonaliseShortCode
{
    locators = {
        inputTextBox : {
            newShortCode : "#newShortCode"
        },
        buttons : {
            save : "[data-testid=saveBtnTestId]"
        }
    }
    enterNewShortCode(sCode)
    {
        cy.get(this.locators.inputTextBox.newShortCode).type(sCode);
    }
    clickSave()
    {
        cy.get(this.locators.buttons.save).contains("Save").click();
    }
}