describe('Sidebar#template', () => {
  it('should render correctly', () => {
    const selectors = [
      '#app > aside.sidebar:nth-child(1) > nav.sidebar__box.sidebar__box--top:nth-child(1) > button.sidebar-button.sidebar-button--newfile:nth-child(1) > img:nth-child(1)',
      '#app > aside.sidebar:nth-child(1) > nav.sidebar__box.sidebar__box--top:nth-child(1) > button.sidebar-button.sidebar-button--download:nth-child(2) > img:nth-child(1)',
      '#app > aside.sidebar:nth-child(1) > nav.sidebar__box.sidebar__box--bottom:nth-child(2) > button.sidebar-button.sidebar-button--stats:nth-child(1) > img:nth-child(1)',
      '#app > aside.sidebar:nth-child(1) > nav.sidebar__box.sidebar__box--bottom:nth-child(2) > button.sidebar-button.sidebar-button--settings:nth-child(2) > img:nth-child(1)'
    ]

    cy.clearLocalStorage()
    cy.visit('/')

    selectors.forEach((selector) => {
      cy.get(`${selector}`)
        .should('exist')
    })
  })
})
