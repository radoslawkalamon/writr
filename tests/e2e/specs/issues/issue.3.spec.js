describe('issue#3', () => {
  const TEST_TEXT = 'Thisistesttext!Thisistesttext!Thisistesttext!Thisistesttext!';

  before(() => {
    cy.viewport('iphone-5');
    cy.clearLocalStorage();
    cy.visit('/');

    cy.get('.sidebar-button--settings')
      .click();

    cy.get('.sidebar-panel--settings .base-input--text-font-size .base-input__input')
      .invoke('val', '')
      .type('20');

    cy.get('.sidebar-button--settings')
      .click();

    cy.get('#text-editor')
      .invoke('html', '')
      .type(TEST_TEXT);
  });

  it('should viewport scroll X be unscrollable', () => {
    cy.window().then(($window) => {
      $window.scrollTo(500, 0);
      const windowScrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

      cy.wrap(windowScrollLeft).should('equal', 0);
    });
  });
});
