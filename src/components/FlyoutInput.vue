<template>
  <div :class='this.className'>
    <span class='flyout__label' v-text='this.label'></span>
    <input class='flyout__input-number' type='text' v-model.number='input' @change='onChange(_e)'/>
    <span class='flyout__unit' v-text='this.unit'></span>
  </div>
</template>

<script>
// Functions
import validator from 'handy-validator';

export default {
  props: ['item', 'label', 'unit'],
  computed: {
    className() {
      const classError = this.error === true ? 'flyout__input--error' : '';
      return `flyout__input ${classError}`;
    },
  },
  methods: {
    onChange(_e) {
      this.error = false;
      const isValueValid = validator(this.validator, this.input);

      if (isValueValid) {
        this.$store.commit('changeSettings', {
          item: this.item,
          value: this.input,
        });
      } else {
        this.error = true;
      }
    },
  },
  data() {
    return {
      input: this.$store.getters.getSettings(this.item),
      validator: this.$store.getters.getSettingsType(this.item),
      error: false,
    };
  },
};
</script>