<template functional>
  <div
    :class='`statusbar-item statusbar-item--${props.name}`'
  >
    <span
      class='statusbar-item__label'
      v-text='props.label'
    />
    <span
      class='statusbar-item__value'
      v-text='props.value'
    />
  </div>
</template>

<script src='./Item.js'></script>
<style src='./Item.scss' lang='scss' scoped></style>
