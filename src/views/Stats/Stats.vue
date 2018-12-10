<template>
  <sidebar-panel
    name='stats'
  >
    <base-header
      :header='true'
      v-text='$t("stats.title")'
    />
    <base-labeled-value
      :label='$t("stats.longNames.characters")'
      name='characters'
      :value='$store.state.stats.characters'
    />
    <base-labeled-value
      :label='$t("stats.longNames.charactersWithoutSpaces")'
      name='characters-without-spaces'
      :value='$store.state.stats.charactersWithoutSpaces'
    />
    <base-labeled-value
      :label='$t("stats.longNames.words")'
      name='words'
      :value='$store.state.stats.words'
    />
    <base-labeled-value
      :label='$t("stats.longNames.paragraphs")'
      name='paragraphs'
      :value='$store.state.stats.paragraphs'
    />
    <base-labeled-value
      :label='$t("stats.longNames.pages")'
      name='pages'
      :value='$store.state.stats.pages'
    />
  </sidebar-panel>
</template>

<script src='./Stats.js'></script>
<style  src='./Stats.scss' lang='scss' scoped></style>