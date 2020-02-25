<template functional>
  <h1
    v-if="props.header"
    class="base-header base-header--1"
    v-text="props.title"
  />
  <h2
    v-else
    class="base-header base-header--2"
    v-text="props.title"
  />
</template>

<script src='./Header.js'></script>
<style src='./Header.scss' lang='scss' scoped></style>
