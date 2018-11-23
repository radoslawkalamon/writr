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
  methods: {
    onPaste(_e) {
      // How to insert text without losing formatting?
      // 1. Get selection position
      // 2. Get selection parent
      // 3. Change parent <div> to #Text
      // 4. Split #Text on selection position
      // 5. Between add formated clipboardText
      // 6. Get first #Text and change it into <div>#Text</div>
      // 7. Get second #Text and change it into <div>#Text</div>
      // 8. PROFIT!!!

      const clipboardText = _e.clipboardData.getData('text').replace(/\n/g, '');
      document.execCommand('insertText', false, clipboardText);
      return true;
    },
    onChange(_e) {
      const textEditor = _e.target;
      if (textEditor.firstChild.nodeType === Node.TEXT_NODE) {
        textEditor.innerHTML = `<div>${textEditor.innerText}</div>`;
        window.getSelection().collapse(textEditor.firstChild, 1);
      }
    },
  },
  data() {
    return {
      welcomeText: this.$t('components.TextEditor.welcomeText'),
    };
  },
};
