
describe('Booking Module', () => {
    beforeEach(() => {
        cy.visit('https://automationintesting.online');
    });

    it('should allow searching for room availability when valid date ranges are entered', () => {

        cy.searchAvailability();
        cy.get('h2').should('contain.text', 'Our Rooms');
        cy.get('p.lead.text-muted').should('contain.text', 'Comfortable beds and delightful breakfast from locally sourced ingredients');
    });

    it('should redirect to the booking page when Book Now button is clicked', () => {
        cy.searchAvailability();
        cy.get('h2').should('contain.text', 'Our Rooms');
        cy.get('p.lead.text-muted').should('contain.text', 'Comfortable beds and delightful breakfast from locally sourced ingredients');
        cy.get('.btn').contains('Book now').first().click();
        cy.url().should('include', '/reservation');
        
    });
    

});