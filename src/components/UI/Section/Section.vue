<template>
  <section :class='this.wrapperClassNames'>
    <h2 class='base-section__title' v-text='this.title'></h2>
    <div class='base-section__content'>
      <slot></slot>
    </div>
  </section>
</template>

<script src='./Section.js'></script>
<style src='./Section.scss' lang='scss'></style>
