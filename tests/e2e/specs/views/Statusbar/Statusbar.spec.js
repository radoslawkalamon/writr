describe('Statusbar', () => {
  describe('General', () => {
    it('should the statusbar be togglable', () => {
      cy.clearLocalStorage()
      cy.visit('/')

      cy.get('.statusbar')
        .should('exist')

      cy.get('.sidebar-button--settings')
        .click()

      cy.get('#app .base-toggle--statusbar-is-visible .base-toggle__form-wrapper')
        .click()

      cy.get('.statusbar')
        .should('not.exist')

      cy.wait(500)

      cy.get('#app .base-toggle--statusbar-is-visible .base-toggle__form-wrapper')
        .click()

      cy.get('.statusbar')
        .should('exist')
    })
  })

  describe('Elements', () => {
    before(() => {
      cy.clearLocalStorage()
      cy.visit('/')
      cy.get('.sidebar-button--settings')
        .click()
    })

    const WAIT_TIME = 50
    const ELEMENTS_NAMES_TO_TESTS = [
      'words',
      'pages',
      'paragraphs',
      'characters'
    ]

    ELEMENTS_NAMES_TO_TESTS.forEach((name) => {
      it(`should ${name} count be togglable`, () => {
        cy.get(`.statusbar-item--${name}`)
          .should('exist')

        cy.get(`.base-toggle--statusbar-content-${name} > .base-section__form-wrapper`)
          .click()

        cy.wait(WAIT_TIME)

        cy.get(`.statusbar-item--${name}`)
          .should('not.exist')

        cy.get(`.base-toggle--statusbar-content-${name} > .base-section__form-wrapper`)
          .click()

        cy.wait(WAIT_TIME)

        cy.get(`.statusbar-item--${name}`)
          .should('exist')
      })
    })
  })

  describe('Update', () => {
    const FAKE_TEXT = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo sem nec convallis facilisis. Donec massa augue, gravida sed justo in, rhoncus vestibulum eros. Quisque quis sem vitae elit pulvinar viverra. In ullamcorper urna vel posuere feugiat. Fusce lacinia, lorem malesuada malesuada blandit, purus libero lacinia eros, ut porta dui justo eget tellus. Cras scelerisque ullamcorper nisl, sit amet venenatis dolor blandit quis. Morbi accumsan, felis et semper viverra, nisi velit rhoncus mauris, molestie malesuada risus massa non ex. Fusce pulvinar nulla at nisi dictum sodales.'
    const ELEMENTS_NAMES_TO_TESTS = [
      'words',
      'pages',
      'paragraphs',
      'characters'
    ]

    const ELEMENTS_VALUES = [
      '86',
      '1',
      '1',
      '505 / 590'
    ]

    before(() => {
      cy.clearLocalStorage()
      cy.visit('/')
      cy.get('#text-editor')
        .invoke('html', '')
        .type(FAKE_TEXT, { delay: 0 })
    })

    ELEMENTS_NAMES_TO_TESTS.forEach((name, index) => {
      it(`should ${name} count contains proper value`, () => {
        cy.get(`.statusbar-item--${name} > .statusbar-item__value`)
          .contains(ELEMENTS_VALUES[index])
      })
    })
  })
})
