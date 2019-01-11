<template>
  <main
    class='text-editor'
    :style='mainStyle'
  >
    <div
      @input='onChange'
      @paste.prevent='onPaste'
      class='text-editor__wrapper'
      contenteditable='true'
      id='text-editor'
      :spellcheck='spellcheckValue'
      :style='textEditorStyle'
    >
      <div
        v-text='welcomeText'
      />
    </div>
  </main>
</template>

<script src='./TextEditor.js'></script>
<style src='./TextEditor.scss' lang='scss' scoped></style>
