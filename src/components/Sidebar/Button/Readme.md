# Sidebar/Button component

Should be used within `<sidebar-base>`

## Usage:

```html
<component
  @action='{Function}'
  name='{String}'
  icon='{String}'
  alt='{String}'
  toggle='{Boolean}'
></component>
```
**@emit** `action` onClick.

## @props

- `name` : emitted on `@action` and used to create `<button>` class name,
- `icon` : filename of picture from `@assets/icons/${theme}/${icon}.svg`,
- `alt` : sets `title` of `<button>` and `alt` of `<img>`,
- `toggle` = `true` : onClick toggle class `sidebar-button--active`.