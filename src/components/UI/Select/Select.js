export default {
  props: {
    action: {
      type: String,
      required: true
    },
    item: {
      type: String,
      required: true
    },
    labels: {
      type: Array,
      required: true
    },
    name: {
      type: String,
      default: 'generic'
    },
    title: {
      type: String,
      default: 'Please provide title!'
    }
  },
  computed: {
    mainElementClassNames () {
      return [
        'base-select',
        `base-select--${this.name}`
      ]
    }
  },
  methods: {
    onChange () {
      this.$store.dispatch(this.action, {
        item: this.item,
        value: this.value
      })
    }
  },
  created () {
    const validatorArrayGroup = this.validator[1]
    this.options = validatorArrayGroup
  },
  data () {
    return {
      value: this.$store.getters.getValue(this.item),
      validator: this.$store.getters.getValidator(this.item),
      options: []
    }
  }
}
