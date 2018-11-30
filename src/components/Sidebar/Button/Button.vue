<template>
  <button
    @click='onClick()'
    :class='wrapperClassNames'
    :title='alt'
  >
    <img
      :alt='alt'
      :src='resolveIcon'
    />
  </button>
</template>

<script src='./Button.js'></script>
<style src='./Button.scss' lang='scss' scoped></style>
