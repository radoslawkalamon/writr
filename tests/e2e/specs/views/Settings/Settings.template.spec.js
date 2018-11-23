describe('Settings#template', () => {
  it('should render correctly', () => {
    const parent = '.sidebar-panel--settings';
    const selectors = [
      '',
      '.base-header:nth-child(1)',
      '.base-section--theme:nth-child(2) .base-select--theme-change-theme:nth-child(1)',
      '.base-section--text:nth-child(3) .base-input--text-font-size:nth-child(1)',
      '.base-section--text:nth-child(3) .base-input--text-paragraph-indent:nth-child(2)',
      '.base-section--text:nth-child(3) .base-input--text-line-height:nth-child(3)',
      '.base-section--texteditor:nth-child(4) .base-input--texteditor-max-width:nth-child(1)',
      '.base-section--texteditor:nth-child(4) .base-input--texteditor-margin-top:nth-child(2)',
      '.base-section--texteditor:nth-child(4) .base-input--texteditor-margin-bottom:nth-child(3)',
      '.base-section--misc:nth-child(5) .base-toggle--misc-spellchecker:nth-child(1)',
      '.base-section--misc:nth-child(5) .base-select--misc-language:nth-child(2)',
      '.base-text:nth-child(6)',
    ];

    cy.clearLocalStorage();
    cy.visit('/');

    cy.get('.sidebar-button--settings')
      .click();

    selectors.forEach((selector) => {
      cy.get(`${parent} ${selector}`)
        .should('exist');
    });
  });
});
