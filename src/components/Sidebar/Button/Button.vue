<template functional>
  <button
    @click='props.action(props.name)'
    :class="[
      'sidebar-button',
      `sidebar-button--${props.name}`,
      props.toggle && props.activePanel === props.name ? 'sidebar-button--active' : '',
    ]"
    :title='props.alt'
  >
    <img
      :alt='props.alt'
      :src='parent.resolveIcon(props.icon)'
    />
  </button>
</template>

<script src='./Button.js'></script>
<style  src='./Button.scss' lang='scss' scoped></style>
