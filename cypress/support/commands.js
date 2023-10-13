require('@cypress/xpath');
import dayjs from 'dayjs'

Cypress.Commands.add('fillGoogleForm', (inputData, fieldLabelNames) => {
  // Click on next button
  const { 
    NEXTBUTTON,
    SUBMITBUTTON,
    NAME,
    GENDER,
    DOB,
    EMAIL,
    ORGANIZATION,
    ATTEND_DAYS,
    AVAILABLE_FROM_TEXT,
    AVAILABLE_FROM_LABEL1,
    AVAILABLE_FROM_LABEL2,
    AVAILABLE_TO_TEXT,
    AVAILABLE_TO_LABEL1,
    AVAILABLE_TO_LABEL2,
    DIETARY_RESTRICTION,
    PAY_10_DOLLARS
  } = fieldLabelNames;

  cy.contains(NEXTBUTTON).click();
  cy.wait(1000);

  /********************************** PAGE 1 ************************************/

  // NAME
  if(inputData.name)
  {
  cy.xpath(`//span[text()="${NAME}"]/parent::div/parent::div/parent::div/following-sibling::div//input`).type(inputData.name);
  }

  // GENDER
  cy.xpath(`//span[text()="${GENDER}"]`).click();
  cy.wait(500);
  
  // DOB
  if(inputData.dob)
  {
  cy.xpath(`//span[text()="${DOB}"]/parent::div/parent::div/parent::div/following-sibling::div//input`).type(inputData.dob);
  cy.wait(500);
  }

  // EMAIL
  if(inputData.email)
  {
  cy.xpath(`//span[text()="${EMAIL}"]/parent::div/parent::div/parent::div/following-sibling::div//input`).type(inputData.email);
  cy.wait(500);
  }

  // ORGANIZATION
  cy.xpath(`//span[text()="${ORGANIZATION}"]/parent::div/parent::div/parent::div/following-sibling::div//textarea`).type(inputData.organization);
  cy.wait(500);
  
  cy.contains(NEXTBUTTON).click();
  cy.wait(1000);

  
  /************************EMAIL VALIDATION******************************/
  if (!inputData.email) {
    cy.contains('This is a required question').should('be.visible')
    Cypress.on('fail', () => false);
  }

  if(inputData.email) {
    if(!String(inputData.email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )) {
      cy.contains('Must be a valid email address').should('be.visible');
      Cypress.on('fail', () => false);
    }
  }
  
  /************************NAME VALIDATION******************************/
  if (!inputData.name) {
    cy.contains('This is a required question').should('be.visible')
    Cypress.on('fail', () => false);
  }
  /************************DATE OF BIRTH VALIDATION******************************/
  if (!inputData.dob) {
    cy.contains('This is a required question',  { timeout: 10000 }).should('be.visible'); 
    Cypress.on('fail', () => false);
  }
 

  /********************************** PAGE 2 ************************************/

  // ATTEND_DAYS
  cy.xpath(`//span[text()="${ATTEND_DAYS}"]/parent::div/parent::div/parent::div/following-sibling::div//span[text()="${inputData.attendDays}"]`).click();
  cy.wait(500);

  // AVAILABLE_FROM
  cy.xpath(`//span[text()="${AVAILABLE_FROM_TEXT}"]/parent::div/parent::div/parent::div/following-sibling::div//input[contains(@aria-label, "${AVAILABLE_FROM_LABEL1}")]`).type(inputData.availableFromHours);
  cy.xpath(`//span[text()="${AVAILABLE_FROM_TEXT}"]/parent::div/parent::div/parent::div/following-sibling::div//input[contains(@aria-label, "${AVAILABLE_FROM_LABEL2}")]`).type(inputData.availableFromMinutes);
  cy.wait(500);

  // AVAILABLE_TO
  cy.xpath(`//span[text()="${AVAILABLE_TO_TEXT}"]/parent::div/parent::div/parent::div/following-sibling::div//input[contains(@aria-label, "${AVAILABLE_TO_LABEL1}")]`).type(inputData.availableToHours);
  cy.xpath(`//span[text()="${AVAILABLE_TO_TEXT}"]/parent::div/parent::div/parent::div/following-sibling::div//input[contains(@aria-label, "${AVAILABLE_TO_LABEL2}")]`).type(inputData.availableToMinutes);
  cy.wait(500);

  // DIETARY_RESTRICTION
  cy.xpath(`//span[text()="${DIETARY_RESTRICTION}"]/parent::div/parent::div/parent::div/following-sibling::div//span[text()="Choose"]`).click();
  cy.wait(1000);
  cy.xpath(`(//span[text()="${DIETARY_RESTRICTION}"]/parent::div/parent::div/parent::div/following-sibling::div//div[contains(@data-value, "${inputData.dietOption}")])[2]`).click();
  cy.wait(500);

  // PAY 10 DOLLARS OPTION
  if(inputData.pay10Checkbox){
  cy.xpath(`//span[contains(text(), "${PAY_10_DOLLARS}")]/parent::div/parent::div/parent::div/following-sibling::div//div[contains(@role, "checkbox")]`).click();
  cy.wait(1000);
  }
  /******************************************************************************/

  cy.xpath(`//span[contains(text(), "${SUBMITBUTTON}")]`).click();
  cy.wait(1000);

  /************************PAY VALIDATION******************************/

  if (!inputData.pay10Checkbox) {
    cy.contains('This is a required question',  { timeout: 10000 }).should('be.visible'); 
    Cypress.on('fail', () => false);
  }

})
