Feature: GoogleForm
    Scenario: Submit Google Form Success
    Given I open the Google Form
    When I fill google form with proper data
    Then the google form is submitted successfully

    Scenario: Submit Google Form Unsuccessful - Invalid Time
    Given I open the Google Form
    When I fill google form with invalid time
    Then The google form is not submitted successfully with invalid time

    Scenario: Submit Google Form Unsuccessful - Without Name
    Given I open the Google Form
    When I fill google form without name
    Then The google form is not submitted successfully without name

    Scenario: Submit Google Form Unsuccessful - Invalid Date
    Given I open the Google Form
    When I fill google form with invalid date
    Then The google form is not submitted successfully with invalid date

    Scenario: Submit Google Form Unsuccessful - Invalid Email
    Given I open the Google Form
    When I fill google form invalid email
    Then The google form is not submitted successfully with invalid email

   Scenario: Submit Google Form Unsuccessful - Without Email
    Given I open the Google Form
    When I fill google form without email
    Then The google form is not submitted successfully without email

    Scenario: Submit Google Form Unsuccessful - Without Pay Selected
    Given I open the Google Form
    When I fill google form without pay
    Then The google form is not submitted successfully without pay