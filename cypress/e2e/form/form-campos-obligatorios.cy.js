describe('Formulario de consulta - Campos obligatorios', () => {
  
  beforeEach(() => {
    cy.visit("https://automationintesting.online/");
  });

  // ============================================
  // 1. TODOS LOS CAMPOS VACÍOS
  // ============================================
  it('Debe mostrar errores cuando todos los campos están vacíos', () => {
    cy.fixture('usuarios').then((datos) => {
      // Aseguro que todos los campos estan vacios
      cy.get("input[data-testid='ContactName']").clear();
      cy.get("input[data-testid='ContactEmail']").clear();
      cy.get("input[data-testid='ContactPhone']").clear();
      cy.get("input[data-testid='ContactSubject']").clear();
      cy.get("[data-testid='ContactDescription']").clear();
      
      // Envio
      cy.contains('button', "Submit").click();
      
      // Verifico que TODOS los errores aparecen
      cy.contains('Name may not be blank').should('be.visible');
      cy.contains('Email may not be blank').should('be.visible');
      cy.contains('Phone may not be blank').should('be.visible');
      cy.contains('Subject may not be blank').should('be.visible');
      cy.contains('Message may not be blank').should('be.visible');
      
      // Verifico que NO hay mensaje de exito
      cy.contains('Thanks for').should('not.exist');
    });
  });

  // ============================================
  // 2. SOLO FALTA EL EMAIL
  // ============================================
  it('Debe mostrar error cuando solo falta el email', () => {
    cy.fixture('usuarios').then((datos) => {
      const usuario = datos.usuarios.sinEmail;
      
      // Completo todos los campos SIN el email
      cy.get("input[data-testid='ContactName']").type(usuario.name);
      // Email: NO lo lleno
      cy.get("input[data-testid='ContactPhone']").type(usuario.phone);
      cy.get("input[data-testid='ContactSubject']").type(usuario.subject);
      cy.get("[data-testid='ContactDescription']").type(usuario.message);
      
      // Envio
      cy.contains('button', "Submit").click();
      
      // Verifico que SOLO aparece el error del email
      cy.contains('Name may not be blank').should('not.exist');
      cy.contains('Email may not be blank').should('be.visible');  
      cy.contains('Phone may not be blank').should('not.exist');
      cy.contains('Subject may not be blank').should('not.exist');
      cy.contains('Message may not be blank').should('not.exist');
      
      // Verifico que NO hay mensaje de exito
      cy.contains('Thanks for').should('not.exist');
    });
  });

  // ============================================
  // 3. SOLO FALTA EL TELEFONO
  // ============================================
  it('Debe mostrar error cuando solo falta el teléfono', () => {
    cy.fixture('usuarios').then((datos) => {
      const usuario = datos.usuarios.sinPhone;
      
      // Completo todos los campos SIN el teléfono
      cy.get("input[data-testid='ContactName']").type(usuario.name);
      cy.get("input[data-testid='ContactEmail']").type(usuario.email);
      // Telefono: NO lo lleno
      cy.get("input[data-testid='ContactSubject']").type(usuario.subject);
      cy.get("[data-testid='ContactDescription']").type(usuario.message);
      
      // Envio
      cy.contains('button', "Submit").click();
      
      // Verifico que SOLO aparece el error del telefono
      cy.contains('Name may not be blank').should('not.exist');
      cy.contains('Email may not be blank').should('not.exist');
      cy.contains('Phone may not be blank').should('be.visible'); 
      cy.contains('Subject may not be blank').should('not.exist');
      cy.contains('Message may not be blank').should('not.exist');
      
      // Verifico que NO hay mensaje de exito
      cy.contains('Thanks for').should('not.exist');
    });
  });

  // ============================================
  // 4. SOLO FALTA EL ASUNTO
  // ============================================
  it('Debe mostrar error cuando solo falta el asunto', () => {
    cy.fixture('usuarios').then((datos) => {
      const usuario = datos.usuarios.soloFaltaSubject;
      
      // Completo todos los campos SIN el asunto
      cy.get("input[data-testid='ContactName']").type(usuario.name);
      cy.get("input[data-testid='ContactEmail']").type(usuario.email);
      cy.get("input[data-testid='ContactPhone']").type(usuario.phone);
      //Asunto: NO lo lleno
      cy.get("[data-testid='ContactDescription']").type(usuario.message);
      
      // Envio
      cy.contains('button', "Submit").click();
      
      // Verifico que SOLO aparece el error del asunto
      cy.contains('Name may not be blank').should('not.exist');
      cy.contains('Email may not be blank').should('not.exist');
      cy.contains('Phone may not be blank').should('not.exist');
      cy.contains('Subject may not be blank').should('be.visible'); 
      cy.contains('Message may not be blank').should('not.exist');
      
      // Verifico que NO hay mensaje de exito
      cy.contains('Thanks for').should('not.exist');
    });
  });

  // ============================================
  // 5. SOLO FALTA EL NOMBRE
  // ============================================
  it('Debe mostrar error cuando solo falta el nombre', () => {
    cy.fixture('usuarios').then((datos) => {
      const usuario = datos.usuarios.sinNombre;
      
      // Completo todos los campos SIN el nombre
      // Nombre: NO lo lleno
      cy.get("input[data-testid='ContactEmail']").type(usuario.email);
      cy.get("input[data-testid='ContactPhone']").type(usuario.phone);
      cy.get("input[data-testid='ContactSubject']").type(usuario.subject);
      cy.get("[data-testid='ContactDescription']").type(usuario.message);
      
      // Envio
      cy.contains('button', "Submit").click();
      
      //  Verifico que SOLO aparece el error del nombre
      cy.contains('Name may not be blank').should('be.visible'); 
      cy.contains('Email may not be blank').should('not.exist');
      cy.contains('Phone may not be blank').should('not.exist');
      cy.contains('Subject may not be blank').should('not.exist');
      cy.contains('Message may not be blank').should('not.exist');
      
      // Verifico que NO hay mensaje de exito
      cy.contains('Thanks for').should('not.exist');
    });
  });

  // ============================================
  // 6. SOLO FALTA EL MENSAJE
  // ============================================
  it('Debe mostrar error cuando solo falta el mensaje', () => {
    cy.fixture('usuarios').then((datos) => {
      const usuario = datos.usuarios.sinMensaje;  // ✅ Asegúrate que se llame "sinMensaje"
      
      // Completo todos los campos SIN el mensaje
      cy.get("input[data-testid='ContactName']").type(usuario.name);
      cy.get("input[data-testid='ContactEmail']").type(usuario.email);
      cy.get("input[data-testid='ContactPhone']").type(usuario.phone);
      cy.get("input[data-testid='ContactSubject']").type(usuario.subject);
      // Mensaje: NO lo lleno
      
      // Envio
      cy.contains('button', "Submit").click();
      
      // Verifico que SOLO aparece el error del mensaje
      cy.contains('Name may not be blank').should('not.exist');
      cy.contains('Email may not be blank').should('not.exist');
      cy.contains('Phone may not be blank').should('not.exist');
      cy.contains('Subject may not be blank').should('not.exist');
      cy.contains('Message may not be blank').should('be.visible'); 
      
      // Verifico que NO hay mensaje de éxito
      cy.contains('Thanks for').should('not.exist');
    });
  });
});