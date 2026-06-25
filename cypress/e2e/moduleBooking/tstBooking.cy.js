import { dateHelper } from '../../support/dataHelper';

describe('Booking Module', () => {
    beforeEach(() => {
        cy.visit('https://automationintesting.online');
    });

    it('should allow searching for room availability when valid date ranges are entered', () => {

        const checkIn = dateHelper.getFormatedToday();
        const checkOut = dateHelper.getFormatedFutureDate(5);
        cy.get('.react-datepicker__input-container input')
            .eq(0)
            .clear()
            .type(`${checkIn}{enter}`);
        cy.get('.react-datepicker__input-container input')
            .eq(1)
            .clear()
            .type(`${checkOut}{enter}`);
        cy.get('button').contains('Check Availability').click();

        cy.get('h2').should('contain.text', 'Our Rooms');
        cy.get('p.lead.text-muted').should('contain.text', 'Comfortable beds and delightful breakfast from locally sourced ingredients');
    });
});