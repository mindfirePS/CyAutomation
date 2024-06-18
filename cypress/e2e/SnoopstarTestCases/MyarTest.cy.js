  //Importing all Page Objects
  import { LoginPage } from "../../PageObjects/LoginPage";
  import { DashboardPage } from "../../PageObjects/DashboardPage";
  import { ProductTypeSelectionPage } from "../../PageObjects/ProductTypeSelectionPage";
  import { StdProdSetupPage } from "../../PageObjects/StdProdSetupPage";
  import { ActiveCountriesPage } from "../../PageObjects/ActiveCountriesPage";
  import { SelectMasterLangPage } from "../../PageObjects/SelectMasterLangPage";
  import { EditorPage } from "../../PageObjects/EditorPage";

  
  //Initializing all Page Objects
  const loginPageObj = new LoginPage();
  const dashboadPageObj = new DashboardPage();
  const selectProductTypePageObj = new ProductTypeSelectionPage();
  const stdProdSetupPageObj = new StdProdSetupPage();
  const actCountryPageObj = new ActiveCountriesPage();
  const masterLangPageObj = new SelectMasterLangPage();
  const editorPageObj = new EditorPage();

  describe('Snoopstar test cases', () => {

  beforeEach("Login to Snoopstar",()=>{
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

    
    dashboadPageObj.checkDashboardVisibility();
  })
  
    it('test', () => {
      dashboadPageObj.clickOnStartNewProduct();
      
      selectProductTypePageObj.clickOnConfirmButton();

      stdProdSetupPageObj.enterProductName("CyStdPrd");
      stdProdSetupPageObj.selectProductType("Booklets");
      stdProdSetupPageObj.selectActCountries();

      actCountryPageObj.clickOnFastSelection();
      actCountryPageObj.selectCountry("America");
      actCountryPageObj.clickSaveAndClose();
      
      stdProdSetupPageObj.clickMasterLangSetup();

      masterLangPageObj.selectMasterLanguage();
      
      actCountryPageObj.clickSaveAndClose();

      cy.wait(2000);
      stdProdSetupPageObj.clickSaveAndOpenInEditor();

      editorPageObj.verifyProdName("CyStdPrd");
    })
    /*
    afterEach("Logout from snoopstar",()=>{
      dashboadPageObj.clickUser();
      dashboadPageObj.clickLogOut();
  
      loginPageObj.checkLoginButtonVisibility();
    })
    */
  })