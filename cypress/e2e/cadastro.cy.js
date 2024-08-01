describe('Página de cadastro', () => {
  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('[data-test="register-button"]').click();
  });

  it('Deve preencher os campos do formulário corretamente para cadastrar um novo usuário', () => {

    cy.cadastrar('Adrielly Avelar', 'adriellyavelaar@gmail.com', 'Teste123');
    
  });

  it('Deve preencher os campos do formulário incorretamente e exibir mensagem de erro ao usuário', () => {

    cy.get('[data-test="submit-button"]').click();
    cy.contains('É necessário informar um endereço de email').should('be.visible');
    cy.contains('Crie uma senha').should('be.visible');
    cy.contains('Repita a senha criada acima').should('be.visible');

  })
})