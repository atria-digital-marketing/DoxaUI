# Button

A button component built on the Doxa design system.

## Demo

<DXDoc class="dx-helper">
### Variants

<div class="demo">
  <DXButton>Solid (default)</DXButton>
  <DXButton color="danger" variant="outlined">Outlined</DXButton>
</div>

### Colors

<div class="demo">
  <DXButton color="primary">Primary</DXButton>
  <DXButton color="secondary">Secondary</DXButton>
  <DXButton color="utility">Utility</DXButton>
  <DXButton color="danger">Danger</DXButton>
</div>

### Sizes

<div class="demo">
  <DXButton size="small">Small</DXButton>
  <DXButton size="medium">Medium</DXButton>
  <DXButton size="large">Large</DXButton>
  <DXButton size="xlarge">XLarge</DXButton>
</div>

### Dark

<div class="demo">
  <DXButton isDark>Dark Button</DXButton>
  <DXButton isDark variant="outlined">Dark Outlined</DXButton>
</div>

### Links

<div class="demo">
  <DXButton href="https://example.com">Link Button</DXButton>
  <DXButton href="https://example.com" target="_blank">External Link</DXButton>
</div>

### Custom Classes

<div class="demo">
  <DXButton classes="my-custom-class">Custom Class</DXButton>
</div>

### States

<div class="demo">
<DXButton>Normal</DXButton>
<DXButton disabled>Disabled</DXButton>
</div>

</DXDoc>

## Usage

```vue
<script setup>
import { DXButton } from "@atria-digital-marketing/doxaui";
</script>

<template>
  <DXButton>Click me</DXButton>
</template>
```

## Props

| Prop        | Type                                                                                                  | Default     | Description                 |
| ----------- | ----------------------------------------------------------------------------------------------------- | ----------- | --------------------------- |
| `variant`   | `'solid' \| 'outlined'`                                                                               | -           | Button style variant        |
| `color`     | `'primary' \| 'secondary' \| 'utility' \| 'danger' \| 'neutral-dark' \| 'neutral' \| 'neutral-light'` | `'primary'` | Button color                |
| `size`      | `'small' \| 'medium' \| 'large' \| 'xlarge'`                                                          | -           | Button size                 |
| `isDark`    | `boolean`                                                                                             | `false`     | Dark theme variant          |
| `disabled`  | `boolean`                                                                                             | `false`     | Disabled state              |
| `hasIcon`   | `boolean`                                                                                             | `false`     | Whether button has an icon  |
| `classes`   | `string`                                                                                              | -           | Additional CSS classes      |
| `href`      | `string`                                                                                              | -           | Link URL (renders as `<a>`) |
| `target`    | `'_blank' \| '_self' \| '_parent' \| '_top'`                                                          | -           | Link target attribute       |

## Slots

| Name      | Description    |
| --------- | -------------- |
| `default` | Button content |
| `icon`    | Icon content   |

## Customizing Colors

Create a custom SCSS config file that overrides Doxa variables **before** importing:

```scss
// my-doxa-config.scss
@use "@atria-digital-marketing/doxa/scss/abstracts/initial-variables" with (
  $dark-blue: #ff6b00,
  // primary → orange
  $teal: #00a8cc,
  // secondary → cyan
  $golden-years: #9b59b6,
  // utility → purple
  $dark-red: #e74c3c,
  // danger → red
  $dark-brown: #2c3e50,
  // neutral-dark → dark blue
  $beige: #95a5a6,
  // neutral → gray
  $light-beige: #ecf0f1 // neutral-light → light gray
);

// Now import components (they'll use your overrides)
@use "@atria-digital-marketing/doxa/scss/elements/button" as *;
```
