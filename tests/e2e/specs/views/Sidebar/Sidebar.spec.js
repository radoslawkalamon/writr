describe('Sidebar', () => {
  describe('Settings panel toggle', () => {
    it('Should show Settings panel after click', () => {
      cy.clearLocalStorage();
      cy.visit('/');

      cy.get('.sidebar-button--settings')
        .click();

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
        .click();

      cy.get('.sidebar-panel--settings')
        .should('not.exist');
    });
  });

  describe('Save file', () => {
    it('should save file with text from TextEditor', () => {
      // cy.get('.sidebar-button--download')
      //   .click();
    });
  });
});
