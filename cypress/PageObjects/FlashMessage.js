export class FlashMessage
{
    locators = {
        text : {
            mStatus : "div.sn-title",
            message : "div.sn-content"
        }
    }

    verifyStatus(expStatus)
    {
        cy.get(this.locators.text.mStatus).should("have.text",expStatus)
    }
    verifyMessage(expMessage)
    {
        cy.get(this.locators.text.message).should("have.text",expMessage)
    }
}