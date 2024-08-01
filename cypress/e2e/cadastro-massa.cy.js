import { usuarios } from '../fixtures/usuarios.json'

describe('Página de cadastro', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
        cy.get('[data-test="register-button"]').click();
    });

    usuarios.forEach(usuario => {
        it('Deve preencher os campos do formulário corretamente para cadastrar um novo usuário', () => {
            cy.get('input[name="nome"]').clear().type(usuario.name);
            cy.get('input[name="email"]').clear().type(usuario.email);
            cy.get('input[name="password"]').clear().type(usuario.password);
            cy.get('input[name="confirm_password"]').clear().type(usuario.password);
            cy.get('[data-test="submit-button"]').click();
        })
    })
});