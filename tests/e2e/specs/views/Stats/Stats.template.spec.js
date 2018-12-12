describe('Stats#template', () => {
  it('should render correctly', () => {
    const parent = '.sidebar-panel--stats';
    const selectors = [
      '',
      'h1',
      'div.base-labeled-value--characters > strong.base-labeled-value__value',
      'div.base-labeled-value--characters > span.base-labeled-value__label',
      'div.base-labeled-value--characters-without-spaces > strong.base-labeled-value__value',
      'div.base-labeled-value--characters-without-spaces > span.base-labeled-value__label',
      'div.base-labeled-value--words > strong.base-labeled-value__value',
      'div.base-labeled-value--words > span.base-labeled-value__label',
      'div.base-labeled-value--paragraphs > strong.base-labeled-value__value',
      'div.base-labeled-value--paragraphs > span.base-labeled-value__label',
      'div.base-labeled-value--pages > strong.base-labeled-value__value',
      'div.base-labeled-value--pages > span.base-labeled-value__label',
    ];

    cy.clearLocalStorage();
    cy.visit('/');

    cy.get('.sidebar-button--stats')
      .click();

    selectors.forEach((selector) => {
      cy.get(`${parent} ${selector}`)
        .should('exist');
    });
  });
});
