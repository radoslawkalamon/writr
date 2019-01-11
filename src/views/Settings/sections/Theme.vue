<template functional>
  <base-section
    name='theme'
    :title='parent.$t("settings.theme.title")'
  >
    <base-select
      action='changeState'
      item='settings.editor.theme'
      :labels='parent.$t("settings.theme.labels.content")'
      name='theme-change-theme'
      :title='parent.$t("settings.theme.labels.title")'
    />
  </base-section>
</template>
