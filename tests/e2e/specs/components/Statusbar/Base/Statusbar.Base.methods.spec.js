describe('@Components/Statusbar/Base#methods', () => {
  describe('updateSizeToStore', () => {
    it('should Text Editor height be not equal than viewport height', () => {
      const WIDTH = 1200
      const HEIGHT = 720
      const WAIT_TIME = 500

      cy.viewport(WIDTH, HEIGHT)
      cy.clearLocalStorage()
      cy.visit('/')

      cy.wait(WAIT_TIME)

      cy.get('#app > .text-editor')
        .should('have.css', 'height')
        .and('not.match', new RegExp(`^${HEIGHT}`))
    })

    it('should Text Editor height be equal to viewport height', () => {
      const WIDTH = 1200
      const HEIGHT = 720
      const WAIT_TIME = 1000

      cy.viewport(WIDTH, HEIGHT)
      cy.clearLocalStorage()
      cy.visit('/')

      cy.get('.sidebar-button--settings')
        .click()

      cy.get('#app .base-toggle--statusbar-is-visible .base-toggle__form-wrapper')
        .click()

      cy.wait(WAIT_TIME)

      cy.get('.statusbar')
        .should('not.exist')

      cy.get('#app > .text-editor')
        .should('have.css', 'height')
        .and('match', new RegExp(`^${HEIGHT}`))
    })
  })
})
