describe('App#template', () => {
  it('should render correctly', () => {
    const parent = '#app';
    const selectors = [
      '',
      '.sidebar:nth-child(1) .sidebar__box--top > .sidebar-button--download:nth-child(1) > img',
      '.sidebar:nth-child(1) .sidebar__box--bottom > .sidebar-button--settings:nth-child(1) > img',
      '#text-editor:nth-child(2)',
    ];

    cy.clearLocalStorage();
    cy.visit('/');

    selectors.forEach((selector) => {
      cy.get(`${parent} ${selector}`)
        .should('exist');
    });
  });
});
