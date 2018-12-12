describe('Statusbar#template', () => {
  it('should render correctly', () => {
    const parent = '.statusbar';
    const selectors = [
      '',
      'div.statusbar-item--words > span.statusbar-item__label',
      'div.statusbar-item--words > span.statusbar-item__value',
      'div.statusbar-item--pages > span.statusbar-item__label',
      'div.statusbar-item--pages > span.statusbar-item__value',
      'div.statusbar-item--paragraphs > span.statusbar-item__label',
      'div.statusbar-item--paragraphs > span.statusbar-item__value',
      'div.statusbar-item--characters > span.statusbar-item__label',
      'div.statusbar-item--characters > span.statusbar-item__value',
      'div.statusbar-clock',
    ];

    cy.clearLocalStorage();
    cy.visit('/');

    selectors.forEach((selector) => {
      cy.get(`${parent} ${selector}`)
        .should('exist');
    });
  });
});
