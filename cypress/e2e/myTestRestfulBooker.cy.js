describe('Shady Meadows B&B', () => {

  it('Carga la pagina principal', () => {
    cy.visit('https://automationintesting.online/')
    cy.contains('Shady Meadows B&B')
  })

})