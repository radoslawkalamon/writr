import types from './types';

export default {
  settings: {
    editor: {
      theme: 'dark', // ['light', 'dark'],
      text: {
        paragraphIndent: 40, // Number,
        fontSize: 12, // Number,
        fontLineHeight: 1.5, // Float,
      },
      window: {
        widthValue: 900, // Number,
        marginTop: 40, // Number,
        marginBottom: 40, // Number,
      },
    },
    misc: {
      spellChecker: false, // Boolean,
    },
  },
  textEditorElement: false,
  types: types,
};
