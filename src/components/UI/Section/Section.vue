<template functional>
  <section
    :class='`base-section base-section--${props.name}`'
  >
    <h2
      class='base-section__title'
      v-text='props.title'
    />
    <div
      class='base-section__content'
    >
      <slot />
    </div>
  </section>
</template>

<script src='./Section.js'></script>
<style src='./Section.scss' lang='scss' scoped></style>
