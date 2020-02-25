<template functional>
  <div
    :class="['base-labeled-value', `base-labeled-value--${props.name}`]"
  >
    <strong
      class="base-labeled-value__value"
      v-text="props.value"
    />
    <span
      class="base-labeled-value__label"
      v-text="props.label"
    />
  </div>
</template>

<script src='./LabeledValue.js'></script>
<style  src='./LabeledValue.scss' lang='scss' scoped></style>
