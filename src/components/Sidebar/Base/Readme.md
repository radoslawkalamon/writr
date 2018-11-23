# Sidebar/Base component

Main wrapper for sidebar. It got 2 slots for buttons positioning:

- `top` - align buttons to top
- `bottom` - align buttons to bottom

Usage:

```html
<component>
  <component-child slot='top' ... />
  <component-child slot='top' ... />
  <component-child slot='bottom' ... />
</component>
```