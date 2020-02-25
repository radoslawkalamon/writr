const TRANSLATE_TEXT = 'test-translate-text'
const CHARACTERS_WITHOUT_SPACES_COUNT = 300
const CHARACTERS_COUNT = 400

export default {
  test: {
    characters: CHARACTERS_COUNT,
    charactersWithoutSpaces: CHARACTERS_WITHOUT_SPACES_COUNT
  },
  mocks: {
    $store: {
      state: {
        settings: {
          statusBar: {
            showContent: {
              clock: true,
              characters: true,
              paragraphs: true,
              pages: true,
              words: true
            }
          }
        },
        stats: {
          characters: CHARACTERS_COUNT,
          charactersWithoutSpaces: CHARACTERS_WITHOUT_SPACES_COUNT,
          paragraphs: 40,
          pages: 10,
          words: 30
        }
      }
    },
    $t: () => TRANSLATE_TEXT
  }
}
