<template>
  <div class='base-input'>
    <span class='base-input__title' v-text='this.title'></span>
    <div :class='inputWrapperClassNames' :data-unit='this.unit' :data-error='this.errorTip'>
      <!-- before with unit -->
      <input :class='inputClassNames' type='text' v-model.number='value' @change='onChange()' />
      <!-- after with tooltip -->
    </div>
  </div>
</template>

<script src='./Input.js'></script>
<style src='./Input.scss' lang='scss' scoped></style>
