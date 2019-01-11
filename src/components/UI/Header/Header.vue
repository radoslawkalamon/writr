<template functional>
  <h1
    class='base-header base-header--1'
    v-if='props.header'
    v-text='props.title'
  />
  <h2
    class='base-header base-header--2'
    v-else
    v-text='props.title'
  />
</template>

<script src='./Header.js'></script>
<style src='./Header.scss' lang='scss' scoped></style>
