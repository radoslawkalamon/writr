export default {
  computed: {
    spellcheckValue() {
      return this.$store.state.settings.misc.spellChecker;
    },
    mainStyle() {
      const store = this.$store.state;
      return [
        `height: calc(100vh - ${store.sizes.statusBar.height}px)`,
      ].join(';');
    },
    textEditorStyle() {
      const store = this.$store.state.settings.editor;
      return [
        `font-size: ${store.text.fontSize}px`,
        `line-height: ${store.text.lineHeight}em`,
        `text-indent: ${store.text.paragraphIndent}px`,
        `max-width: ${store.window.maxWidth}px`,
        `padding-top: ${store.window.marginTop}px`,
        `padding-bottom: ${store.window.marginBottom}px`,
      ].join(';');
    },
  },
  methods: {
    onChange(_e) {
      const textEditor = _e.target;
      if (textEditor.firstChild.nodeType === Node.TEXT_NODE) {
        textEditor.innerHTML = `<div>${textEditor.innerHTML}</div>`;
        window.getSelection().collapse(textEditor.firstChild, 1);
      }

      // Calculate stats
      this.$store.dispatch('calculateStats', textEditor.innerText);
    },
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

      const clipboardText = _e.clipboardData.getData('text');
      document.execCommand('insertText', false, clipboardText);
      return true;
    },
  },
  data() {
    return {
      welcomeText: this.$t('components.TextEditor.welcomeText'),
    };
  },
};
