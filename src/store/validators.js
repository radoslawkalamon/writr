export default {
  settings: {
    editor: {
      theme: "isEqualTo|'light'|'dark'",
      text: {
        paragraphIndent: 'Number|>=0',
        fontSize: 'Number|>=4',
        lineHeight: 'Number|>=0',
      },
      window: {
        maxWidth: 'Number|>=320',
        marginTop: 'Number|>=0',
        marginBottom: 'Number|>=0',
      },
    },
    stats: {
      pageFormulaMainIngredient: "isEqualTo|'characters'|'charactersWithoutSpaces'|'words'|'paragraphs'",
      pageFormulaDivider: 'Number|>=1',
    },
    statusBar: {
      isVisible: 'Boolean',
      position: "isEqualTo|'top'|'bottom'",
      showContent: {
        characters: 'Boolean',
        charactersWithoutSpaces: 'Boolean',
        words: 'Boolean',
        paragraphs: 'Boolean',
        pages: 'Boolean',
        clock: 'Boolean',
      },
    },
    misc: {
      spellChecker: 'Boolean',
      language: "isEqualTo|'en'|'pl'",
    },
  },
  stats: {
    characters: 'Number|>=0',
    charactersWithoutSpaces: 'Number|>=0',
    words: 'Number|>=0',
    paragraphs: 'Number|>=0',
    pages: 'Number|>=0',
  },
};
