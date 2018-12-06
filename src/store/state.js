export default {
  settings: {
    editor: {
      theme: 'dark',
      text: {
        paragraphIndent: 40,
        fontSize: 12,
        lineHeight: 1.5,
      },
      window: {
        maxWidth: 900,
        marginTop: 40,
        marginBottom: 40,
      },
    },
    stats: {
      pageFormulaMainIngredient: 'characters',
      pageFormulaDivider: 1200,
    },
    statusBar: {
      isVisible: true,
      position: 'top',
      showContent: {
        characters: true,
        charactersWithoutSpaces: true,
        words: true,
        paragraphs: true,
        pages: true,
        clock: true,
      },
    },
    misc: {
      spellChecker: true,
      language: 'pl',
      version: 'alfa',
    },
  },
  stats: {
    characters: 0,
    charactersWithoutSpaces: 0,
    words: 0,
    paragraphs: 0,
    pages: 0,
  },
};
