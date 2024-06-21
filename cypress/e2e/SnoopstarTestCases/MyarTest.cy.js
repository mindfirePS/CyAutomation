  //Importing all Page Objects
  import { LoginPage } from "../../PageObjects/LoginPage";
  import { DashboardPage } from "../../PageObjects/DashboardPage";
  import { ProductTypeSelectionPage } from "../../PageObjects/ProductTypeSelectionPage";
  import { StdProdSetupPage } from "../../PageObjects/StdProdSetupPage";
  import { ActiveCountriesPage } from "../../PageObjects/ActiveCountriesPage";
  import { SelectMasterLangPage } from "../../PageObjects/SelectMasterLangPage";
  import { EditorPage } from "../../PageObjects/EditorPage";
  import { ProductsPage } from "../../PageObjects/ProductsPage";
  import { DeleteContentPage } from "../../PageObjects/DeleteContentPage";
  import { FlashMessage } from "../../PageObjects/FlashMessage";
  import { TargetPage } from "../../PageObjects/TargetPage";
  import { MediaPage } from "../../PageObjects/MediaPage";
  import { TargetImageSizePg } from "../../PageObjects/TargetImageSizePg";
  import { ExperienceSharing } from "../../PageObjects/ExperienceSharing";
  import { PersonaliseShortCode } from "../../PageObjects/PersonaliseShortCode";
  import { DataCheckerPage } from "../../PageObjects/DataCheckerPage";
  import { ExpSharLinkSnoopCode } from "../../PageObjects/ExpSharLinkSnoopCode";

  //Initializing all Page Objects
  const dataCheckerPgObj = new DataCheckerPage();
  const personaliseShortCode = new PersonaliseShortCode();
  const expSharingPgObj = new ExperienceSharing();
  const ExpSharLinkSnoopCodeObj = new ExpSharLinkSnoopCode(); 
  const targetImageSizePgObj = new TargetImageSizePg();
  const mediaPgObj = new MediaPage();
  const targetPgObj = new TargetPage();
  const loginPageObj = new LoginPage();
  const dashboadPageObj = new DashboardPage();
  const selectProductTypePageObj = new ProductTypeSelectionPage();
  const stdProdSetupPageObj = new StdProdSetupPage();
  const actCountryPageObj = new ActiveCountriesPage();
  const masterLangPageObj = new SelectMasterLangPage();
  const editorPageObj = new EditorPage();
  const productsPageObj = new ProductsPage();
  const delContentPageObj = new DeleteContentPage();
  const flashMsgObj = new FlashMessage();

  
  describe("LoginTest",()=>{
    const fixtureFileName = Cypress.env("fixtureFileName");
    let credentials;

    before("Navigate to snoopstar",()=>{
      
      Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from failing the test
        if (err.message.includes('L is not defined')) {
          return false
        }
      });
      cy.visit(Cypress.env("url"));

    })
        
      it("TC-001 Login Test with different inputs",()=>{
        loginPageObj.clickOnLangDD();
        loginPageObj.selectLang("EN");
        cy.fixture(fixtureFileName).then((data)=>{
        
          data.forEach((userdata)=>{
            credentials=userdata;
              if(credentials.email==Cypress.env("email") && credentials.password ==Cypress.env("password"))
                {
                  loginPageObj.enterEmail(credentials.email);
                  loginPageObj.enterPassword(credentials.password);
                  loginPageObj.clickLogin();
                  dashboadPageObj.checkDashboardVisibility();

                  dashboadPageObj.clickUser();
                  dashboadPageObj.clickLogOut();

                  loginPageObj.checkLoginButtonVisibility();
                }
                else
                {
                  loginPageObj.enterEmail(credentials.email);
                  loginPageObj.enterPassword(credentials.password);
                  loginPageObj.clickLogin();

                  flashMsgObj.verifyStatus("Error");
                  flashMsgObj.verifyMessage("Wrong credentials");
                }
          })
        })
      })    
  })
