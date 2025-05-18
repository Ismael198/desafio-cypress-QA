Cypress.Commands.add('login', (usuario, senha) => {
    cy.get('#username').type(usuario)
    cy.get('#password').type(senha, {log: false})
    cy.get('.woocommerce-form > .button').click()
});


Cypress.Commands.add('register', (email, password) => {
  cy.get('#reg_email')
    .should('be.visible')
    .type(email, { parseSpecialCharSequences: false })
  
  // Preenche senha
  cy.get('#reg_password')
    .should('be.visible')
    .type(password, { log: false })
  
  // Clica no botão com tratamento robusto
  cy.get('button[name="register"], input[name="register"]')
    .should('be.visible')
    .click({ force: true })
})
