describe('Página principal', () => {
    beforeEach(() => {
      cy.visit('https://adopet-frontend-cypress.vercel.app/');
    });

    it('Verifica mensagem de texto', () => {
      
      cy.contains('h3', 'Boas-vindas!').should('be.visible');
      cy.contains('p', 'Adotar pode mudar uma vida. Que tal buscar seu novo melhor amigo hoje? Vem com a gente!').should('be.visible');
    })
  })