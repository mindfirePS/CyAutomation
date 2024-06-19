export class ExperienceSharing
{
    locators = {
        buttons : {
            personaliseCode : "[data-testid=personaliseShortcode-testid]",
            create : "[data-testid=saveBtnTestId]",
            createNewSharingLink : "[data-testid=saveBtnTestId]"
        }
    }
    clickCreateNewSharingLink()
    {
        cy.get(this.locators.buttons.createNewSharingLink).contains("Create new share link").click();
    }
    clickCreate()
    {
        cy.get(this.locators.buttons.create).contains("Create").click();
    }
    clickPersonaliseCode()
    {
        cy.get(this.locators.buttons.personaliseCode).click();
    }
}