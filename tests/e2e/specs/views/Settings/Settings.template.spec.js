describe('Settings#template', () => {
  it('should render correctly', () => {
    const parent = '.sidebar-panel--settings';
    const selectors = [
      '',
      'h1',
      'section.base-section--theme > h2.base-section__title',
      'div.base-select--theme-change-theme > span.base-select__label-wrapper',
      'option[value="light"]:nth-child(1)',
      'option[value="dark"]:nth-child(2)',
      'section.base-section--text > h2.base-section__title',
      'div.base-input--text-font-size > span.base-input__title',
      'div.base-input--text-font-size > div.base-input__form-wrapper--unit > input.base-input__input--unit',
      'div.base-input--text-paragraph-indent > span.base-input__title',
      'div.base-input--text-paragraph-indent > div.base-input__form-wrapper--unit > input.base-input__input--unit',
      'div.base-input--text-line-height > span.base-input__title',
      'div.base-input--text-line-height > div.base-input__form-wrapper--unit > input.base-input__input--unit',
      'section.base-section--texteditor > h2.base-section__title',
      'div.base-input--texteditor-max-width > span.base-input__title',
      'div.base-input--texteditor-max-width > div.base-input__form-wrapper--unit > input.base-input__input--unit',
      'div.base-input--texteditor-margin-top > span.base-input__title',
      'div.base-input--texteditor-margin-top > div.base-input__form-wrapper--unit > input.base-input__input--unit',
      'div.base-input--texteditor-margin-bottom > span.base-input__title',
      'div.base-input--texteditor-margin-bottom > div.base-input__form-wrapper--unit > input.base-input__input--unit',
      'section.base-section--stats > h2.base-section__title',
      'div.base-select--stats-formula-ingredient > span.base-select__label-wrapper',
      'div.base-select--stats-formula-ingredient > option[value="characters"]:nth-child(1)',
      'div.base-select--stats-formula-ingredient > option[value="charactersWithoutSpaces"]:nth-child(2)',
      'div.base-select--stats-formula-ingredient > option[value="words"]:nth-child(3)',
      'div.base-select--stats-formula-ingredient > option[value="paragraphs"]:nth-child(4)',
      'div.base-input--stats-formula-divider > span.base-input__title',
      'div.base-input--stats-formula-divider > div.base-input__form-wrapper > input.base-input__input',
      'div.base-text--stats-formula-tip',
      'section.base-section--statusbar > h2.base-section__title',
      'div.base-toggle--statusbar-is-visible > span.base-toggle__label-wrapper',
      'div.base-toggle--statusbar-is-visible > div.base-toggle__form-wrapper > div.base-toggle__input',
      'section.base-section--statusbar-content > h2.base-section__title',
      'div.base-toggle--statusbar-content-words > span.base-toggle__label-wrapper',
      'div.base-toggle--statusbar-content-words > div.base-toggle__form-wrapper > div.base-toggle__input',
      'div.base-toggle--statusbar-content-pages > span.base-toggle__label-wrapper',
      'div.base-toggle--statusbar-content-pages > div.base-toggle__form-wrapper > div.base-toggle__input',
      'div.base-toggle--statusbar-content-paragraphs > span.base-toggle__label-wrapper',
      'div.base-toggle--statusbar-content-paragraphs > div.base-toggle__form-wrapper > div.base-toggle__input',
      'div.base-toggle--statusbar-content-characters > span.base-toggle__label-wrapper',
      'div.base-toggle--statusbar-content-characters > div.base-toggle__form-wrapper > div.base-toggle__input',
      'section.base-section--misc > h2.base-section__title',
      'div.base-toggle--misc-spellchecker > span.base-toggle__label-wrapper',
      'div.base-toggle--misc-spellchecker > div.base-toggle__form-wrapper > div.base-toggle__input',
      'div.base-select--misc-language > span.base-select__label-wrapper',
      'div.base-select--misc-language > option[value="en"]:nth-child(1)',
      'div.base-select--misc-language > option[value="pl"]:nth-child(2)',
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
