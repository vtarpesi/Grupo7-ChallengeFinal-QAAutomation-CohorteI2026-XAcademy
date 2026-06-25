describe('Reserva como Usuario Invitado', () => {

  beforeEach(() => {
    cy.intercept('GET', '**/api/room').as('rooms')
    cy.visit('https://automationintesting.online/')
    cy.wait('@rooms')
  })

  it('Reserva una habitación', () => {
    // 1. Verificar home
    //cy.contains('Shady Meadows B&B').should('be.visible')

    //seleecionar fechas
    cy.selecctRoom('17/07/2026', '27/07/2026')

    //  Verificar habitaciones disponibles
    cy.get('h5.card-title')
      .should('have.length', 3)
      .and('be.visible')

    cy.get('.card-img-top')
      .should('have.length', 3)

    cy.get('p.card-text')
      .should('have.length', 3)
      .and('be.visible')

    cy.get('.badge')
      .should('have.length.at.least', 3)
      .and('be.visible')

    cy.contains('Book now').should('be.visible')

    //  2. Seleccionar Double Room
    cy.get('[href*="/reservation/2"]')
      .click()

    cy.url().should('include', '/reservation/2')

    cy.get('h1').should('have.text', 'Double Room')
    
    cy.formReserva('Juan', 'Perez', 'juanperez@gmail.com', '29444554789')
    
    //validacion de confirmacion de reserva
    cy.get('h2.card-title.fs-4.fw-bold.mb-3').should('contain', 'Booking Confirmed')
  })

  it('Formulario con campos vacios', () => {
    cy.selecctRoom('17/07/2026', '27/07/2026')

    //  Seleccionar Suite Room
    cy.get('[href*="/reservation/3"]')
      .click()

    cy.url().should('include', '/reservation/3')

    cy.get('h1').should('have.text', 'Suite Room')
    
    cy.formReserva(' ', ' ', ' ', ' ')

    // Verificar que aparecen los mensajes de error correspondientes
    cy.get('.alert').scrollIntoView().should('be.visible');
    cy.get('.alert').and('be.visible')

    cy.get('.alert').should('contain', 'Lastname should not be blank')
      .and('contain', 'Firstname should not be blank')
      .and('contain', 'size must be between 11 and 21')
      .and('contain', 'size must be between 3 and 18')
      .and('contain', 'size must be between 3 and 30')
  })

  it('verificar que no se realiza la reserva', () => {
    cy.get(':nth-child(6) > .nav-link').click()
    cy.login('admin', 'password')

    cy.get('#reportLink').click()
    cy.get(':nth-child(4) > .rbc-row-bg > :nth-child(4)').should('be.empty')
    cy.get(':nth-child(4) > .rbc-row-bg > :nth-child(5)').should('be.empty')
    cy.get(':nth-child(4) > .rbc-row-bg > :nth-child(6)').should('be.empty')
  })

})

describe('Formulario de contacto', () =>{
   
    it('formulario de contacto con datos válidos', ()=>{
// Completar el formulario de contacto con datos válidos
       cy.visit('https://automationintesting.online/#contact')
       cy.url().should('include', '#contact')
       cy.contains('Send Us a Message')

       cy.formContacto('Ana Lopez', 'analopezal@gmail.com', '29444554789', 'Consulta sobre reserva',
         'Hola, Estoy interesado/a en realizar una reserva y quisiera recibir más información sobre la disponibilidad y los servicios incluidos. Muchas gracias Saludos.')
       //2. Enviar el mensaje y validar que se muestra la confirmación
        cy.get('.d-grid > .btn').click()

        cy.get('.col-lg-8 > .card > .card-body > .h4')
        .contains('Thanks for getting in touch')
        .should('be.visible')

    })

} )