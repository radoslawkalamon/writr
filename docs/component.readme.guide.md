# ${category}/${name} component

_Few words about component. What it does etc._

## Slots

_If there are slots in components, write their name and what they does_

- `top` - align buttons to top
- `bottom` - align buttons to bottom

## Props

_List every prop of component here and write something about it. Is required? Does it have default value? Show how to use it. Examples are fine._

- `name`: **String** - `req: true` - Name used to create class of main wrapper and input element.
- `validator`: **String** - `req: true` - Validator passed to `handy-validator`. Validates passed input value.
- `number`: **Number** - `req: false, def: 30` - Number passed to store, after changing input value.

## Usage

_Show how to use it!_

```html
<component>
  <component-child
    slot='top'
    ...
  />
  <component-child
    slot='top'
    ...
  />
  <component-child
    slot='bottom'
    ...
  />
</component>
```
