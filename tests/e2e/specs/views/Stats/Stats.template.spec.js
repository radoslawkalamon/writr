describe('Stats#template', () => {
  it('should render correctly', () => {
    const selectors = [
      '#app > div.sidebar-panel.sidebar-panel--stats:nth-child(2) > h1.base-header.base-header--1:nth-child(1)',
      '#app > div.sidebar-panel.sidebar-panel--stats:nth-child(2) > div.base-labeled-value.base-labeled-value--characters:nth-child(2) > strong.base-labeled-value__value:nth-child(1)',
      '#app > div.sidebar-panel.sidebar-panel--stats:nth-child(2) > div.base-labeled-value.base-labeled-value--characters:nth-child(2) > span.base-labeled-value__label:nth-child(2)',
      '#app > div.sidebar-panel.sidebar-panel--stats:nth-child(2) > div.base-labeled-value.base-labeled-value--characters-without-spaces:nth-child(3) > strong.base-labeled-value__value:nth-child(1)',
      '#app > div.sidebar-panel.sidebar-panel--stats:nth-child(2) > div.base-labeled-value.base-labeled-value--characters-without-spaces:nth-child(3) > span.base-labeled-value__label:nth-child(2)',
      '#app > div.sidebar-panel.sidebar-panel--stats:nth-child(2) > div.base-labeled-value.base-labeled-value--words:nth-child(4) > strong.base-labeled-value__value:nth-child(1)',
      '#app > div.sidebar-panel.sidebar-panel--stats:nth-child(2) > div.base-labeled-value.base-labeled-value--words:nth-child(4) > span.base-labeled-value__label:nth-child(2)',
      '#app > div.sidebar-panel.sidebar-panel--stats:nth-child(2) > div.base-labeled-value.base-labeled-value--paragraphs:nth-child(5) > strong.base-labeled-value__value:nth-child(1)',
      '#app > div.sidebar-panel.sidebar-panel--stats:nth-child(2) > div.base-labeled-value.base-labeled-value--paragraphs:nth-child(5) > span.base-labeled-value__label:nth-child(2)',
      '#app > div.sidebar-panel.sidebar-panel--stats:nth-child(2) > div.base-labeled-value.base-labeled-value--pages:nth-child(6) > strong.base-labeled-value__value:nth-child(1)',
      '#app > div.sidebar-panel.sidebar-panel--stats:nth-child(2) > div.base-labeled-value.base-labeled-value--pages:nth-child(6) > span.base-labeled-value__label:nth-child(2)',
    ];

    cy.clearLocalStorage();
    cy.visit('/');

    cy.get('.sidebar-button--stats')
      .click();

    selectors.forEach((selector) => {
      cy.get(`${selector}`)
        .should('exist');
    });
  });
});
