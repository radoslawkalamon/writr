export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      default: 'generic',
    },
  },
  computed: {
    wrapperClassNames() {
      return [
        'base-section',
        `base-section--${this.name}`,
      ].join(' ');
    },
  },
};
