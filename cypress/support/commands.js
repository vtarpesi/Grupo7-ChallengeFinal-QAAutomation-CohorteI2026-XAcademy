
import { dateHelper } from "./dataHelper";  


Cypress.Commands.add('login', (user, pass) => {
    cy.get('#username').type(user)
    cy.get('#password').type(pass)
    cy.get('#doLogin').click()
})

Cypress.Commands.add('newRooms', (nroRoom, precio) => {
    cy.get('#roomName').type(nroRoom)
    cy.get('#type').select('Twin')
    cy.get('#accessible').select('true')
    cy.get('#roomPrice').type(precio)
    cy.get('#wifiCheckbox').click()
    cy.get('#tvCheckbox').click()
    cy.get('#createRoom').click()
})

Cypress.Commands.add('selecctRoom', (fecha_dsd,fecha_hst) => {
    cy.get(':nth-child(1) > .react-datepicker-wrapper > .react-datepicker__input-container > .form-control')
      .click()
      .clear()
      .type(fecha_dsd)

    cy.get(':nth-child(2) > .react-datepicker-wrapper > .react-datepicker__input-container > .form-control')
      .click()
      .clear()
      .type(fecha_hst)

    cy.get('.col-8 > .btn').click()

    //verifica que dirigio a our rooms
    cy.contains('Our Rooms').should('be.visible')
})

Cypress.Commands.add('formReserva', (nombre, apellido,email,nroCelular) => {
    cy.get('#doReservation').click()
    cy.get('[name="firstname"]').should('be.visible').type(nombre)
    cy.get('[name="lastname"]').type(apellido)
    cy.get('[name="email"]').type(email)
    cy.get('[name="phone"]').type(nroCelular)

    //Confirmar la reserva y validar que el mensaje de éxito aparece en pantalla
    cy.get('.btn-primary').click()
})

Cypress.Commands.add('formContacto', (nombre, email, nroCelular,asunto, mensaje) => {
  cy.get('[data-testid="ContactName"]').should('be.visible').type(nombre)
  cy.get('[data-testid="ContactEmail"]').should('be.visible').type(email)
  cy.get('[data-testid="ContactPhone"]').should('be.visible').type(nroCelular)
  cy.get('[data-testid="ContactSubject"]').should('be.visible').type(asunto)
  cy.get('[data-testid="ContactDescription"]').should('be.visible').type(mensaje)
})
       
Cypress.Commands.add('searchAvailability', (daysOfStay = 5) => {
    const checkIn = dateHelper.getFormatedToday();
    const checkOut = dateHelper.getFormatedFutureDate(daysOfStay);

    cy.get('.react-datepicker__input-container input')
        .eq(0)
        .clear()
        .type(`${checkIn}{enter}`);

    cy.get('.react-datepicker__input-container input')
        .eq(1)
        .clear()
        .type(`${checkOut}{enter}`);

    cy.get('button').contains('Check Availability').click();
});
