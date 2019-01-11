<template functional>
  <div
    :class='["base-text", `base-text--${props.name}`]'
    v-text='props.text'
  />
</template>

<script src='./Text.js'></script>
<style src='./Text.scss' lang='scss' scoped></style>
