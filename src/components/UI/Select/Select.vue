<template>
  <div
    :class="mainElementClassNames"
  >
    <span
      class="base-section__label-wrapper base-select__label-wrapper"
      v-text="title"
    />
    <div
      class="base-section__form-wrapper base-select__form-wrapper"
    >
      <select
        v-model="value"
        class="base-select__input"
        @change="onChange"
      >
        <option
          v-for="(item, index) in options"
          :key="`option_${index}`"
          :value="item"
          v-text="labels[index]"
        />
      </select>
    </div>
  </div>
</template>

<script src='./Select.js'></script>
<style src='./Select.scss' lang='scss' scoped></style>
