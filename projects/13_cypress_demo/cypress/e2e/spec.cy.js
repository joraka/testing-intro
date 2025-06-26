describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })

  it('Loads login page', () => {
    cy.visit('https://www.saucedemo.com/');
    cy.contains('div', 'Swag Labs').should('be.visible')
    cy.contains('h4', 'Accepted usernames').should('be.visible')
  });

  it('Login with valid data', () => {
    cy.visit('https://www.saucedemo.com/');

    cy.get('#user-name').type('standard_user');
    // cy.get('[id="user-name"]')
    // cy.get('[name="user-name"]')
    cy.get('#password').type('secret_sauce');

    cy.get('[data-test="login-button"]');
    cy.get('.submit-button');
    cy.get('.submit-button.btn_action').click();

    // cy.get('[data-test="title"]').contains('products', { matchCase: false }).should('be.visible')
    cy.get('[data-test="title"]').contains('Products').should('be.visible')
  })
})