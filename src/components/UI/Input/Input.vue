<template>
  <div
    :class='mainElementClassNames'
  >
    <span
      class='base-section__label-wrapper base-input__title'
      v-text='this.title'
    />
    <div
      :class='inputWrapperClassNames'
      :data-unit='this.unit'
      :data-error='this.errorTip'
    >
      <!-- before with unit -->
      <input
        @change='onChange()'
        type='text'
        :class='inputClassNames'
        v-model.number='value'
      />
      <!-- after with tooltip -->
    </div>
  </div>
</template>

<script src='./Input.js'></script>
<style src='./Input.scss' lang='scss' scoped></style>
