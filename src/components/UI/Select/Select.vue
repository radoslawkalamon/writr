<template>
  <div class='base-select'>
    <span class='base-select__title' v-text='this.title'></span>
    <div class='base-select__input-wrapper'>
      <select class='base-select__input' @change='onChange' v-model='value'>
        <option v-for='(item, index) in options' :key='`option_${index}`' :value='item' v-text='labels[index]'></option>
      </select> 
    </div>
  </div>
</template>

<script src='./Select.js'></script>
<style src='./Select.scss' lang='scss' scoped></style>
