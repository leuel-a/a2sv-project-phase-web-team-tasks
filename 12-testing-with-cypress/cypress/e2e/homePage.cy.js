describe('Home Page Tests', () => {
  beforeEach(() => {
    cy.visit('/');
  })

  it('has a navbar', () => {
    cy.get('nav').should('exist');
    cy.get('nav').within(() => {
      cy.get('#nav-brand').should('exist');
      cy.get('#nav-brand').should('have.text', 'A2SV Note Taking Application');
    })
  })

  it('has a create note button', () => {
    cy.get('#create-note-btn').should('exist');
    cy.get('#create-note-btn').should('be.enabled').click();
  })
})
