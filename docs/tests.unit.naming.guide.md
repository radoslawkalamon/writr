# Test unit naming guide

```javascript
@/tests/unit/${family}/${category}/${name}/${category}.${name}.${whatYouTesting}.spec.js

// Global variables for components
@/tests/unit/${family}/${category}/${name}/${category}.${name}.globs.js
```

### Why?
`npm run test:unit Sidebar.Panel.computed` runs only computed unit tests for Sidebar/Panel component
