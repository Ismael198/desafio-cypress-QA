/// <reference types="cypress" />
let dadosRegistro

describe('Funcionalidade Registro', () => {
  before(() => {
    cy.fixture('register').then((registro) => {
      dadosRegistro = registro
      const randomPart = Cypress._.random(1000, 9999)
      dadosRegistro.email = `nunes${randomPart}@nunes.com`
    })
  })

  beforeEach(() => {
    cy.visit('minha-conta/')
    cy.get('.page-title').should('contain', 'Minha conta')
  })

  it('Registro com sucesso usando Comando customizado', () => {
    cy.register(dadosRegistro.email, dadosRegistro.senha)
    cy.get('.woocommerce-MyAccount-content').should('contain', 'Olá')
  })
})