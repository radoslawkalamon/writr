<template>
  <div class='flyout flyout--settings'>
    <h1>Settings</h1>
    <h2>Theme</h2>
    <select>
      <option>Dark theme</option>
      <option>Light theme</option>
    </select>
    <h2>Text</h2>
    <flyout-input v-bind="{item: 'editor/text/fontColor', label: 'Font color', additionalText: 'hex'}" />
    <flyout-input v-bind="{item: 'editor/text/fontSize', label: 'Font size', additionalText: 'px'}" />
    <flyout-input v-bind="{item: 'editor/text/paragraphIndent', label: 'Paragraph Indent', additionalText: 'px'}" />
    <flyout-input v-bind="{item: 'editor/text/fontLineHeight', label: 'Line height', additionalText: 'em'}" />
    <h2>Window</h2>
    <flyout-input v-bind="{item: 'editor/window/widthValue', label: 'Text max-width', additionalText: 'px'}" />
    <flyout-input v-bind="{item: 'editor/window/marginTop', label: 'Margin top', additionalText: 'px'}" />
    <flyout-input v-bind="{item: 'editor/window/marginBottom', label: 'Margin bottom', additionalText: 'px'}" />
  </div>
</template>

<script>
import FlyoutInput from './FlyoutInput.vue';

export default {
  components: {
    FlyoutInput,
  },
  methods: {},
  data() {
    return {};
  },
};
</script>
