export default {
  props: {
    value: {
      required: true
    },
    label: {
      type: String,
      default: 'Please provide label!'
    },
    name: {
      type: String,
      default: 'generic'
    }
  }
}
