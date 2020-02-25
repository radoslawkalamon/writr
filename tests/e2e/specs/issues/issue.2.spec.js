describe('issue#2', () => {
  before(() => {
    const TEST_TEXT = 'This is test text!{ENTER}This is test text!'

    cy.clearLocalStorage()
    cy.visit('/')

    cy.get('#text-editor')
      .invoke('html', '')
      .type(TEST_TEXT)

    cy.get('#text-editor').invoke('css', 'fontSize').as('fontSize')
  })

  it('should TextEditor have 2 children', () => {
    const a = 2

    cy.get('#text-editor').children()
      .should('have.length', a)
  })

  it('should first <div> have margin-bottom: 9px;', function ctx () {
    const a = `${0.75 * parseFloat(this.fontSize, 10)}px`

    cy.get('#text-editor > div:nth-of-type(1)')
      .should('have.css', 'margin-bottom', a)
  })

  it('should second <div> have margin-bottom: 0px;', () => {
    const a = '0px'

    cy.get('#text-editor > div:nth-of-type(2)')
      .should('have.css', 'margin-bottom', a)
  })
})
