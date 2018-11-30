# Test unit naming guide

## Naming tests
`@/tests/unit/${family}/${category}/${name}/${category}.${name}.${whatYouTesting}.spec.js`

## Naming global variables
`@/tests/unit/${family}/${category}/${name}/${category}.${name}.globs.js`

### Why?
`npm run test:unit Sidebar.Panel.computed` runs only computed unit tests for Sidebar/Panel component