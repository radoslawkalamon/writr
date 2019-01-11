describe('Sidebar', () => {
  describe('Settings panel toggle', () => {
    it('Should show Settings panel after click', () => {
      cy.clearLocalStorage();
      cy.visit('/');

      cy.get('.sidebar-button--settings')
        .click();
      cy.get('.sidebar-button--settings')
        .should('have.class', 'sidebar-button--active');

      cy.get('.sidebar-panel--settings')
        .should('exist');
    });

    it('Should hide Settings panel after double click', () => {
      cy.clearLocalStorage();
      cy.visit('/');

      cy.get('.sidebar-button--settings')
        .click();

      cy.get('.sidebar-panel--settings')
        .should('exist');
      cy.get('.sidebar-button--settings')
        .should('have.class', 'sidebar-button--active');

      cy.get('.sidebar-button--settings')
        .click();

      cy.get('.sidebar-panel--settings')
        .should('not.exist');
      cy.get('.sidebar-button--settings')
        .should('not.have.class', 'sidebar-button--active');
    });
  });

  describe('Save file', () => {
    it('should save file with text from TextEditor', () => {
      // Can be tested right now :/
    });
  });

  describe('Stats panel toggle', () => {
    it('Should show Stats panel after click', () => {
      cy.clearLocalStorage();
      cy.visit('/');

      cy.get('.sidebar-button--stats')
        .click();
      cy.get('.sidebar-button--stats')
        .should('have.class', 'sidebar-button--active');

      cy.get('.sidebar-panel--stats')
        .should('exist');
    });
  });

  describe('Toggle panels', () => {
    it('should toggle panels after opening it one after another', () => {
      cy.clearLocalStorage();
      cy.visit('/');

      cy.get('.sidebar-button--settings')
        .click();

      // Assert Settings panel
      cy.get('.sidebar-panel--settings')
        .should('exist');
      cy.get('.sidebar-button--settings')
        .should('have.class', 'sidebar-button--active');

      cy.get('.sidebar-button--stats')
        .click();

      // Assert Stats panel
      cy.get('.sidebar-panel--settings')
        .should('not.exist');
      cy.get('.sidebar-button--settings')
        .should('not.have.class', 'sidebar-button--active');
      cy.get('.sidebar-panel--stats')
        .should('exist');
      cy.get('.sidebar-button--stats')
        .should('have.class', 'sidebar-button--active');
    });
  });
});
