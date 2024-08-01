describe('Página login', () => {
    beforeEach(() => {
      cy.visit('https://adopet-frontend-cypress.vercel.app');
      cy.get('[data-test="login-button"]').click();
    });

    it('Deve preencher os campos do login corretamente e autenticar o usuário na página', () => {

      cy.login('adriellyavelaar@gmail.com', 'Teste123');

    });

    it('Deve preencher os campos do login incorretamente e exibir mensagens de erro', () => {

      cy.login('adriellyavelargmail.com', 'teste123');
      cy.contains('Por favor, verifique o email digitado').should('be.visible');
      cy.contains('A senha deve conter pelo menos uma letra maiúscula, um número e ter entre 6 e 15 caracteres').should('be.visible');

    })

  })