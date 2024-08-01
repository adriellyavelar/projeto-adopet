describe('Validação do botão "Ver pets disponíveis para adoção"', () => {
    beforeEach(() => {
      cy.visit('https://adopet-frontend-cypress.vercel.app/');
      cy.get('.button').click();
    });

    it('Aciona o botão "Ver pets disponíveis para adoção"', () => {
      cy.contains('p', 'Olá! Veja os amigos disponíveis para adoção!');
    });

    it('Verifica imagens dos animais', () => {
      cy.get('.cards').should('be.visible');
    })
  })