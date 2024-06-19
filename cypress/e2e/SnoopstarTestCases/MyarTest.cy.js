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


  //Initializing all Page Objects
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
  
    it('Standard Product Creation', () => {
      
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
    it("Delete a product",()=>{
      cy.wait(2000);
      dashboadPageObj.clickOnProducts();
      productsPageObj.enterProductNameInSearch("CyStdPrd");
      productsPageObj.verifyProductName("CyStdPrd");
      productsPageObj.clickProdTrashIcon();

      delContentPageObj.verifyProductName("CyStdPrd");
      delContentPageObj.clickDeleteButton();
      flashMsgObj.verifyStatus("Success");
      flashMsgObj.verifyMessage("Product deleted successfully.");
      productsPageObj.verifyNoDataAvailableIsDisplayed();
      productsPageObj.closeProducts();
    })
   
    it("Open a Product",()=>{
      cy.wait(2000);
      dashboadPageObj.clickOnProducts();
      productsPageObj.enterProductNameInSearch("CyStdPrd");
      productsPageObj.verifyProductName("CyStdPrd");
      productsPageObj.clickShowLanguages();
      productsPageObj.clickOpenProdInEditor();
      editorPageObj.verifyProdName("CyStdPrd");

    })

    it.only("Add target",()=>{
      cy.wait(2000);
      dashboadPageObj.clickOnProducts();
      productsPageObj.enterProductNameInSearch("CyStdPrd");
      productsPageObj.verifyProductName("CyStdPrd");
      productsPageObj.clickShowLanguages();
      productsPageObj.clickOpenProdInEditor();
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
      //Processing
      //Given image will be processed in the background.
      //Success
      //Target sync finished
    })
    /*
    afterEach("Logout from snoopstar",()=>{
      dashboadPageObj.clickUser();
      dashboadPageObj.clickLogOut();
  
      loginPageObj.checkLoginButtonVisibility();
    })
    */
  })