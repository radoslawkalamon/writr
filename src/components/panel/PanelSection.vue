<template>
  <div :class='this.className'>
    <h2 class='panel-section__header' v-text='this.header'></h2>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    header: String,
    name: String,
  },
  computed: {
    className() {
      const panelExtraClass = typeof this.name !== 'undefined' && this.name !== '' ? `panel-section--${this.name}` : '';
      return `panel-section ${panelExtraClass}`;
    },
  },
};
</script>
