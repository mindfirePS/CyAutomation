export class DashboardPage
{
    //all web-locators
    locators = {
        modules : {
            dashboad  : "DASHBOARD"
        },
        ddOptions : {
            user : "input#custom-select[class~='ng-tns-c124-7']"
        },
        ddlist : {
            logout : "Log out"
        },
    }

    //all functions
    checkDashboardVisibility()
    {
        cy.contains(this.locators.modules.dashboad).should("be.visible");
    }
    clickUser()
    {
        cy.get(this.locators.ddOptions.user).click();
    }
    clickLogOut()
    {
        cy.contains(this.locators.ddlist.logout).click();
    }
}