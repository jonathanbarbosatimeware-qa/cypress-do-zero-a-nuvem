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




Cypress.Commands.add('fillMandatoryFieldsAndSubmit', (userCustomData = {}) => {
  const data = {
    firstName: 'Jonathan',
    lastName: 'Barbosa',
    email: 'jonathan@gmail.com',
    text: 'Texto padrão de ajuda.',
    ...userCustomData // 
  }

  cy.get('#firstName').type(data.firstName, { force: true })
  cy.get('#lastName').type(data.lastName, { force: true })
  cy.get('#email').type(data.email, { force: true })
  cy.get('#open-text-area').type(data.text, { force: true })
  cy.contains('button','Enviar').click({ force: true })
})