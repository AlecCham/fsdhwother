/// <reference types="cypress" />
//context()
describe('First test suite', () => {
    it('first test', () => {
        //get to AUT
        cy.visit('/')
        cy.contains('Forms').click();
        cy.contains('Form Layouts').click();

        
        //by tag name
        cy.get('input')
        //by id
        cy.get('#inputEmail1')
        //by class value
        cy.get(".input-full-width")
        //by attribute name
        cy.get("[fullwidth]")
        //by attribute and its value
        cy.get('[placeholder="Email"]')
        //by entire class value
        cy.get('[class="input-full-width size-medium shape-rectangle"]')
        //find by 2 attributes
        cy.get('[fullwidth][placeholder="Email"]')
        //by cypress id
        cy.get('[data-cy="imputEmail1"]').click()
    })
})