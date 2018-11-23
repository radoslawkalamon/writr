describe('TextEditor#attrs', () => {
  it('should change attrs of Text Editor after changing settings', () => {
    const parent = '.sidebar-panel--settings';
    const selectors = [
      '.base-input--text-font-size .base-input__input',
      '.base-input--text-paragraph-indent .base-input__input',
      '.base-input--text-line-height .base-input__input',
      '.base-input--texteditor-max-width .base-input__input',
      '.base-input--texteditor-margin-top .base-input__input',
      '.base-input--texteditor-margin-bottom .base-input__input',
    ];

    const spellCheckSelector = `${parent} .base-toggle--misc-spellchecker .base-toggle__input`;
    const spellCheckValue = 'false';

    const values = {
      [selectors[0]]: 17,
      [selectors[1]]: 60,
      [selectors[2]]: 1.25,
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

    cy.get(spellCheckSelector)
      .click();

    cy.get('#text-editor')
      .should('have.css', 'font-size', `${values[selectors[0]]}px`)
      .should('have.css', 'line-height', `${values[selectors[2]] * values[selectors[0]]}px`)
      .should('have.css', 'text-indent', `${values[selectors[1]]}px`)
      .should('have.css', 'max-width', `${values[selectors[3]]}px`)
      .should('have.css', 'min-height', `calc(-${values[selectors[4]] + values[selectors[5]]}px + 100%)`)
      .should('have.css', 'margin-top', `${values[selectors[4]]}px`)
      .should('have.css', 'margin-bottom', `${values[selectors[5]]}px`)
      .should('have.attr', 'spellcheck', spellCheckValue);
  });
});
