<template>
  <div
    :class='mainElementClassNames'
  >
    <span
      class='base-section__label-wrapper base-toggle__label-wrapper'
      v-text='title'
    />
    <div
      @click='onClick()'
      @keyup.enter='onClick()'
      @keyup.space='onClick()'
      :class='inputWrapperClassNames'
      tabIndex='0'
    >
      <div
        :class='inputClassNames'
      />
    </div>
  </div>
</template>

<script src='./Toggle.js'></script>
<style src='./Toggle.scss' lang='scss' scoped></style>
