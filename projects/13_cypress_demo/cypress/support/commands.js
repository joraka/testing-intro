// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('register', (user) => {
    cy.get('a').contains('Signup / Login').click();
    cy.get('input[data-qa="signup-name"]').type(user.name);
    cy.get('input[data-qa="signup-email"]').type(user.email);
    cy.get('button[data-qa="signup-button"]').click();
    cy.get('label[for="id_gender1"]').click();
    cy.get('input[data-qa="password"]').type(user.password);
    cy.get('select[data-qa="days"]').select(user.day);
    cy.get('select[data-qa="months"]').select(user.month);
    cy.get('select[data-qa="years"]').select(user.year);
    cy.get('input[data-qa="first_name"]').type(user.firstName);
    cy.get('input[data-qa="last_name"]').type(user.lastName);
    cy.get('input[data-qa="company"]').type(user.company);
    cy.get('input[data-qa="address"]').type(user.address);
    cy.get('select#country').select(user.country);
    cy.get('input[data-qa="state"]').type(user.state);
    cy.get('input[data-qa="city"]').type(user.city);
    cy.get('input[data-qa="zipcode"]').type(user.zip);
    cy.get('input[data-qa="mobile_number"]').type(user.mobile);
    cy.get('button[data-qa="create-account"]').click();
    cy.get('a[data-qa="continue-button"]').click();
    cy.get('a[href="/logout"]').click();
})