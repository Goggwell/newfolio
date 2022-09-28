/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe('Navigation', () => {
  it('should navigate to the about page', () => {
    // start from index page
    cy.visit('http://localhost:3000/')

    // find link with href attribute containing 'about' and click it
    cy.get('a[href*="about"]').click()

    // new url should include "/about"
    cy.url().should('include', '/about')

    // new page should contain h1 with text "About Me"
    cy.get('h1').contains('About Me')
  })
})

// prevent TypeScript from reading as legacy script
export {}
