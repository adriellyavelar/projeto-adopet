Cypress.Commands.add('login', (email, senha) => {
    cy.get('input[name="email"]').type(email);
    cy.get('input[name="password"]').type(senha);
    cy.get('[data-test="submit-button"]').click();
})

Cypress.Commands.add('cadastrar', (nome, email, senha) => { 
    cy.get('input[name="nome"]').type(nome);
    cy.get('input[name="email"]').type(email);
    cy.get('input[name="password"]').type(senha);
    cy.get('input[name="confirm_password"]').type(senha);
    cy.get('[data-test="submit-button"]').click();
})

