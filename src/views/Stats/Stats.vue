<template>
  <sidebar-panel
    name="stats"
  >
    <base-header
      :header="true"
      :title="$t('stats.title')"
    />
    <base-labeled-value
      :label="$t('stats.longNames.characters')"
      :value="$store.state.stats.characters"
      name="characters"
    />
    <base-labeled-value
      :label="$t('stats.longNames.charactersWithoutSpaces')"
      :value="$store.state.stats.charactersWithoutSpaces"
      name="characters-without-spaces"
    />
    <base-labeled-value
      :label="$t('stats.longNames.words')"
      :value="$store.state.stats.words"
      name="words"
    />
    <base-labeled-value
      :label="$t('stats.longNames.paragraphs')"
      :value="$store.state.stats.paragraphs"
      name="paragraphs"
    />
    <base-labeled-value
      :label="$t('stats.longNames.pages')"
      :value="$store.state.stats.pages"
      name="pages"
    />
  </sidebar-panel>
</template>

<script src='./Stats.js'></script>
<style  src='./Stats.scss' lang='scss' scoped></style>
