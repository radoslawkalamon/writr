<template>
  <div :class='this.classNameBox'>
    <button :class='this.classNameLeft' v-text='this.leftLabel' @click='toggle(leftValue)'></button>
    <button :class='this.classNameRight' v-text='this.rightLabel' @click='toggle(rightValue)'></button>
  </div>
</template>

<script>
import validate from 'handy-validator';

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
      const panelExtraClass = typeof this.name !== 'undefined' && this.name !== '' ? `panel-toggle--${this.name}` : '';
      return `panel-toggle ${panelExtraClass}`;
    },
    classNameLeft() {
      const isButtonActive = this.leftValue === this.value ? 'panel-toggle__button--active' : '';
      return `panel-toggle__button panel-toggle__button--left ${isButtonActive}`;
    },
    classNameRight() {
      const isButtonActive = this.rightValue === this.value ? 'panel-toggle__button--active' : '';
      return `panel-toggle__button panel-toggle__button--right ${isButtonActive}`;
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
