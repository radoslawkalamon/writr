<template>
  <li :class='this.buttonClass' @click='onClick()'>
    <img :src='this.resolveIcon(this.icon)' :alt='alt' :title='alt' />
  </li>
</template>

<script>
import iconList from '../images/index';
const className = 'sidebar';

export default {
  props: {
    icon: String,
    alt: String,
    togglable: String,
  },
  computed: {
    buttonClass() {
      const toggleClassName = this.toggle ? `${className}__button--active` : '';
      return `${className}__button ${toggleClassName}`;
    },
  },
  methods: {
    resolveIcon(_icon) {
      const theme = this.$store.state.settings.editor.theme;
      return iconList[theme][_icon];
    },
    onClick() {
      const togglable = parseInt(this.togglable);
      if (togglable === 1) {
        this.toggle = !this.toggle;
      }
      this.$emit('action');
    },
  },
  data() {
    return {
      toggle: false,
    };
  },
};
</script>