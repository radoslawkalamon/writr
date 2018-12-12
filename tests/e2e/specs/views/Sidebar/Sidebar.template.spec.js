describe('Sidebar#template', () => {
  it('should render correctly', () => {
    const parent = '.sidebar';
    const selectors = [
      '',
      'button.sidebar-button--download > img',
      'button.sidebar-button--stats > img',
      'button.sidebar-button--settings > img',
    ];

    cy.clearLocalStorage();
    cy.visit('/');

    selectors.forEach((selector) => {
      cy.get(`${parent} ${selector}`)
        .should('exist');
    });
  });
});
