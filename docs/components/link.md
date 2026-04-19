# Link

A link component built on the Doxa typography system.

## Demo

### Sizes

<div class="demo">
  <DXLink href="#" size="xxsmall">XXSmall link</DXLink>
  <DXLink href="#" size="xsmall">XSmall link</DXLink>
  <DXLink href="#" size="small">Small link</DXLink>
  <DXLink href="#" size="medium">Medium link</DXLink>
  <DXLink href="#" size="large">Large link</DXLink>
  <DXLink href="#" size="xlarge">XLarge link</DXLink>
</div>

### Weights

<div class="demo">
  <DXLink href="#" weight="light">Light weight</DXLink>
  <DXLink href="#" weight="default">Default weight</DXLink>
  <DXLink href="#" weight="semi-bold">Semi bold</DXLink>
  <DXLink href="#" weight="bold">Bold</DXLink>
</div>

### Colors

<div class="demo">
  <DXLink href="#" color="primary">Primary</DXLink>
  <DXLink href="#" color="secondary">Secondary</DXLink>
  <DXLink href="#" color="utility">Utility</DXLink>
  <DXLink href="#" color="danger">Danger</DXLink>
</div>

## Usage

```vue
<script setup>
import { DXLink } from '@atria-digital-marketing/doxaui'
</script>

<template>
  <DXLink href="https://example.com" target="_blank">Click here</DXLink>
</template>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `href` | `string` | - | Link URL |
| `color` | `'primary' \| 'secondary' \| 'utility' \| 'danger' \| 'neutral-dark' \| 'neutral' \| 'neutral-light'` | - | Link color |
| `size` | `'xxsmall' \| 'xsmall' \| 'small' \| 'medium' \| 'large' \| 'xlarge'` | - | Text size |
| `weight` | `'light' \| 'default' \| 'semi-bold' \| 'bold' \| 'heavy-bold'` | - | Font weight |
| `fontFamily` | `'primary' \| 'secondary'` | - | Font family |
| `target` | `'_blank' \| '_self' \| '_parent' \| '_top'` | - | Link target |