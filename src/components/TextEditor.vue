<template>
  <div class='text-editor'>
    <div class='text-editor__content' :spellcheck='spellcheckValue' contenteditable='true' @paste.prevent="onPaste" :style='textEditorStyle'>
      <div>What is on your mind...</div>
    </div>
  </div>
</template>

<script>
import formatPlainText from '../script/formatPlainText.js';

export default {
  computed: {
    textEditorStyle() {
      const _store = this.$store.state.settings.editor;

      return `
      font-family: ${_store.text.fontFamily};
      font-size: ${_store.text.fontSize}px;
      color: ${_store.text.fontColor};
      line-height: ${_store.text.fontLineHeight}em;
      text-indent: ${_store.text.paragraphIndent}px;
      max-width: ${_store.window.widthValue}px;
      min-height: calc(100% - ${_store.window.marginTop + _store.window.marginBottom}px);
      margin-top: ${_store.window.marginTop}px;
      margin-bottom: ${_store.window.marginBottom}px;
      `;
    },
    spellcheckValue() {
      return this.$store.state.settings.misc.spellChecker;
    },
  },
  mounted() {
    this.$store.commit('getTextEditorElement', this.$el);
  },
  methods: {
    onPaste(_e) {
      // _e.preventDefault();
      const clipboardText = _e.clipboardData.getData('text/plain');
      document.execCommand('insertHTML', false, formatPlainText(clipboardText));
      return true;
    },
  },
};
</script>