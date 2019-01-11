// 
describe('issue#5', () => {
  it('should <meta> viewport have proper content', () => {
    cy.viewport('iphone-5');
    cy.clearLocalStorage();
    cy.visit('/');

    cy.get('meta[name="viewport"]')
      .should('have.attr', 'content')
      .and('include', 'initial-scale=1')
      .and('include', 'maximum-scale=1')
      .and('include', 'user-scalable=0');
  });
});
