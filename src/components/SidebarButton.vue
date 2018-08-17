<template>
  <li :class='this.buttonClass' @click='onClick()'>
    <img :src='icon' :alt='alt' :title='alt' />
  </li>
</template>

<script>
export default {
  props: ['icon', 'alt', 'action', 'togglable'],
  computed: {
    buttonClass() {
      return `sidebar__button ${this.toggle ? 'sidebar__button--active' : ''}`;
    },
  },
  methods: {
    onClick() {
      const togglable = parseInt(this.togglable);
      if (togglable) {
        this.toggle = !this.toggle;
      }

      this.action();
    },
  },
  data() {
    return {
      toggle: false,
    };
  },
};
</script>