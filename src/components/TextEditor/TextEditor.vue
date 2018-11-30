<template>
  <div
    @input='onChange'
    @paste.prevent='onPaste'
    class='text-editor'
    contenteditable='true'
    id='text-editor'
    :spellcheck='spellcheckValue'
    :style='textEditorStyle'
  >
    <div
      v-text='welcomeText'
    />
  </div>
</template>

<script src='./TextEditor.js'></script>
<style src='./TextEditor.scss' lang='scss' scoped></style>
