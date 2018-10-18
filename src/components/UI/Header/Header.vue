<template>
  <h1 class='base-header base-header--1' v-text='this.$slots.default' v-if='this.header'></h1>
  <h2 class='base-header base-header--2' v-text='this.$slots.default' v-else></h2>
</template>

<script src='./Header.js'></script>
<style src='./Header.scss' lang='scss' scoped></style>
