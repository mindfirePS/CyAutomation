//Importing all Page Objects
import { LoginPage } from "../../PageObjects/LoginPage";


//Initializing all Page Objects
const loginPageObj = new LoginPage();

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
      
    })
  })