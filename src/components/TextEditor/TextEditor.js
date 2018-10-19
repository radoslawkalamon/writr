export default {
  computed: {
    textEditorStyle() {
      const store = this.$store.state.settings.editor;
      return `
      font-size: ${store.text.fontSize}px;
      line-height: ${store.text.lineHeight}em;
      text-indent: ${store.text.paragraphIndent}px;
      max-width: ${store.window.maxWidth}px;
      min-height: calc(100% - ${store.window.marginTop + store.window.marginBottom}px);
      margin-top: ${store.window.marginTop}px;
      margin-bottom: ${store.window.marginBottom}px;
      `;
    },
    spellcheckValue() {
      return this.$store.state.settings.misc.spellChecker;
    },
  },
};
