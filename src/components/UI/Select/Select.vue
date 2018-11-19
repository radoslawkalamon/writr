<template>
  <div class='base-select'>
    <span class='base-section__label-wrapper base-select__label-wrapper' v-text='this.title'></span>
    <div class='base-section__form-wrapper base-select__form-wrapper'>
      <select class='base-select__input' @change='onChange' v-model='value'>
        <option v-for='(item, index) in options' :key='`option_${index}`' :value='item' v-text='labels[index]'></option>
      </select>
    </div>
  </div>
</template>

<script src='./Select.js'></script>
<style src='./Select.scss' lang='scss' scoped></style>
