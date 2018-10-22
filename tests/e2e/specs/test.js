// https://docs.cypress.io/api/introduction/api.html

describe('My First Test', () => {
  it('Check settings permament state', () => {
    cy.visit('/');
    cy.clearLocalStorage();
    cy.get('.sidebar-button--settings').click();
    cy.get('.base-section--text .base-input:first-of-type .base-input__input').type('{backspace}{backspace}16{enter}');
    cy.visit('/');
    cy.get('.sidebar-button--settings').click();
    cy.get('.base-section--text .base-input:first-of-type .base-input__input').should('have.value', '16');
  });
});
