/// <reference types="cypress" />

describe('Login user with valid details', () => {
     const userDtls = {
        name: "Rasa",
        firstName: "Rasa",
        lastName: "Rasyte",
        email: "dmoNew1321@email.com",
        password: "lakjsdf1321",
        day: "14",
        month: 6,
        year: '2000',
        company: "Some Company name",
        address: 'Rasu g. 34',
        country: 'Canada',
        state: "British Columbia",
        city: "Vancouver",
        zip: "3654",
        mobile: "+1432326543"
    };

    before (() => {
        cy.visit('http://automationexercise.com');
        cy.register(userDtls);
    });

    it('Logs in with valid details', () => {
        cy.get('a').contains('Signup / Login').click();
        cy.get('form[action="/login"]').find('input[type="email"]').type(userDtls.email);
        cy.get('form[action="/login"]').find('input[type="password"]').type(userDtls.password);
        cy.get('button[data-qa="login-button"]').click();
        cy.get('a[href="/delete_account"]').click();
        cy.get('h2').find('b').contains('Account Deleted!').should('be.visible');
    });
})