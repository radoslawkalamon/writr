describe('Settings#state', () => {
  it('should presist state after reload', () => {
    const selectors = [
      '.base-input--text-font-size .base-input__input',
      '.base-input--text-paragraph-indent .base-input__input',
      '.base-input--text-line-height .base-input__input',
      '.base-input--texteditor-max-width .base-input__input',
      '.base-input--texteditor-margin-top .base-input__input',
      '.base-input--texteditor-margin-bottom .base-input__input',
    ];

    const values = {
      [selectors[0]]: 17,
      [selectors[1]]: 60,
      [selectors[2]]: 1,
      [selectors[3]]: 600,
      [selectors[4]]: 20,
      [selectors[5]]: 30,
    };

    cy.clearLocalStorage();
    cy.visit('/');

    cy.get('.sidebar-button--settings')
      .click();

    selectors.forEach((element) => {
      cy.get(`.sidebar-panel--settings ${element}`)
        .clear()
        .type(`${values[element]}{enter}`);
    });

    cy.visit('/');

    cy.get('.sidebar-button--settings')
      .click();

    selectors.forEach((element) => {
      cy.get(`.sidebar-panel--settings ${element}`)
        .should('have.value', values[element].toString());
    });
  });
});
