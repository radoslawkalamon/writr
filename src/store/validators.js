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
    misc: {
      spellChecker: 'Boolean',
      language: "isEqualTo|'en'|'pl'",
    },
  },
};
