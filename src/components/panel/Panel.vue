<template>
  <div :class='this.className'>
    <h1 class='panel__header' v-text='this.header'></h1>
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
      const panelExtraClass = typeof this.name !== 'undefined' && this.name !== '' ? `panel--${this.name}` : '';
      return `panel ${panelExtraClass}`;
    },
  },
};
</script>
