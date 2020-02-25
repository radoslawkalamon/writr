export default {
  settings: {
    editor: {
      theme: ['equalTo', ['light', 'dark']],
      text: {
        paragraphIndent: ['number', [['>=', 0]]],
        fontSize: ['number', [['>=', 4]]],
        lineHeight: ['number', [['>=', 0]]]
      },
      window: {
        maxWidth: ['number', [['>=', 320]]],
        marginTop: ['number', [['>=', 0]]],
        marginBottom: ['number', [['>=', 0]]]
      }
    },
    stats: {
      pageFormulaMainIngredient: ['equalTo', ['characters', 'charactersWithoutSpaces', 'words', 'paragraphs']],
      pageFormulaDivider: ['number', [['>=', 1]]]
    },
    statusBar: {
      isVisible: ['boolean'],
      showContent: {
        characters: ['boolean'],
        charactersWithoutSpaces: ['boolean'],
        words: ['boolean'],
        paragraphs: ['boolean'],
        pages: ['boolean'],
        clock: ['boolean']
      }
    },
    misc: {
      spellChecker: ['boolean'],
      language: ['equalTo', ['en', 'pl']]
    }
  },
  stats: {
    characters: ['number', [['>=', 0]]],
    charactersWithoutSpaces: ['number', [['>=', 0]]],
    words: ['number', [['>=', 0]]],
    paragraphs: ['number', [['>=', 0]]],
    pages: ['number', [['>=', 0]]]
  },
  sizes: {
    statusBar: {
      height: ['number', [['>=', 0]]]
    }
  }
}
