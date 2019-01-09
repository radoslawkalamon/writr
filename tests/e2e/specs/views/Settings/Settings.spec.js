import EN_TEXT_SETTINGS from '@/i18n/en/settings/index.json';

describe('Settings', () => {
  describe('Theme change', () => {
    it('Should can change theme to light', () => {
      cy.clearLocalStorage();
      cy.visit('/');

      cy.get('.sidebar-button--settings')
        .click();

      cy.get('.base-select--theme-change-theme .base-select__input')
        .select('light');

      cy.get('#app')
        .should('have.class', 'writr-theme--light');
    });
  });

  describe('Language change', () => {
    it('should can change language', () => {
      cy.clearLocalStorage();
      cy.visit('/');

      cy.get('.sidebar-button--settings')
        .click();

      cy.get('.base-select--misc-language .base-select__input')
        .select('en');

      cy.get('.base-header')
        .contains(EN_TEXT_SETTINGS.title);

      cy.get('.base-section--theme .base-section__title')
        .contains(EN_TEXT_SETTINGS.theme.title);

      cy.get('.base-section--text .base-section__title')
        .contains(EN_TEXT_SETTINGS.text.title);

      cy.get('.base-section--texteditor .base-section__title')
        .contains(EN_TEXT_SETTINGS.textEditor.title);

      cy.get('.base-section--misc .base-section__title')
        .contains(EN_TEXT_SETTINGS.misc.title);
    });
  });
});
