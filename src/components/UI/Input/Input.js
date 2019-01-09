export default {
  props: {
    action: {
      type: String,
      required: true,
    },
    errorTip: {
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
    unit: {
      type: String,
      default: '',
    },
  },
  computed: {
    inputClassNames() {
      return [
        'base-input__input',
        { 'base-input__input--unit': this.unit !== '' },
        { 'base-input__input--error': this.error },
      ];
    },
    inputWrapperClassNames() {
      return [
        'base-section__form-wrapper',
        'base-input__form-wrapper',
        { 'base-input__form-wrapper--unit': this.unit !== '' },
        { 'base-input__form-wrapper--error': this.error },
      ];
    },
    mainElementClassNames() {
      return [
        'base-input',
        `base-input--${this.name}`,
      ];
    },
  },
  methods: {
    onChange() {
      this.$store.dispatch(this.action, {
        item: this.item,
        value: this.value,
        componentObject: this,
        componentErrorProperty: 'error',
      });
    },
  },
  data() {
    return {
      error: false,
      value: this.$store.getters.getValue(this.item),
    };
  },
};
