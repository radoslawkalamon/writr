<template>
  <button :class='this.wrapperClassNames' @click='onClick' :title='this.alt'>
    <img :src='resolveIcon' :alt='this.alt' />
  </button>
</template>

<script src='./Button.js'></script>
<style src='./Button.scss' lang='scss' scoped></style>
