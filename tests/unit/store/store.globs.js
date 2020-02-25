const TEST_ITEM = 'test.item.store'
const TEST_ITEM_WRONG = 'test.item.notExists'
const TEST_VALUE = 'This is changed test value!'
const TEST_VALUE_WRONG = 13
const TEST_NOT_CHANGED_VALUE = 'NOT CHANGED!'
const TEST_VALIDATOR = ['string']

const STATS_FAKE_TEXT = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo sem nec convallis facilisis. Donec massa augue, gravida sed justo in, rhoncus vestibulum eros. Quisque quis sem vitae elit pulvinar viverra. In ullamcorper urna vel posuere feugiat. Fusce lacinia, lorem malesuada malesuada blandit, purus libero lacinia eros, ut porta dui justo eget tellus. Cras scelerisque ullamcorper nisl, sit amet venenatis dolor blandit quis. Morbi accumsan, felis et semper viverra, nisi velit rhoncus mauris, molestie malesuada risus massa non ex. Fusce pulvinar nulla at nisi dictum sodales.'
const STATE_FAKE_TEXT_CHARACTERS = 590
const STATE_FAKE_TEXT_CHARACTERS_WITHOUT_SPACES = 505
const STATE_FAKE_TEXT_WORDS = 86
const STATE_FAKE_TEXT_PARAGRAPHS = 1
const STATE_FAKE_TEXT_PAGES = 6

export default {
  test: {
    item: TEST_ITEM,
    itemWrong: TEST_ITEM_WRONG,
    value: TEST_VALUE,
    valueWrong: TEST_VALUE_WRONG,
    notChangedValue: TEST_NOT_CHANGED_VALUE,
    validator: TEST_VALIDATOR,
    statsText: STATS_FAKE_TEXT,
    statsTextNumbers: {
      characters: STATE_FAKE_TEXT_CHARACTERS,
      charactersWithoutSpaces: STATE_FAKE_TEXT_CHARACTERS_WITHOUT_SPACES,
      words: STATE_FAKE_TEXT_WORDS,
      paragraphs: STATE_FAKE_TEXT_PARAGRAPHS,
      pages: STATE_FAKE_TEXT_PAGES
    }
  },
  state: {
    test: {
      item: {
        store: TEST_NOT_CHANGED_VALUE
      }
    },
    stats: {
      characters: 0,
      charactersWithoutSpaces: 0,
      words: 0,
      paragraphs: 0,
      pages: 0
    },
    validators: {
      test: {
        item: {
          store: TEST_VALIDATOR
        }
      }
    }
  }
}
