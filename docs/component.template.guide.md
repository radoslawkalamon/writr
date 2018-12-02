# Component Template guide

```javascript
// App.js
import ExampleTag from '@/components/UI/ExampleTag/ExampleTag.vue';

// App.vue
<ExampleTag
  @action='onAction'
  @click='onClick'
  :class='example-tag-class__title'
  key='example-tag-key'
  v-if='showExampleTag'
/>
```

## General

- Every prop should be written in new line.
- If possible, every tag should be selfclosed.
- Tag names should be exactly the same as imports.

## Props

*Every group should be sorted in alfabetical order*

1. Events / Emits hooks
2. Props (static and dynamic)
3. V-directives
