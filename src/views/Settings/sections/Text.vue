<template functional>
  <base-section
    :title="parent.$t('settings.text.title')"
    name="text"
  >
    <base-input
      :error-tip="parent.$t('settings.text.fontSize.errorTip')"
      :title="parent.$t('settings.text.fontSize.title')"
      action="changeState"
      item="settings.editor.text.fontSize"
      name="text-font-size"
      unit="px"
    />
    <base-input
      :error-tip="parent.$t('settings.text.paragraphIndent.errorTip')"
      :title="parent.$t('settings.text.paragraphIndent.title')"
      action="changeState"
      item="settings.editor.text.paragraphIndent"
      name="text-paragraph-indent"
      unit="px"
    />
    <base-input
      :error-tip="parent.$t('settings.text.lineHeight.errorTip')"
      :title="parent.$t('settings.text.lineHeight.title')"
      action="changeState"
      item="settings.editor.text.lineHeight"
      name="text-line-height"
      unit="em"
    />
  </base-section>
</template>
