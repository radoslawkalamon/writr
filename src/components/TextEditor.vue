<template>
  <div class='text-editor'>
    <div class='text-editor__content' contenteditable='true' @paste="onPaste" :style='this.textEditorStyle'>
      <div>What is on your mind...</div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    textEditorStyle() {
      return `
      margin-top: ${this.$store.state.settings.appearance.window.marginTop}px;
      margin-bottom: ${this.$store.state.settings.appearance.window.marginBottom}px;
      max-width: ${this.$store.state.settings.appearance.window.widthMax}px;
      text-indent: ${this.$store.state.settings.appearance.text.textIndent}px;
      min-height: calc(100% - ${this.$store.state.settings.appearance.window.marginTop +
        this.$store.state.settings.appearance.window.marginBottom}px);
      `; // Prettier turn off
    },
  },
  methods: {
    onPaste(_e) {
      _e.preventDefault();
      const clipboardText = _e.clipboardData.getData('text/plain');
      const reformatedText = `<div>${clipboardText.replace(/\n/g, '<br></div><div>')}</div>`;
      document.execCommand('insertHTML', false, reformatedText);
      return true;
    },
  },
};
</script>