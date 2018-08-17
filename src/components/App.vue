<template>
  <div id="app" :class='this.applicationTheme'>
    <sidebar>
      <sidebar-button :action='saveDocument' icon='https://via.placeholder.com/32x32?text=save' slot='top' alt='Save document' />
      <sidebar-button :action='openSettings' icon='https://via.placeholder.com/32x32?text=sets' slot='bottom' alt='Settings' togglable='1' />
    </sidebar>
    <transition name='flyout'>
      <settings v-if='this.settingsVisible' />
    </transition>
    <text-editor />
  </div>
</template>

<script>
import Sidebar from './Sidebar.vue';
import SidebarButton from './SidebarButton.vue';
import TextEditor from './TextEditor.vue';
import Settings from './Settings.vue';

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
      const tempElement = document.createElement('a');
      tempElement.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
      tempElement.setAttribute('download', 'writr-text.txt');
      tempElement.style.display = 'none';

      document.body.appendChild(tempElement);
      tempElement.click();
      document.body.removeChild(tempElement);
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
@import '../style/style.scss';
</style>