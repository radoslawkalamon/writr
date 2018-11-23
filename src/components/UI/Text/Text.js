export default {
  props: {
    name: {
      type: String,
      default: 'generic',
    },
  },
  computed: {
    mainElementClassNames() {
      return [
        'base-text',
        `base-text--${this.name}`,
      ].join(' ');
    },
  },
};
