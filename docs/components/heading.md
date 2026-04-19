# Heading

A heading component built on the Doxa typography system.

## Demo

### Levels

<div class="demo">
  <DXHeading level="1">Heading 1</DXHeading>
  <DXHeading level="2">Heading 2</DXHeading>
  <DXHeading level="3">Heading 3</DXHeading>
  <DXHeading level="4">Heading 4</DXHeading>
  <DXHeading level="5">Heading 5</DXHeading>
  <DXHeading level="6">Heading 6</DXHeading>
</div>

### Sizes

<div class="demo">
  <DXHeading level="1" size="xxsmall">XXSmall heading</DXHeading>
  <DXHeading level="1" size="xsmall">XSmall heading</DXHeading>
  <DXHeading level="1" size="small">Small heading</DXHeading>
  <DXHeading level="1" size="medium">Medium heading</DXHeading>
  <DXHeading level="1" size="large">Large heading</DXHeading>
  <DXHeading level="1" size="xlarge">XLarge heading</DXHeading>
</div>

### Weights

<div class="demo">
  <DXHeading level="1" weight="light">Light weight</DXHeading>
  <DXHeading level="1" weight="default">Default weight</DXHeading>
  <DXHeading level="1" weight="semi-bold">Semi bold</DXHeading>
  <DXHeading level="1" weight="bold">Bold</DXHeading>
  <DXHeading level="1" weight="heavy-bold">Heavy bold</DXHeading>
</div>

### Colors

<div class="demo">
  <DXHeading level="1" color="primary">Primary</DXHeading>
  <DXHeading level="1" color="secondary">Secondary</DXHeading>
  <DXHeading level="1" color="utility">Utility</DXHeading>
  <DXHeading level="1" color="danger">Danger</DXHeading>
</div>

## Usage

```vue
<script setup>
import { DXHeading } from '@atria-digital-marketing/doxaui'
</script>

<template>
  <DXHeading level="1" weight="bold">Page Title</DXHeading>
</template>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `level` | `'1' \| '2' \| '3' \| '4' \| '5' \| '6'` | `'1'` | Heading level (renders as h1-h6) |
| `color` | `'primary' \| 'secondary' \| 'utility' \| 'danger' \| 'neutral-dark' \| 'neutral' \| 'neutral-light'` | - | Text color |
| `size` | `'xxsmall' \| 'xsmall' \| 'small' \| 'medium' \| 'large' \| 'xlarge'` | - | Text size |
| `weight` | `'light' \| 'default' \| 'semi-bold' \| 'bold' \| 'heavy-bold'` | - | Font weight |
| `fontFamily` | `'primary' \| 'secondary'` | - | Font family |