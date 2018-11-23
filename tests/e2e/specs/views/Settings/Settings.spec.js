describe('Settings', () => {
  describe('Theme change', () => {
    it('Should can change theme to light', () => {
      cy.clearLocalStorage();
      cy.visit('/');

      cy.get('.sidebar-button--settings')
        .click();

      cy.get('.base-section--theme select[data-v-1e1f78a0]')
        .select('light');

      cy.get('#app')
        .should('have.class', 'writr-theme--light');
    });
  });

  describe('Language change', () => {

  });
});
