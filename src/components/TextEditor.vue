<template>
  <div class='text-editor'>
    <div 
      class='text-editor__content'
      :style='textEditorStyle'
      :data-text-empty='textEmpty'
      :spellcheck='spellcheckValue'
      contenteditable='true'
      @paste.prevent='onPaste'
      @input='onChange'
    ></div>
  </div>
</template>

<script>
import formatPlainText from '../script/formatPlainText.js';

export default {
  computed: {
    textEditorStyle() {
      const _store = this.$store.state.settings.editor;

      return `
      font-size: ${_store.text.fontSize}px;
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
      const clipboardText = _e.clipboardData.getData('text/plain');
      const clipboardTextFormatted = formatPlainText(clipboardText);
      document.execCommand('insertHTML', false, clipboardTextFormatted);
      return true;
    },
    onChange(_e) {
      const textEditor = _e.target;
      if (textEditor.firstChild.nodeType === Node.TEXT_NODE) {
        textEditor.innerHTML = formatPlainText(textEditor.innerText);
        window.getSelection().collapse(textEditor.firstChild, 1);
      }
    },
  },
  data() {
    return {
      textEmpty: 'What is on your mind?',
    };
  },
};
</script>