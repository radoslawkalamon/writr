export default {
  props: {
    name: {
      type: String,
      default: 'generic',
    },
    text: {
      type: String,
      required: true,
    },
  },
};
