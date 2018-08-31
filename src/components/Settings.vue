<template>
  <panel v-bind="{header: 'Settings', name:'settings'}">
    <panel-section v-bind="{header: 'Theme', name: 'theme'}">
      <panel-toggle v-bind="{'left-label': 'Dark', 'left-value':'dark', 'right-label': 'Light', 'right-value':'light', item:'editor/theme'}" />
    </panel-section>
    <panel-section v-bind="{header: 'Text', name: 'text'}">
      <panel-input v-bind="{label: 'Font size', unit: 'px', 'error-hint': 'Number >=4', item: 'editor/text/fontSize'}" />
      <panel-input v-bind="{label: 'Paragraph indent', unit: 'px', 'error-hint': 'Number >=0', item: 'editor/text/paragraphIndent'}" />
      <panel-input v-bind="{label: 'Line height', unit: 'em', 'error-hint': 'Number >=0', item: 'editor/text/fontLineHeight'}" />
    </panel-section>
    <panel-section v-bind="{header: 'Text Editor', name: 'text-editor'}">
      <panel-input v-bind="{label: 'Max width', unit: 'px', 'error-hint': 'Number >=320', item: 'editor/window/widthValue'}" />
      <panel-input v-bind="{label: 'Top margin', unit: 'px', 'error-hint': 'Number >=0', item: 'editor/window/marginTop'}" />
      <panel-input v-bind="{label: 'Bottom margin', unit: 'px', 'error-hint': 'Number >=0', item: 'editor/window/marginBottom'}" />
    </panel-section>
    <panel-section v-bind="{header: 'Spell correction', name: 'spell-correction'}">
      <panel-toggle v-bind="{'left-label': 'Off', 'left-value': false, 'right-label': 'On', 'right-value': true, item:'misc/spellChecker'}" />
    </panel-section>
  </panel>
</template>

<script>
import Panel from './panel/Panel.vue';
import PanelSection from './panel/PanelSection.vue';
import PanelInput from './panel/PanelInput.vue';
import PanelToggle from './panel/PanelToggle.vue';

export default {
  components: {
    Panel,
    PanelSection,
    PanelInput,
    PanelToggle,
  },
};
</script>
