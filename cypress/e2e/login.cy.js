/// <reference types="cypress" />

describe('Funcionalidade Login', () => {
  const credenciaisValidas = {
    usuario: 'nunes@nunes.com',
    senha: 'pH45FmDZ7nv6NeG'
  };

  beforeEach(() => {
    cy.visit('minha-conta');
  });

  it('Login com sucesso', () => {
    cy.login(credenciaisValidas.usuario, credenciaisValidas.senha);
    cy.get('.page-title').should('contain', 'Minha conta');
  });

});