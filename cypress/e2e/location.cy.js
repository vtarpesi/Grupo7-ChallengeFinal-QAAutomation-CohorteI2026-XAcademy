describe('Location', () => {
    beforeEach(() => {
        cy.visit('https://automationintesting.online/#location')
        cy.url().should('include','/#location')
    })

it('TC-SM-LOC-001 - Location section elements', () => {
   
  // Ir a la sección Location
  cy.get('#navbarNav')
    .contains('Location')
    .should('be.visible')
    .click()
  
  // Verificar título y descripción de la sección
  cy.get('h2')
    .contains('Our Location')
    .should('be.visible')

 cy.get('p')
    .contains('Find us in the beautiful Newingtonfordburyshire countryside')
    .should('be.visible')
  
  // Verificar mapa
  cy.get('.pigeon-overlays')
    .should('be.visible')
  
  //Verificar panel informativo
  cy.get('h5')
  .contains('Address')
  .should('be.visible') 
  cy.get(':nth-child(2) > :nth-child(2) > .mb-0') // se usa este parametro debido a la ausencia de identificadores únicos en los elementos a validar 
  .should('not.be.empty' )

  cy.contains('Phone')
  .should('be.visible')
  cy.get(':nth-child(3) > :nth-child(2) > .mb-0') // se usa este parametro debido a la ausencia de identificadores únicos en los elementos a validar 
  .should('not.be.empty')

  cy.contains('Email')
  .should('be.visible')
  cy.get(':nth-child(4) > :nth-child(2) > .mb-0') // se usa este parametro debido a la ausencia de identificadores únicos en los elementos a validar 
  .should('not.be.empty')

  cy.get('.h5')
  .contains('Getting Here')
  .should('be.visible')
  cy.get('.card-body > :nth-child(7)') // se usa este parametro debido a la ausencia de identificadores únicos en los elementos a validar 
  .should('not.be.empty')

})

it('TC-SM-LOC-002 - Address format validation', () => {

  cy.get(':nth-child(2) > :nth-child(2) > .mb-0')
    .should('contain.text', 'Shady Meadows B&B')
    .should('contain.text', 'Shadows valley')
    .should('contain.text', 'Dilbery')
    .should('contain.text', 'N1 1AA')

})

})