/*
  describe("",()=>{
    it("",()=>{
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

      dashboadPageObj.clickUser();
      dashboadPageObj.clickLogOut();
  
      loginPageObj.checkLoginButtonVisibility();
    })
  })
  */
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
    it.only("Verify Data size checker is opening",()=>{
      cy.wait(2000);
      dashboadPageObj.clickOnProducts();
      productsPageObj.enterProductNameInSearch("DataCheckerProduct");
      productsPageObj.verifyProductName("DataCheckerProduct");
      productsPageObj.clickShowLanguages();
      productsPageObj.clickOpenProdInEditor();
      editorPageObj.verifyProdName("DataCheckerProduct");

      editorPageObj.clickDataChecker();
      dataCheckerPgObj.dataSizeCheckerIsDisplayed();
      dataCheckerPgObj.clickClose();
    })
   

   
    it("Creating a Standard Product and deleting it",()=>{
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

      editorPageObj.clickAddTarget();
      targetPgObj.clickOnSelect();
      mediaPgObj.enterMediaToSearch("panda.jpg");
      mediaPgObj.clickOnMediaName();
      mediaPgObj.clickOnSelect();

      cy.wait(2000);
      targetImageSizePgObj.clickOnOk();

      flashMsgObj.verifyStatus("Processing");
      flashMsgObj.verifyMessage("Uploading, please wait ...");

      targetPgObj.clickOnSaveChanges()

      flashMsgObj.verifyStatus("Processing");
      flashMsgObj.verifyMessage("Given image will be processed in the background.");
      
      cy.wait(4500);
      flashMsgObj.verifyStatus("Success");
      flashMsgObj.verifyMessage("Target sync finished");

      cy.wait(2000);
      dashboadPageObj.clickOnProducts();
      productsPageObj.enterProductNameInSearch("CyStdPrd");
      productsPageObj.verifyProductName("CyStdPrd");
      cy.wait(60000);
      productsPageObj.clickProdTrashIcon();

      delContentPageObj.verifyProductName("CyStdPrd");
      delContentPageObj.clickDeleteButton();
      flashMsgObj.verifyStatus("Success");
      flashMsgObj.verifyMessage("Product deleted successfully.");
      productsPageObj.verifyNoDataAvailableIsDisplayed();
      productsPageObj.closeProducts();
    })

    it("TC-112 Snoopstar-1.8.4 MYAR-1935 Recreating snoopcodes leads to an error : Verify personlizing shortcode is possible after deactivating and reactivating Experience sharing",()=>{
      cy.wait(2000);
      dashboadPageObj.clickOnProducts();
      productsPageObj.enterProductNameInSearch("TestMyar1935Std");
      productsPageObj.verifyProductName("TestMyar1935Std");
      productsPageObj.clickShowLanguages();
      productsPageObj.clickOpenProdInEditor();
      editorPageObj.verifyProdName("TestMyar1935Std");

      cy.wait(2000);
      editorPageObj.clickSharing();
      
      ExpSharLinkSnoopCodeObj.clickToDeactivate();
      flashMsgObj.verifyStatus("Success");
      flashMsgObj.verifyMessage("Sharing deactivated");

      ExpSharLinkSnoopCodeObj.clickToActivate();
      flashMsgObj.verifyStatus("Success");
      flashMsgObj.verifyMessage("Sharing activated");

      const shortCodes = ["89o9ty", "iid0cki"];
      for (let sCode of shortCodes) 
        {
          ExpSharLinkSnoopCodeObj.clickChangeSettingsCreateNew();
          expSharingPgObj.clickPersonaliseCode();
          personaliseShortCode.enterNewShortCode(sCode);
          personaliseShortCode.clickSave();
          expSharingPgObj.clickCreate();
          expSharingPgObj.clickCreateNewSharingLink();
          ExpSharLinkSnoopCodeObj.verifySnoopCodeQRvisible();
          
        }
        ExpSharLinkSnoopCodeObj.clickExpSharLinkSnoopCodeModalClose();

    })
    // /*
    afterEach("Logout from snoopstar",()=>{
      cy.wait(3000);
      dashboadPageObj.clickUser();
      dashboadPageObj.clickLogOut();
  
      loginPageObj.checkLoginButtonVisibility();
    })
    // */
  })