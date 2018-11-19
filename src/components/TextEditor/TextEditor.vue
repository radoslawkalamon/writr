<template>
  <div
    id='text-editor'
    class='text-editor'
    contenteditable='true'
    :spellcheck='spellcheckValue'
    :style='textEditorStyle'
    @paste.prevent='onPaste'
    @input='onChange'
  >
    <div v-text='welcomeText'></div>
  </div>
</template>

<script src='./TextEditor.js'></script>
<style src='./TextEditor.scss' lang='scss' scoped></style>
