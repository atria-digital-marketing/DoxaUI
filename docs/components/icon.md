# Icon

An icon component that renders inline SVGs from a built-in icon set or consumer-provided icons.

## Demo

<DXDoc class="dx-helper">
### Built-in Icons

<div class="demo">
  <DXIcon icon="check" />
  <DXIcon icon="close" />
  <DXIcon icon="arrowRight" />
</div>

### Sizes

<div class="demo">
  <DXIcon icon="check" size="xxsmall" />
  <DXIcon icon="check" size="xsmall" />
  <DXIcon icon="check" size="small" />
  <DXIcon icon="check" size="medium" />
  <DXIcon icon="check" size="large" />
  <DXIcon icon="check" size="xlarge" />
  <DXIcon icon="check" size="xxlarge" />
</div>

### Colors

<div class="demo">
  <DXIcon icon="check" color="primary" />
  <DXIcon icon="check" color="secondary" />
  <DXIcon icon="check" color="utility" />
  <DXIcon icon="check" color="danger" />
  <DXIcon icon="check" color="neutral-dark" />
</div>

</DXDoc>

## Usage

```vue
<script setup>
import { DXIcon } from "@atria-digital-marketing/doxaui";
</script>

<template>
  <DXIcon icon="check" />
</template>
```

### With additional icons

Consumer applications can extend the built-in icon set by passing an `additionalIcons` object. Each value should be a raw SVG string.

```vue
<script setup>
import { DXIcon } from "@atria-digital-marketing/doxaui";
import customIcon from "./assets/my-icon.svg?raw";

const extraIcons = { customIcon };
</script>

<template>
  <DXIcon icon="customIcon" :additionalIcons="extraIcons" />
</template>
```

## Props

| Prop              | Type                                                                                   | Default     | Description                                         |
| ----------------- | -------------------------------------------------------------------------------------- | ----------- | --------------------------------------------------- |
| `icon`            | `string`                                                                               | -           | Key of the icon to render                           |
| `color`           | `string`                                                                               | `'primary'` | Color variant class suffix (`icon--is-{color}`)     |
| `size`            | `'xxsmall' \| 'xsmall' \| 'small' \| 'medium' \| 'large' \| 'xlarge' \| 'xxlarge'`   | `'small'`   | Size variant class suffix (`icon--is-{size}`)       |
| `classes`         | `string`                                                                               | -           | Additional CSS classes on the wrapper `<span>`      |
| `additionalIcons` | `Record<string, string>`                                                               | -           | Extra icons merged with the built-in set at runtime |
| `ariaHidden`      | `boolean`                                                                              | `false`     | Sets `aria-hidden` on the wrapper                   |

## Built-in Icons

| Key          | Description |
| ------------ | ----------- |
| `check`      | Checkmark   |
| `close`      | Close / X   |
| `arrowRight` | Arrow right |
