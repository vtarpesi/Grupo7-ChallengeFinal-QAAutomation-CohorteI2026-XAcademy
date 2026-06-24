describe('Login perfil Admin', () => {


  it('Login Exitoso', () => {
    cy.login('admin', 'password')
    cy.log('Test Login Admin')
    cy.contains('Restful Booker Platform Demo').should('be.visible');
  })

  it('Login con usuario incorrecto', () => {
    cy.login('administrador', 'password')
    cy.log('Test Login usuario Incorrecto')
    cy.contains('Invalid credentials').should('be.visible');
  })

  it('Login con password incorrecto', () => {
    cy.login('administrador', 'passw')
    cy.log('Test Login Password Incorrecto')
    cy.contains('Invalid credentials').should('be.visible');
  })

  it('Crear un cuarto con datos correctos', () => {
    cy.login('admin', 'password')
    cy.log('Test Nuevo Cuarto')
    cy.newRooms('105', '555')
    cy.get('[data-testid="roomlisting"]') // <--- Reemplaza por el selector real de la fila en esa web
      .last()                 // Se posiciona estrictamente en la última de la lista
      .within(() => {         // Limita la búsqueda solo a esa última fila
        // Valida que los datos dentro de la última fila coincidan con lo creado
        cy.contains('105').should('be.visible');
        cy.contains('555').should('be.visible');
      });
  })
})