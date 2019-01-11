export default {
  props: {
    action: {
      type: String,
      required: true,
    },
    item: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      default: 'generic',
    },
    title: {
      type: String,
      default: 'Please provide title!',
    },
  },
  computed: {
    inputClassNames() {
      return [
        'base-toggle__input',
        { 'base-toggle__input--active': this.value },
      ];
    },
    inputWrapperClassNames() {
      return [
        'base-section__form-wrapper',
        'base-toggle__form-wrapper',
        { 'base-toggle__form-wrapper--active': this.value },
      ];
    },
    mainElementClassNames() {
      return [
        'base-toggle',
        `base-toggle--${this.name}`,
      ];
    },
  },
  methods: {
    onClick() {
      this.$store.dispatch(this.action, {
        item: this.item,
        value: !this.value,
      });
    },
  },
  created() {
    this.$watch(`$store.state.${this.item}`, function toggleButton(newValue) {
      this.value = newValue;
    });
  },
  data() {
    return {
      value: this.$store.getters.getValue(this.item),
    };
  },
};
