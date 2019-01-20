describe('App#template', () => {
  it('should render correctly', () => {
    const selectors = [
      '#app > aside.sidebar:nth-child(1) > nav.sidebar__box.sidebar__box--top:nth-child(1) > button.sidebar-button.sidebar-button--newfile:nth-child(1) > img:nth-child(1)',
      '#app > aside.sidebar:nth-child(1) > nav.sidebar__box.sidebar__box--top:nth-child(1) > button.sidebar-button.sidebar-button--download:nth-child(2) > img:nth-child(1)',
      '#app > aside.sidebar:nth-child(1) > nav.sidebar__box.sidebar__box--bottom:nth-child(2) > button.sidebar-button.sidebar-button--stats:nth-child(1) > img:nth-child(1)',
      '#app > aside.sidebar:nth-child(1) > nav.sidebar__box.sidebar__box--bottom:nth-child(2) > button.sidebar-button.sidebar-button--settings:nth-child(2) > img:nth-child(1)',
      '#app > div.statusbar:nth-child(2) > div.statusbar-item.statusbar-item--words:nth-child(1) > span.statusbar-item__label:nth-child(1)',
      '#app > div.statusbar:nth-child(2) > div.statusbar-item.statusbar-item--words:nth-child(1) > span.statusbar-item__value:nth-child(2)',
      '#app > div.statusbar:nth-child(2) > div.statusbar-item.statusbar-item--pages:nth-child(2) > span.statusbar-item__label:nth-child(1)',
      '#app > div.statusbar:nth-child(2) > div.statusbar-item.statusbar-item--pages:nth-child(2) > span.statusbar-item__value:nth-child(2)',
      '#app > div.statusbar:nth-child(2) > div.statusbar-item.statusbar-item--paragraphs:nth-child(3) > span.statusbar-item__label:nth-child(1)',
      '#app > div.statusbar:nth-child(2) > div.statusbar-item.statusbar-item--paragraphs:nth-child(3) > span.statusbar-item__value:nth-child(2)',
      '#app > div.statusbar:nth-child(2) > div.statusbar-item.statusbar-item--characters:nth-child(4) > span.statusbar-item__label:nth-child(1)',
      '#app > div.statusbar:nth-child(2) > div.statusbar-item.statusbar-item--characters:nth-child(4) > span.statusbar-item__value:nth-child(2)',
      '#app > div.statusbar:nth-child(2) > div.statusbar-clock:nth-child(5)',
      '#app > .text-editor > #text-editor',
    ];

    cy.clearLocalStorage();
    cy.visit('/');

    selectors.forEach((selector) => {
      cy.get(`${selector}`)
        .should('exist');
    });
  });
});
