<template>
  <h1
    class='base-header base-header--1'
    v-if='header'
  >
    <slot />
  </h1>
  <h2
    class='base-header base-header--2'
    v-else
  >
    <slot />
  </h2>
</template>

<script src='./Header.js'></script>
<style src='./Header.scss' lang='scss' scoped></style>
