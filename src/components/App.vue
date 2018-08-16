<template>
  <div id="app" :class='this.applicationTheme'>
    <sidebar />
    <text-editor />
  </div>
</template>

<script>
import Sidebar from './Sidebar.vue';
import TextEditor from './TextEditor.vue';

export default {
  name: 'writr-vue2',
  components: {
    Sidebar,
    TextEditor,
  },
  computed: {
    applicationTheme() {
      return `writr writr-theme--${this.$store.state.settings.appearance.theme}`;
    },
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss">
@import '../style/style.scss';
</style>