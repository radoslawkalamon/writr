<template>
  <div id="app" :class='this.applicationTheme'>
    <sidebar>
      <sidebar-button :action='saveDocument' icon='download' slot='top' alt='Save document' />
      <sidebar-button :action='openSettings' icon='settings' slot='bottom' alt='Settings' togglable='1' />
    </sidebar>
    <transition name='panel'>
      <settings v-if='this.settingsVisible' />
    </transition>
    <text-editor />
  </div>
</template>

<script>
// Components
import Sidebar from './Sidebar.vue';
import SidebarButton from './SidebarButton.vue';
import TextEditor from './TextEditor.vue';
import Settings from './Settings.vue';
// Functions
import downloadFile from 'downloadjs';

export default {
  name: 'writr-vue2',
  components: {
    Sidebar,
    SidebarButton,
    TextEditor,
    Settings,
  },
  computed: {
    applicationTheme() {
      const _store = this.$store.state.settings.editor;
      return `writr writr-theme--${_store.theme}`;
    },
  },
  methods: {
    saveDocument() {
      const text = this.$store.state.textEditorElement.innerText;
      downloadFile(text, 'writr-text.txt', 'text/plain');
    },
    openSettings() {
      this.settingsVisible = !this.settingsVisible;
    },
  },
  data() {
    return {
      settingsVisible: false,
    };
  },
};
</script>

<style lang="scss">
@import '../style/_variables.scss';

body {
  margin: 0;
  padding: 0;
  font-family: $fontFamily;
  font-size: $fontSize;
  line-height: 1.25em;
}

.writr {
  position: fixed;
  height: 100%;
  width: 100%;
  transition: background-color $animationTime $animationEase, color $animationTime $animationEase;

  &-theme--dark {
    @import '../style/darkTheme.scss';
    @import '../style/style.scss';
    color: color(contra);
    background-color: color(base);
  }

  &-theme--light {
    @import '../style/lightTheme.scss';
    @import '../style/style.scss';
    color: color(contra);
    background-color: color(base);
  }
}
</style>