export class MediaPage
{
    locators = {
        inputTextBox : {
            searchBox : "[name='search-text']"
        },
        text : {
            mediaName : "div.text-desc"
        },
        button : {
            select : "[data-testid=saveBtnTestId]"
        }
        
    }
    clickOnSelect()
    {
        cy.get(this.locators.button.select).click();
    }
    clickOnMediaName()
    {
        cy.get(this.locators.text.mediaName).click();
    }
    enterMediaToSearch(mName)
    {
        cy.get(this.locators.inputTextBox.searchBox).type(mName+"{enter}");
    }
}