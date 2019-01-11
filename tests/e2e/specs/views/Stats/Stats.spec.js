const FAKE_TEXT = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo sem nec convallis facilisis. Donec massa augue, gravida sed justo in, rhoncus vestibulum eros. Quisque quis sem vitae elit pulvinar viverra. In ullamcorper urna vel posuere feugiat. Fusce lacinia, lorem malesuada malesuada blandit, purus libero lacinia eros, ut porta dui justo eget tellus. Cras scelerisque ullamcorper nisl, sit amet venenatis dolor blandit quis. Morbi accumsan, felis et semper viverra, nisi velit rhoncus mauris, molestie malesuada risus massa non ex. Fusce pulvinar nulla at nisi dictum sodales.';
const ELEMENTS_NAMES_TO_TESTS = [
  'words',
  'pages',
  'paragraphs',
  'characters',
  'characters-without-spaces',
];
const ELEMENTS_VALUES = [
  '86',
  '1',
  '1',
  '590',
  '505',
];

describe('Stats', () => {
  describe('Stats update', () => {
    before(() => {
      cy.clearLocalStorage();
      cy.visit('/');

      cy.get('.sidebar-button--stats')
        .click();

      cy.get('#text-editor')
        .invoke('html', '')
        .type(FAKE_TEXT, { delay: 0 });
    });

    ELEMENTS_NAMES_TO_TESTS.forEach((name, index) => {
      it(`should update ${name} count in Stats panel`, () => {
        cy.get(`.sidebar-panel--stats .base-labeled-value--${name} .base-labeled-value__value`)
          .contains(ELEMENTS_VALUES[index]);
      });
    });
  });

  describe('Page formula', () => {
    before(() => {
      cy.clearLocalStorage();
      cy.visit('/');

      cy.get('.sidebar-button--settings')
        .click();

      cy.get('.sidebar-panel--settings .base-select--stats-formula-ingredient .base-select__input')
        .select('charactersWithoutSpaces');

      cy.get('.sidebar-panel--settings .base-input--stats-formula-divider .base-input__input')
        .invoke('val', '')
        .type('100');

      cy.get('.sidebar-button--stats')
        .click();

      cy.get('#text-editor')
        .invoke('html', '')
        .type(FAKE_TEXT, { delay: 0 });
    });

    it('should proper update pages count in Stats panel', () => {
      cy.get('.sidebar-panel--stats .base-labeled-value--pages .base-labeled-value__value')
        .contains('6');
    });
  });
});
