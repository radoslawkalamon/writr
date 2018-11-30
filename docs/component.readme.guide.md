# ${category}/${name} component

Few words about component. What it does etc.

## Slots 

- `top` - align buttons to top
- `bottom` - align buttons to bottom

## Props

- `name` : emitted on `@action` and used to create `<button>` class name,
- `icon` : `required` : filename of picture from `@assets/icons/${theme}/${icon}.svg`,
- `alt` : sets `title` of `<button>` and `alt` of `<img>`,
- `toggle` = `true` : onClick toggle class `sidebar-button--active`.

## Usage

```html
<component>
  <component-child slot='top' ... />
  <component-child slot='top' ... />
  <component-child slot='bottom' ... />
</component>
```