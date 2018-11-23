<template>
  <div
    :class='mainElementClassNames'
  >
    <span
      class='base-section__label-wrapper base-toggle__label-wrapper'
      v-text='this.title'
    />
    <div
      @click='onClick()'
      :class='inputWrapperClassNames'
    >
      <div
        :class='inputClassNames'
      />
    </div>
  </div>
</template>

<script src='./Toggle.js'></script>
<style src='./Toggle.scss' lang='scss' scoped></style>
