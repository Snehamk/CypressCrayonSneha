import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

/***************** Scenario: Submit Google Form Success *****************/

let successTestCase1;
before(() => {
  cy.fixture('TestData_Success').then((data) => {
    successTestCase1 = data.testcase1;
  })
})
Given('I open the Google Form', () => {
  cy.visit(Cypress.env('googleFormLink'));
});
When('I fill google form with proper data', () => {
  cy.fillGoogleForm(successTestCase1, Cypress.env('fieldLabelNames'));
  cy.clearAllCookies();
});
Then('the google form is submitted successfully', () => {
  cy.contains('We have received your registration', { timeout: 10000 }).should('be.visible');    
});

/******************Submit Google Form Unsuccessful - Invalid Time*****************************/

let errorTestCase1;
before(() => {
  cy.fixture('TestData_Error_Time').then((data) => {
    errorTestCase1 = data.testcase2;
  })
})
Given('I open the Google Form', () => {
  cy.visit(Cypress.env('googleFormLink'));
});
When('I fill google form with invalid time', () => {
  cy.fillGoogleForm(errorTestCase1, Cypress.env('fieldLabelNames'));
});
Then('The google form is not submitted successfully with invalid time', () => {
  cy.get('#i22').contains('Invalid time',  { timeout: 10000 }).should('be.visible'); 
  cy.clearAllCookies();

  //cy.contains('We have received your registration', { timeout: 10000 }).should('be.visible');    
});

/********************Scenario: Submit Google Form Unsuccessful - Without Name************************* */
let errorTestCase2;
before(() => {
  cy.fixture('TestData_Error_Name').then((data) => {
    errorTestCase2 = data.testcase3;
  })
})
Given('I open the Google Form', () => {
  cy.visit(Cypress.env('googleFormLink'));
});
When('I fill google form without name', () => {
  cy.fillGoogleForm(errorTestCase2, Cypress.env('fieldLabelNames'));
  cy.wait(1000);
  
});
Then('The google form is not submitted successfully without name', () => {

  cy.clearAllCookies();   
});
/**********************Scenario: Submit Google Form Unsuccessful - Invalid Date*************************/

let errorTestCase3;
before(() => {
  cy.fixture('TestData_No_Date').then((data) => {
    errorTestCase3 = data.testcase5;
  })
})
Given(/^I open the Google Form$/, () => {
  cy.visit(Cypress.env('googleFormLink'));
});

When(/^I fill google form with invalid date$/, () => {
	cy.fillGoogleForm(errorTestCase3, Cypress.env('fieldLabelNames'));
  cy.wait(1000);
});

Then(/^The google form is not submitted successfully with invalid date$/, () => {
 
  cy.clearAllCookies();
});

/*********************Scenario: Submit Google Form Unsuccessful - Invalid Email******************/
let errorTestCase4;
before(() => {
  cy.fixture('TestData_Error_Email').then((data) => {
    errorTestCase4 = data.testcase4;
  })
})
Given(/^I open the Google Form$/, () => {
	cy.visit(Cypress.env('googleFormLink'));
});

When(/^I fill google form invalid email$/, () => {
	cy.fillGoogleForm(errorTestCase4, Cypress.env('fieldLabelNames'));
  cy.wait(1000);
});

Then(/^The google form is not submitted successfully with invalid email$/, () => {
	
  cy.clearAllCookies();
});

/***************** Scenario: Submit Google Form Unsuccessful - Without Email****************/

let errorTestCase5;
before(() => {
  cy.fixture('TestData_No_Email').then((data) => {
    errorTestCase5 = data.testcase6;
  })
})
Given(/^I open the Google Form$/, () => {
	cy.visit(Cypress.env('googleFormLink'));
});

When(/^I fill google form without email$/, () => {
	cy.fillGoogleForm(errorTestCase5, Cypress.env('fieldLabelNames'));
  cy.wait(1000);
});

Then(/^The google form is not submitted successfully without email$/, () => {
	cy.clearAllCookies();
});

/****************Scenario: Submit Google Form Unsuccessful - Without Pay Selected**************/ 
let errorTestCase6;
before(() => {
  cy.fixture('TestData_No_Pay_$10').then((data) => {
    errorTestCase6 = data.testcase7;
  })
})
Given(/^I open the Google Form$/, () => {
	cy.visit(Cypress.env('googleFormLink'));
});

When(/^I fill google form without pay$/, () => {
	cy.fillGoogleForm(errorTestCase6, Cypress.env('fieldLabelNames'));
  cy.wait(1000);
});

Then(/^The google form is not submitted successfully without pay$/, () => {
	cy.clearAllCookies();
});




