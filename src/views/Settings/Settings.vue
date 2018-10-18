<template>
  <sidebar-panel name='settings'>
    <base-header :header='true' v-text='$t("general.sidebar.settings.title")'></base-header>
    <base-section :title='$t("general.sidebar.settings.theme.title")' name='theme'>
      <!-- <base-select> -->
    </base-section>
    <base-section :title='$t("general.sidebar.settings.text.title")' name='text'>
      <!-- <base-input> -->
      <!-- <base-input> -->
      <!-- <base-input> -->
      <!-- <base-input> -->
    </base-section>
    <base-section :title='$t("general.sidebar.settings.texteditor.title")' name='texteditor'>
      <!-- <base-input> -->
      <!-- <base-input> -->
      <!-- <base-input> -->
    </base-section>
    <base-section :title='$t("general.sidebar.settings.spellcorrection.title")' name='spellcorrection'>
      <!-- <base-toggle> -->
    </base-section>
    <base-section :title='$t("general.sidebar.settings.language.title")' name='language'>
      <!-- <base-select> -->
    </base-section>
    <base-text v-text='$t("general.sidebar.settings.copyright")'></base-text>
  </sidebar-panel>
</template>

<script src='./Settings.js'></script>
<style src='./Settings.scss' lang='scss'></style>
