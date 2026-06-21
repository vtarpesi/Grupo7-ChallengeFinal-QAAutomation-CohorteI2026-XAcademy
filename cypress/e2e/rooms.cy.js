describe('Rooms', () => {
    beforeEach(() => {
        cy.visit('https://automationintesting.online/#rooms')
        cy.url().should('include','/#rooms')
    })
  
   //Verificar título y descripción de la sección
    it('Verificar título y descripción de la sección' , () => {

      cy.get('h2')
      .contains('Our Rooms')
      .should('be.visible')
      
      cy.get('p')
      .contains('Comfortable beds and delightful breakfast from locally sourced ingredients')
      .should('be.visible')

    })

 //TC-SM-ROO-001 - Visualizacion de las habitaciones y características
  it('Visualización de las 3 habitaciones con nombre y foto, precio y texto descriptivo', () => {
    
    cy.contains('.card-title', 'Single')
      .should('be.visible')

    cy.contains('£100 per night')
      .should('be.visible')

    cy.contains('.card-title', 'Double')
      .should('be.visible')

    cy.contains('£150 per night')
      .should('be.visible')

    cy.contains('.card-title', 'Suite')
      .should('be.visible')

    cy.contains('£225 per night')
      .should('be.visible')

    cy.get('.card-img-top')
      .should('have.length', 3)

    cy.get('p.card-text')
      .should('have.length', 3)
      .and('be.visible')

    cy.get('.badge')
      .should('have.length.at.least', 3)

    cy.get('.btn')
      .contains('Book now')

  })

 //TC-SM-ROO-004 - "Book now" redirige a la habitacion seleccionada
    it('Single redirige correctamente', () => {

    cy.get('[href*="/reservation/1"]')
      .click()

    cy.url()
      .should('include', '/reservation/1')

    cy.get('h1')
      .should('have.text', 'Single Room')

  })

  it('Double redirige correctamente', () => {

    cy.get('[href*="/reservation/2"]')
      .click()

    cy.url()
      .should('include', '/reservation/2')

    cy.get('h1')
      .should('have.text', 'Double Room')

  })

  it('Suite redirige correctamente', () => {

    cy.get('[href*="/reservation/3"]')
      .click()

    cy.url()
      .should('include', '/reservation/3')

    cy.get('h1')
      .should('have.text', 'Suite Room')

  })

   })
    
   
  //TC-SM-ROO-005 - Verificación breadcrumb Home 
  describe('Room Breadcrumb', () => {

  it('TC-SM-ROO-005 - Single Room', () => {

    cy.visit('https://automationintesting.online/reservation/1')

    cy.get('.breadcrumb-item')
    .contains('Home')
    .should('have.attr', 'href', '/')
    .should('be.visible')
    .click()

    cy.url()
    .should('include', 'https://automationintesting.online/')

  })

  it('TC-SM-ROO-005 - Double Room', () => {

    cy.visit('https://automationintesting.online/reservation/2')

    cy.get('.breadcrumb-item')
    .contains('Home')
    .should('have.attr', 'href', '/')
    .should('be.visible')
    .click()

    cy.url()
    .should('include', 'https://automationintesting.online/')  

  })

  it('TC-SM-ROO-005 - Suite Room', () => {

    cy.visit('https://automationintesting.online/reservation/3')

    cy.get('.breadcrumb-item')
    .contains('Home')
    .should('have.attr', 'href', '/')
    .should('be.visible')
    .click()

    cy.url()
    .should('include', 'https://automationintesting.online/')

  })

})

