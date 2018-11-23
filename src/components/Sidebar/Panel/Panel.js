export default {
  props: {
    name: {
      type: String,
      default: 'generic',
    },
  },
  computed: {
    wrapperClassNames() {
      return [
        'sidebar-panel',
        `sidebar-panel--${this.name}`,
      ].join(' ');
    },
  },
};
