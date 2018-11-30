<template>
  <section 
    :class='wrapperClassNames'
  >
    <h2
      class='base-section__title'
      v-text='title'
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
