<template>
  <div :class='this.classNameBox'>
    <button :class='this.classNameLeft' v-text='this.leftLabel' @click='toggle(leftValue)'></button>
    <button :class='this.classNameRight' v-text='this.rightLabel' @click='toggle(rightValue)'></button>
  </div>
</template>

<script>
import validate from 'handy-validator';
const className = 'panel-toggle';

export default {
  props: {
    leftLabel: String,
    leftValue: [String, Boolean, Number],
    rightLabel: String,
    rightValue: [String, Boolean, Number],
    item: String,
    name: String,
  },
  computed: {
    classNameBox() {
      const panelExtraClass = typeof this.name !== 'undefined' && this.name !== '' ? `${className}--${this.name}` : '';
      return `${className} ${panelExtraClass}`;
    },
    classNameLeft() {
      const isButtonActive = this.leftValue === this.value ? `${className}__button--active` : '';
      return `${className}__button ${className}__button--left ${isButtonActive}`;
    },
    classNameRight() {
      const isButtonActive = this.rightValue === this.value ? `${className}__button--active` : '';
      return `${className}__button ${className}__button--right ${isButtonActive}`;
    },
  },
  methods: {
    toggle(_value) {
      this.value = _value;
      const isValueValid = validate(this.validator, _value);
      if (isValueValid) {
        this.$store.commit('changeSettings', {
          item: this.item,
          value: _value,
        });
      }
    },
  },
  data() {
    return {
      validator: this.$store.getters.getSettingsType(this.item),
      value: this.$store.getters.getSettings(this.item),
    };
  },
};
</script>
