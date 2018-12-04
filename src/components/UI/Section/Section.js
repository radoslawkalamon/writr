export default {
  props: {
    name: {
      type: String,
      default: 'generic',
    },
    title: {
      type: String,
      required: true,
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
