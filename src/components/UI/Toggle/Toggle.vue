<template>
  <div class='base-toggle'>
    <span class='base-section__label-wrapper base-toggle__label-wrapper' v-text='this.title'></span>
    <div :class='inputWrapperClassNames' @click='onClick()'>
      <div :class='inputClassNames'></div>
    </div>
  </div>
</template>

<script src='./Toggle.js'></script>
<style src='./Toggle.scss' lang='scss' scoped></style>
