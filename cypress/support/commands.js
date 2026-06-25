import { dateHelper } from "./dataHelper";  // Asegurate de que la ruta a tu helper sea correcta

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