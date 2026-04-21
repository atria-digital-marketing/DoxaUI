# Text

A text component built on the Doxa typography system.

## Demo

### Sizes

<div class="demo">
  <DXText size="xxsmall">XXSmall text</DXText>
  <DXText size="xsmall">XSmall text</DXText>
  <DXText size="small">Small text</DXText>
  <DXText size="medium">Medium text</DXText>
  <DXText size="large">Large text</DXText>
  <DXText size="xlarge">XLarge text</DXText>
</div>

### Weights

<div class="demo">
  <DXText weight="light">Light weight</DXText>
  <DXText weight="default">Default weight</DXText>
  <DXText weight="semi-bold">Semi bold</DXText>
  <DXText weight="bold">Bold</DXText>
  <DXText weight="heavy-bold">Heavy bold</DXText>
</div>

### Colors

<div class="demo">
  <DXText color="primary">Primary</DXText>
  <DXText color="secondary">Secondary</DXText>
  <DXText color="utility">Utility</DXText>
  <DXText color="danger">Danger</DXText>
</div>

### Font Family

<div class="demo">
  <DXText fontFamily="primary">Primary Font</DXText>
  <DXText fontFamily="secondary">Secondary Font</DXText>
</div>

## Usage

```vue
<script setup>
import { DXText } from '@atria-digital-marketing/doxaui'
</script>

<template>
  <DXText size="medium" weight="bold">Hello World</DXText>
</template>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `color` | `'primary' \| 'secondary' \| 'utility' \| 'danger' \| 'neutral-dark' \| 'neutral' \| 'neutral-light'` | - | Text color |
| `size` | `'xxsmall' \| 'xsmall' \| 'small' \| 'medium' \| 'large' \| 'xlarge'` | - | Text size |
| `weight` | `'light' \| 'default' \| 'semi-bold' \| 'bold' \| 'heavy-bold'` | - | Font weight |
| `fontFamily` | `'primary' \| 'secondary'` | - | Font family |