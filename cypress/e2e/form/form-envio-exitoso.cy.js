describe("Formulario de consulta",()=>{

    beforeEach(() => {
        cy.visit("https://automationintesting.online/");
  });

    it("Datos con usuario completo  y mostrar mensaje de éxito", ()=>{
       cy.fixture('usuarios').then((datos)=>{
        const usuario = datos.usuarios.completoValido
        //completo el formulario
        cy.get("input[data-testid='ContactName']").type(usuario.name)
        cy.get("input[data-testid='ContactEmail']").type(usuario.email)
        cy.get("input[data-testid='ContactPhone']").type(usuario.phone)
        cy.get("input[data-testid='ContactSubject']").type(usuario.subject)
        cy.get("[data-testid='ContactDescription']").type(usuario.message)
        //envio el formulario
        cy.contains('button', "Submit").click()
        //verifico que no haya errores
        cy.get('.alert-danger').should('not.exist');
        //verifico mensaje de éxito
        cy.contains('Thanks for ').should('be.visible')
        //verifico que el mensaje contiene el nombre del usuario
        cy.contains('Thanks for').should('contain', usuario.name);
       })
       
    })
})