export default {
  settings: {
    editor: {
      theme: ['light', 'dark'],
      text: {
        paragraphIndent: 'Number|>0',
        fontColor: String,
        fontFamily: 'Courier New, Courier, monospace', // [...],
        fontSize: 'Number|>4',
        fontLineHeight: 'Number|>0',
      },
      window: {
        widthValue: 'Number|>200',
        marginTop: 'Number|>0',
        marginBottom: 'Number|>0',
      },
    },
    misc: {
      spellChecker: 'Boolean',
    },
  },
  textEditorElement: false,
};

// Object = inmuttable
// Array = test to contains
// Number, String, Boolean ===

// type|condition
