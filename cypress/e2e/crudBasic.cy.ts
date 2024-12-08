describe('Teste crud pessoa', () => {
    beforeEach(() => {
      cy.visit('http://localhost:5173');
    });
  
    it('Clique no botão sem dados no form', () => {

        cy.get('#add-pessoa').click();
        cy.get('#submit-pessoa').should('exist');
        cy.get('#submit-pessoa').click();
    });

    it('Clique no botão apenas com nome', () => {

        cy.get('#add-pessoa').click();
        cy.get('#submit-pessoa').should('exist');
        cy.get('#form-nome').type('Gustavo Mioto');
        cy.get('#submit-pessoa').click();
    });

    it('Clique no botão apenas com nome e email', () => {

        cy.get('#add-pessoa').click();
        cy.get('#submit-pessoa').should('exist');
        cy.get('#form-nome').type('Gustavo Mioto');
        cy.get('#form-email').type('gustavinho@gmail.com');
        cy.get('#submit-pessoa').click();
    });

    it('Fazer crud completo de pessoa', () => {

        cy.get('#add-pessoa').click();
        cy.get('#form-nome').type('Gustavo Mioto');
        cy.get('#form-email').type('gustavinho@gmail.com');
        cy.get('#form-data').type('1994-02-11');
        cy.get('#submit-pessoa').click();
        cy.url().should('include', '/');
        cy.get('.Toastify__toast-container').should('exist');
    });

    it('Editar pessoa', () => {

        cy.get('#edit-pessoa').click();
        cy.get('#form-nome').clear().type('Gustavo Mioto Update');
        cy.get('#form-email').clear().type('gustavinhoUpdate@gmail.com');
        cy.get('#form-data').clear().type('1995-02-15');
        cy.get('#submit-pessoa').click();
        cy.url().should('include', '/');
        cy.get('.Toastify__toast-container').should('exist');
    });

    it('Deletar pessoa', () => {

        cy.get('#delete-pessoa').click();
        cy.get('#delete-confirm').click();
        cy.url().should('include', '/');
        cy.get('.Toastify__toast-container').should('exist');
    });
  });