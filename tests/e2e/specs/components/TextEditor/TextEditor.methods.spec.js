describe('TextEditor#methods', () => {
  describe('onChange', () => {
    it('Should create <div> after starting typing in blank TextEditor', () => {
      const TEST_TEXT = 'This is test text!';

      cy.clearLocalStorage();
      cy.visit('/');

      cy.get('#text-editor')
        .invoke('html', '')
        .type(TEST_TEXT);

      cy.get('#text-editor > div').should('exist');
    });
  });

  describe('onPaste', () => {
    it('Should paste plain text into TextEditor', () => {
      // For now there is not way to test paste event
      // Manual tests needed!
    });
  });
});
