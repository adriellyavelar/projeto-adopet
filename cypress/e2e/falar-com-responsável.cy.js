describe('Validação do botão "Falar com o responsável"', () => {
    it('Visita a página de principal do AdoPet e aciona o botão "Falar com o responsável"', () => {
      cy.visit('https://adopet-frontend-cypress.vercel.app/home');
      cy.get('.header__message').click();
    })
  })