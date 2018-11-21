<template>
  <sidebar-panel name='settings'>
    <base-header :header='true' v-text='$t("general.settings.title")'></base-header>
    <base-section :title='$t("general.settings.theme.title")' name='theme'>
      <base-select
        :title='$t("general.settings.theme.labels.title")'
        :labels='$t("general.settings.theme.labels.content")'
        item='settings.editor.theme'
        action='changeState'
      ></base-select>
    </base-section>
    <base-section :title='$t("general.settings.text.title")' name='text'>
      <base-input
        :title='$t("general.settings.text.fontSize.title")'
        :errorTip='$t("general.settings.text.fontSize.errorTip")'
        unit='px'
        item='settings.editor.text.fontSize'
        action='changeState'
      ></base-input>
      <base-input
        :title='$t("general.settings.text.paragraphIndent.title")'
        :errorTip='$t("general.settings.text.paragraphIndent.errorTip")'
        unit='px'
        item='settings.editor.text.paragraphIndent'
        action='changeState'
      ></base-input>
      <base-input
        :title='$t("general.settings.text.lineHeight.title")'
        :errorTip='$t("general.settings.text.lineHeight.errorTip")'
        unit='em'
        item='settings.editor.text.lineHeight'
        action='changeState'
      ></base-input>
    </base-section>
    <base-section :title='$t("general.settings.textEditor.title")' name='texteditor'>
      <base-input
        :title='$t("general.settings.textEditor.maxWidth.title")'
        :errorTip='$t("general.settings.textEditor.maxWidth.errorTip")'
        unit='px'
        item='settings.editor.window.maxWidth'
        action='changeState'
      ></base-input>
      <base-input
        :title='$t("general.settings.textEditor.marginTop.title")'
        :errorTip='$t("general.settings.textEditor.marginTop.errorTip")'
        unit='px'
        item='settings.editor.window.marginTop'
        action='changeState'
      ></base-input>
      <base-input
        :title='$t("general.settings.textEditor.marginBottom.title")'
        :errorTip='$t("general.settings.textEditor.marginBottom.errorTip")'
        unit='px'
        item='settings.editor.window.marginBottom'
        action='changeState'
      ></base-input>
    </base-section>
    <base-section :title='$t("general.settings.misc.title")' name='misc'>
      <base-toggle
        :title='$t("general.settings.misc.spellChecker.title")'
        item='settings.misc.spellChecker'
        action='changeState'
      ></base-toggle>
      <base-select
        :title='$t("general.settings.misc.language.title")'
        :labels='$t("general.settings.misc.language.labels")'
        item='settings.misc.language'
        action='changeState'
      ></base-select>
    </base-section>
    <base-text v-text='$t("general.settings.copyright")'></base-text>
  </sidebar-panel>
</template>

<script src='./Settings.js'></script>
<style src='./Settings.scss' lang='scss'></style>
