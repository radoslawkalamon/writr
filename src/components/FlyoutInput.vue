<template>
  <div class='flyout__input'>
    <span class='flyout__label' v-text='this.label'></span>
    <input class='flyout__input-number' type='text' v-model.number='input' min='1' @change='onChange(_e)'/>
    <span class='flyout__label' v-text='this.additionalText'></span>
  </div>
</template>

<script>
export default {
  props: ['item', 'label', 'additionalText'],
  methods: {
    onChange(_e) {
      // VALIDATOR???

      this.$store.commit('changeSettings', {
        item: this.item,
        value: this.input,
      });
    },
  },
  data() {
    return {
      input: this.$store.getters.getSettings(this.item),
    };
  },
};
</script>