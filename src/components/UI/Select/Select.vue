<template>
  <div
    :class='mainElementClassNames'
  >
    <span
      class='base-section__label-wrapper base-select__label-wrapper'
      v-text='title'
    />
    <div
      class='base-section__form-wrapper base-select__form-wrapper'
    >
      <select
        @change='onChange'
        class='base-select__input'
        v-model='value'
      >
        <option
          :key='`option_${index}`'
          :value='item'
          v-for='(item, index) in options'
          v-text='labels[index]'
        />
      </select>
    </div>
  </div>
</template>

<script src='./Select.js'></script>
<style src='./Select.scss' lang='scss' scoped></style>
