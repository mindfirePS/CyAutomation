//Importing all Page Objects
import { LoginPage } from "../../PageObjects/LoginPage";
import { DashboardPage } from "../../PageObjects/DashboardPage";

//Initializing all Page Objects
const loginPageObj = new LoginPage();
const dashboadPageObj = new DashboardPage();

describe('Snoopstar test cases', () => {
    it('test', () => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from failing the test
            if (err.message.includes('L is not defined')) {
              return false
            }
          });
      cy.visit(Cypress.env("url"));
     
      loginPageObj.clickOnLangDD();
      loginPageObj.selectLang("EN");
      loginPageObj.enterEmail(Cypress.env("email"));
      loginPageObj.enterPassword(Cypress.env("password"));
      loginPageObj.clickLogin();
      
      cy.wait(6000);
      dashboadPageObj.checkDashboardVisibility();

      dashboadPageObj.clickUser();
      dashboadPageObj.clickLogOut();

      
      loginPageObj.checkLoginButtonVisibility();


    })
  })