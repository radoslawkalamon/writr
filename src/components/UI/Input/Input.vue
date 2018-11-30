<template>
  <div
    :class='mainElementClassNames'
  >
    <span
      class='base-section__label-wrapper base-input__title'
      v-text='title'
    />
    <div
      :class='inputWrapperClassNames'
      :data-error='errorTip'
      :data-unit='unit'
    >
      <!-- before with unit -->
      <input
        @change='onChange()'
        :class='inputClassNames'
        type='text'
        v-model.number='value'
      />
      <!-- after with tooltip -->
    </div>
  </div>
</template>

<script src='./Input.js'></script>
<style src='./Input.scss' lang='scss' scoped></style>
