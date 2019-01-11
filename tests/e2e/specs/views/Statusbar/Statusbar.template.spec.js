describe('Statusbar#template', () => {
  it('should render correctly', () => {
    const selectors = [
      '#app > div.statusbar:nth-child(2) > div.statusbar-item.statusbar-item--words:nth-child(1) > span.statusbar-item__label:nth-child(1)',
      '#app > div.statusbar:nth-child(2) > div.statusbar-item.statusbar-item--words:nth-child(1) > span.statusbar-item__value:nth-child(2)',
      '#app > div.statusbar:nth-child(2) > div.statusbar-item.statusbar-item--pages:nth-child(2) > span.statusbar-item__label:nth-child(1)',
      '#app > div.statusbar:nth-child(2) > div.statusbar-item.statusbar-item--pages:nth-child(2) > span.statusbar-item__value:nth-child(2)',
      '#app > div.statusbar:nth-child(2) > div.statusbar-item.statusbar-item--paragraphs:nth-child(3) > span.statusbar-item__label:nth-child(1)',
      '#app > div.statusbar:nth-child(2) > div.statusbar-item.statusbar-item--paragraphs:nth-child(3) > span.statusbar-item__value:nth-child(2)',
      '#app > div.statusbar:nth-child(2) > div.statusbar-item.statusbar-item--characters:nth-child(4) > span.statusbar-item__label:nth-child(1)',
      '#app > div.statusbar:nth-child(2) > div.statusbar-item.statusbar-item--characters:nth-child(4) > span.statusbar-item__value:nth-child(2)',
      '#app > div.statusbar:nth-child(2) > div.statusbar-clock:nth-child(5)',
    ];

    cy.clearLocalStorage();
    cy.visit('/');

    selectors.forEach((selector) => {
      cy.get(`${selector}`)
        .should('exist');
    });
  });
});
