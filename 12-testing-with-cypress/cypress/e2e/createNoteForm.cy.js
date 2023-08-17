describe('Create Note Form Test', () => {
  beforeEach(() => {
    cy.visit('/create_note');
    cy.window().its('store').invoke('dispatch', { type: 'RESET' });
  })

  /**
   * Test: Form Elements Existence
   *
   * Description:
   * This test verifies that the create note form contains the necessary input fields and a submit button.
   *
   * Steps:
   * 1. Visit the 'create_note' page.
   * 2. Verify the existence of the form.
   * 3. Within the form, verify the existence of the title input, content textarea, and submit button.
   */
  it('has a form', () => {
    // Step 1: Visiting the page is handled in the beforeEach hook

    // Step 2: Verify the existence of the form
    cy.get('form').should('exist');
    cy.get('form').within(() => {

      // Step 3: Within the form, verify the existence of specific elements
      cy.get('input[name="title"]').should('exist');
      cy.get('textarea[name="content"]').should('exist');
      cy.get('button[type="submit"]').should('exist');
    })
  })

  it('test form input and textarea elements', () => {
    cy.get('[data-test="create-new-note"]').find('input[name="title"]').type('Test Title');
    cy.get('[data-test="create-note-content"]').type('Test Content');
  });

  it('test   form submit button on an empty form', () => {
    cy.get('[data-test="create-note-btn"').click();
  })

  it('submits a new note and updates the Redux store', () => {
    cy.get('input[name="title"]').type('Test Note Title');
    cy.get('textarea[name="content"]').type('This is the content of the test note');
    cy.get('[data-test="create-note-btn"]').click();
  });

  it('validates form fields', () => {
    cy.get('[data-test="create-note-btn"]').click();

    cy.get('input[name="title"]').should('have.attr', 'required');
    cy.get('[data-test="create-note-content"]').should('have.attr', 'required');
  });
})
