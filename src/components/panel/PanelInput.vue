<template>
  <div :class='this.classNameBox'>
    <span class='panel-input__label' v-text='this.label'></span>
    <div :class='this.classNameValueBox' :data-error-hint='this.errorHint'>
      <input :class='this.classNameValue' type='text' v-model.number='value' @change='onChange(_e)' />
      <span class='panel-input__unit' v-text='this.unit'></span>
    </div>
  </div>
</template>

<script>
import validate from 'handy-validator';

export default {
  props: {
    label: String,
    unit: String,
    errorHint: String,
    item: String,
    name: String,
  },
  computed: {
    classNameBox() {
      const panelExtraClass = typeof this.name !== 'undefined' && this.name !== '' ? `panel-input--${this.name}` : '';
      return `panel-input ${panelExtraClass}`;
    },
    classNameValueBox() {
      const valueBoxErrorClass = this.error ? 'panel-input__value-box--error' : '';
      return `panel-input__value-box ${valueBoxErrorClass}`;
    },
    classNameValue() {
      const valueErrorClass = this.error ? 'panel-input__value--error' : '';
      return `panel-input__value ${valueErrorClass}`;
    },
  },
  methods: {
    onChange(_e) {
      this.error = false;
      const isValueValid = validate(this.validator, this.value);

      if (isValueValid) {
        this.$store.commit('changeSettings', {
          item: this.item,
          value: this.value,
        });
      } else {
        this.error = true;
      }
    },
  },
  data() {
    return {
      value: this.$store.getters.getSettings(this.item),
      validator: this.$store.getters.getSettingsType(this.item),
      error: false,
    };
  },
};
</script>
