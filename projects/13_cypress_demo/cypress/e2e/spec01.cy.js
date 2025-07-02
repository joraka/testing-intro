/// <reference types="cypress" />

describe('Register user', () => {
    before (() => {
        cy.visit('http://automationexercise.com');
    });
    it('Registered new user', () => {
        cy.get('a').contains('Signup / Login').click();
        cy.get('input[data-qa="signup-name"]').type('Rasa');
        cy.get('input[data-qa="signup-email"]').type('rasa@la.com');
        cy.get('button[data-qa="signup-button"]').click();
        cy.get('label[for="id_gender2"]').click();
        cy.get('input[data-qa="password"]').type('Rasyte123?');
        cy.get('select[data-qa="days"]').select('14');
        cy.get('select[data-qa="months"]').select(6);
        cy.get('select[data-qa="years"]').select('2000');
        cy.get('input#newsletter').click();
        cy.get('input#optin').click();
        cy.get('input[data-qa="first_name"]').type('Rasa');
        cy.get('input[data-qa="last_name"]').type('Rasyte');
        cy.get('input[data-qa="company"]').type('Rasa pievoje');
        cy.get('input[data-qa="last_name"]').type('Rasyte');
        cy.get('input[data-qa="address"]').type('Rasu g. 34');
        cy.get('select#country').select('Canada');
        cy.get('input[data-qa="state"]').type('British Columbia');
        cy.get('input[data-qa="city"]').type('Vancouver');
        cy.get('input[data-qa="zipcode"]').type('3654');
        cy.get('input[data-qa="mobile_number"]').type('+1432326543');
        cy.get('button[data-qa="create-account"]').click();
        cy.get('a[data-qa="continue-button"]').click();
        cy.get('a').find('b').contains('Rasa').should('be.visible');
        cy.get('a[href="/delete_account"]').click();
        cy.get('h2').find('b').contains('Account Deleted!').should('be.visible');
        cy.get('a[data-qa="continue-button"]').click();
    });
});