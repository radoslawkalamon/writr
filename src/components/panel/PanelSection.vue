<template>
  <div :class='this.className'>
    <h2 class='panel-section__header' v-text='this.header'></h2>
    <slot></slot>
  </div>
</template>

<script>
const className = 'panel-section';

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
