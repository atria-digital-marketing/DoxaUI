# Checkbox

A checkbox component built on the Doxa design system.

## Demo

<DXDoc class="dx-helper">
### Basic

<div class="demo">
  <DXCheckbox label="I agree" />
</div>

### Colors

<div class="demo">
  <DXCheckbox label="Primary" color="primary" />
  <DXCheckbox label="Secondary" color="secondary" />
  <DXCheckbox label="Danger" color="danger" />
</div>

### States

<div class="demo">
  <DXCheckbox label="Normal" />
  <DXCheckbox label="Disabled" disabled />
  <DXCheckbox label="Reversed" is-reversed />
</div>

</DXDoc>

## Usage

```vue
<script setup>
import { DXCheckbox } from '@atria-digital-marketing/doxaui'
import { ref } from 'vue'

const checked = ref(false)
</script>

<template>
  <DXCheckbox v-model="checked" label="I agree" />
</template>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `modelValue` | `boolean` | - | Checkbox value (v-model) |
| `label` | `string` | - | Checkbox label |
| `disabled` | `boolean` | `false` | Disabled state |
| `color` | `'primary' \| 'secondary' \| 'utility' \| 'danger' \| 'neutral-dark' \| 'neutral' \| 'neutral-light'` | `'neutral-dark'` | Checkbox color |
| `isReversed` | `boolean` | `false` | Reversed layout |