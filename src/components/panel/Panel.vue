<template>
  <div :class='this.className'>
    <h1 class='panel__header' v-text='this.header'></h1>
    <slot></slot>
  </div>
</template>

<script>
const className = 'panel';

export default {
  props: {
    header: String,
    name: String,
  },
  computed: {
    className() {
      const panelExtraClass = typeof this.name !== 'undefined' && this.name !== '' ? `${className}--${this.name}` : '';
      return `${className} ${panelExtraClass}`;
    },
  },
};
</script>
