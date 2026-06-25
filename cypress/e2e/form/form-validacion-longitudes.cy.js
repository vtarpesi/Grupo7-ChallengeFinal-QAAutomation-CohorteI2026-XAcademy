describe('Formulario de consulta - Validaciones de longitud', () => {

  beforeEach(() => {
    cy.visit("https://automationintesting.online/");
  });

  // ============================================
  // 1. VALORES MINIMOS
  // ============================================
it('Debe aceptar valores en el minimo exacto', () => {
    cy.fixture('usuarios').then((datos) => {
      const usuario = datos.usuarios.minimoValido;
      
      // Completo el formulario
      cy.get("input[data-testid='ContactName']").type(usuario.name);
      cy.get("input[data-testid='ContactEmail']").type(usuario.email);
      cy.get("input[data-testid='ContactPhone']").type(usuario.phone);
      cy.get("input[data-testid='ContactSubject']").type(usuario.subject);
      cy.get("[data-testid='ContactDescription']").type(usuario.message);
      
      // Envio
      cy.contains('button', "Submit").click();
      
      // Verifico que NO hay errores de longitud
      cy.contains('Phone must be between 11 and 21 characters.').should('not.exist');
      cy.contains('Subject must be between 5 and 100 characters.').should('not.exist');
      cy.contains('Message must be between 20 and 2000 characters.').should('not.exist');
      
      // Verifico que NO hay errores de campos vacios
      cy.contains('Name may not be blank').should('not.exist');
      cy.contains('Email may not be blank').should('not.exist');
      cy.contains('Phone may not be blank').should('not.exist');
      cy.contains('Subject may not be blank').should('not.exist');
      cy.contains('Message may not be blank').should('not.exist');
      
      // Verifico mensaje de exito
      cy.contains('Thanks for').should('be.visible');
    });
  });

  // ============================================
  // 2. VALORES MAXIMOS 
  // ============================================
  it('Debe aceptar valores en el maximo exacto', () => {
    cy.fixture('usuarios').then((datos) => {
      const usuario = datos.usuarios.maximoValido;
      
      // Completo formulario
      cy.get("input[data-testid='ContactName']").type(usuario.name);
      cy.get("input[data-testid='ContactEmail']").type(usuario.email);
      cy.get("input[data-testid='ContactPhone']").type(usuario.phone);
      cy.get("input[data-testid='ContactSubject']").type(usuario.subject);
      cy.get("[data-testid='ContactDescription']").type(usuario.message);
      
      // Envio
      cy.contains('button', "Submit").click();
      
      // Verifico que NO hay errores de longitud
      cy.contains('Phone must be between 11 and 21 characters.').should('not.exist');
      cy.contains('Subject must be between 5 and 100 characters.').should('not.exist');
      cy.contains('Message must be between 20 and 2000 characters.').should('not.exist');
      
      // Verifico mensaje de exito
      cy.contains('Thanks for').should('be.visible');
    });
  });

  // ============================================
  // 3. TELEFONO INVALIDO (menor al minimo)
  // ============================================
  it('Debe mostrar error cuando el telefono tiene menos de 11 caracteres', () => {
    cy.fixture('usuarios').then((datos) => {
      const usuario = datos.usuarios.phoneInvalido;
      
      // Completo todos los campos
      cy.get("input[data-testid='ContactName']").type(usuario.name);
      cy.get("input[data-testid='ContactEmail']").type(usuario.email);
      // Telefono: 10 caracteres (invalido)
      cy.get("input[data-testid='ContactPhone']").type(usuario.phone);
      cy.get("input[data-testid='ContactSubject']").type(usuario.subject);
      cy.get("[data-testid='ContactDescription']").type(usuario.message);
      
      // Envio
      cy.contains('button', "Submit").click();
      
      // Verifico que aparece el error del teléfono
      cy.contains('Phone must be between 11 and 21 characters.').should('be.visible');
      
      // Verifico que NO aparecen otros errores
      cy.contains('Name may not be blank').should('not.exist');
      cy.contains('Email may not be blank').should('not.exist');
      cy.contains('Subject may not be blank').should('not.exist');
      cy.contains('Message may not be blank').should('not.exist');
      cy.contains('Subject must be between 5 and 100 characters.').should('not.exist');
      cy.contains('Message must be between 20 and 2000 characters.').should('not.exist');
      
      // Verifico que NO hay mensaje de exito
      cy.contains('Thanks for').should('not.exist');
    });
  });

  // ============================================
  // 4. ASUNTO INVALIDO (menor al minimo)
  // ============================================
  it('Debe mostrar error cuando el asunto tiene menos de 5 caracteres', () => {
    cy.fixture('usuarios').then((datos) => {
      const usuario = datos.usuarios.subjectInvalido;
      
      // Completo todos los campos
      cy.get("input[data-testid='ContactName']").type(usuario.name);
      cy.get("input[data-testid='ContactEmail']").type(usuario.email);
      cy.get("input[data-testid='ContactPhone']").type(usuario.phone);
      // Asunto: 4 caracteres (invalido)
      cy.get("input[data-testid='ContactSubject']").type(usuario.subject);
      cy.get("[data-testid='ContactDescription']").type(usuario.message);
      
      // Envio
      cy.contains('button', "Submit").click();
      
      // Verifico que aparece el error del asunto
      cy.contains('Subject must be between 5 and 100 characters.').should('be.visible');
      
      // Verifico que NO aparecen otros errores
      cy.contains('Name may not be blank').should('not.exist');
      cy.contains('Email may not be blank').should('not.exist');
      cy.contains('Phone may not be blank').should('not.exist');
      cy.contains('Message may not be blank').should('not.exist');
      cy.contains('Phone must be between 11 and 21 characters.').should('not.exist');
      cy.contains('Message must be between 20 and 2000 characters.').should('not.exist');
      
      // Verifico que NO hay mensaje de exito
      cy.contains('Thanks for').should('not.exist');
    });
  });

  // ============================================
  // 5. MENSAJE INVALIDO (menor al minimo) 
  // ============================================
it('Debe mostrar error cuando el mensaje tiene menos de 20 caracteres', () => {
    cy.fixture('usuarios').then((datos) => {
      const usuario = datos.usuarios.mensajeInvalido;
      
      // Completo todos los campos
      cy.get("input[data-testid='ContactName']").type(usuario.name);
      cy.get("input[data-testid='ContactEmail']").type(usuario.email);
      cy.get("input[data-testid='ContactPhone']").type(usuario.phone);
      cy.get("input[data-testid='ContactSubject']").type(usuario.subject);
      // Mensaje: 12 caracteres (invalido)
      cy.get("[data-testid='ContactDescription']").type(usuario.message);
      
      // Envio
      cy.contains('button', "Submit").click();
      
      // CORRECTO: Verifico que SÍ hay error de longitud
      cy.contains('Message must be between 20 and 2000 characters.').should('be.visible');
    
      // Verifico que NO hay error de campo vacío
      cy.contains('Message may not be blank').should('not.exist');
    
      // Verifico que NO hay mensaje de éxito
      cy.contains('Thanks for').should('not.exist');
    });
  });
});