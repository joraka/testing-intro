/// <reference types="cypress" />

it('', function () {

    cy.visit('http://localhost:8080/demo.html')
    cy.get('h1').should('be.visible');
    cy.get('h1').first().should('be.visible');
    cy.get('h1').eq(0).should('be.visible');
    cy.get('h1').eq(1).should('be.visible');

    cy.get('.some-class-a');
    cy.get('.some-class-a').should('be.visible');
    cy.get('.some-class-b').should('be.visible');
    cy.get('.some-class-a.some-class-b').should('be.visible');
    cy.get('p[class="some-class-a"]').should('be.visible');

    cy.get('p[class="mrg"]').eq(2).then($txt => {
        cy.log(`Read text from 3rd element: ${$txt.text().trim()}`)
    });

    cy.log("***");
    cy.log("*** COMBINATOR SELECTORS ***");

    cy.log("*** Child selector '>' ***");

    cy.get('[data-qa="comb_slc"] > p');

    cy.get('[data-qa="comb_slc"] > p').each(($el, index) => {
        cy.log(`Paragrapth ${index + 1}: ${$el.text().trim()}`);
        cy.wrap($el).should('be.visible');
    });

    cy.log("***");
    cy.log("*** Descendant Selector (Space ) ***");

    cy.get('[data-qa="comb_slc"] p');

    cy.log("***");
    cy.log("*** Sibling Selector (+) ***");

    cy.get('[data-qa="comb_slc"] + div');
    cy.get('[data-qa="comb_slc"] + + p');
    cy.get('[data-qa="comb_slc"] + + + p');
    cy.get('[data-qa="sib_slc"] + p');
    cy.get('[data-qa="sib_slc"] + + p');

    cy.log("***");
    cy.log("*** General Sibling Selector (~) ***");

    cy.get('[data-qa="sib_slc"] ~ p');
    cy.get('[data-qa="comb_slc"] ~ p');

    cy.log("***");
    cy.log("*** Combining Multiple Combinators ***");

    cy.get('#comb_slc_comb > ul > li + li');
    cy.get('#comb_slc_comb > ul > li');

    cy.log("***");
    cy.log("*** Click on hovered element ***");

    cy.get('div[class="hover-box"]')
        .trigger('mouseover', {force: true})
        .find('button[class="hover-button"]')
        .click({force: true});

    // cy.get('button[class="hover-button"]')
    //     .click();
    //     // .click({ force: true });

});