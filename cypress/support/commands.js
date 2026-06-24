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

Cypress.Commands.add('login', (user, pass) => {
    cy.visit('https://automationintesting.online/admin')
    cy.get('#username').type(user)
    cy.get('#password').type(pass)
    cy.get('#doLogin').click()
})

Cypress.Commands.add('newRooms', (nroRoom, precio) => {
    cy.visit('https://automationintesting.online/admin')
    cy.get('#roomName').type(nroRoom)
    cy.get('#type').select('Twin')
    cy.get('#accessible').select('true')
    cy.get('#roomPrice').type(precio)
    cy.get('#wifiCheckbox').click()
    cy.get('#tvCheckbox').click()
    cy.get('#createRoom').click()
})