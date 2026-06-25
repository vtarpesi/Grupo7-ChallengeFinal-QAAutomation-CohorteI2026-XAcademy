describe('Formulario de consulta - Caracteres especiales', () => {
  
  beforeEach(() => {
    cy.visit("https://automationintesting.online/");
  });

  it('Debe aceptar caracteres especiales en todos los campos', () => {
    cy.fixture('usuarios').then((datos) => {
      const usuario = datos.usuarios.caracteresEspeciales;
      //completo el formulario
      cy.get("input[data-testid='ContactName']").type(usuario.name);
      cy.get("input[data-testid='ContactEmail']").type(usuario.email);
      cy.get("input[data-testid='ContactPhone']").type(usuario.phone);
      cy.get("input[data-testid='ContactSubject']").type(usuario.subject);
      cy.get("[data-testid='ContactDescription']").type(usuario.message);
      //envio el formulario
      cy.contains('button', "Submit").click();
      
      // Verifico que no hay errores
      cy.get('.alert-danger').should('not.exist');
      cy.contains('Thanks for').should('be.visible');
    });
  });
});