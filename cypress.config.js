const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on("file:preprocessor", cucumber());
    },
    specPattern: "cypress/e2e/**/feature/*",
  },
  env: {
    googleFormLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSe8uL-dd5Z4Pzh1_yo9nB5vPoU2yaNZiulrTAbic8ZZbU-YqA/viewform?vc=0&c=0&w=1&flr=0&usp=mail_form_link",
    fieldLabelNames: {
      "NEXTBUTTON": "Next",
      "SUBMITBUTTON": "Submit",
      "NAME": "Name",
      "EMAIL": "Email",
      "DOB": "DOB",
      "GENDER": "Male",
      "ORGANIZATION": "Organization",
      "ATTEND_DAYS": "What days will you attend?",
      "AVAILABLE_FROM_TEXT": "Available from:",
      "AVAILABLE_FROM_LABEL1": "Hour",
      "AVAILABLE_FROM_LABEL2": "Minute",
      "AVAILABLE_TO_TEXT": "Available to:",
      "AVAILABLE_TO_LABEL1": "Hour",
      "AVAILABLE_TO_LABEL2": "Minute",
      "DIETARY_RESTRICTION": "Dietary restrictions",
      "PAY_10_DOLLARS": "pay $10"
    }
  },
});
