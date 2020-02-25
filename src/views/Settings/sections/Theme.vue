<template functional>
  <base-section
    :title="parent.$t('settings.theme.title')"
    name="theme"
  >
    <base-select
      :labels="parent.$t('settings.theme.labels.content')"
      :title="parent.$t('settings.theme.labels.title')"
      action="changeState"
      item="settings.editor.theme"
      name="theme-change-theme"
    />
  </base-section>
</template>
