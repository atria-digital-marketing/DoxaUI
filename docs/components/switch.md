# Switch

A toggle switch component built on the Doxa design system.

## Demo

### Basic

<div class="demo">
  <DXSwitch label="Enable feature" />
</div>

### Colors

<div class="demo">
  <DXSwitch label="Primary" color="primary" />
  <DXSwitch label="Secondary" color="secondary" />
  <DXSwitch label="Danger" color="danger" />
</div>

### States

<div class="demo">
  <DXSwitch label="Normal" />
  <DXSwitch label="Disabled" disabled />
  <DXSwitch label="Reversed" is-reversed />
</div>

## Usage

```vue
<script setup>
import { DXSwitch } from '@atria-digital-marketing/doxaui'
import { ref } from 'vue'

const enabled = ref(false)
</script>

<template>
  <DXSwitch v-model="enabled" label="Enable feature" />
</template>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `modelValue` | `boolean` | - | Switch value (v-model) |
| `label` | `string` | - | Switch label |
| `disabled` | `boolean` | `false` | Disabled state |
| `color` | `'primary' \| 'secondary' \| 'utility' \| 'danger' \| 'neutral-dark' \| 'neutral' \| 'neutral-light'` | `'neutral-dark'` | Switch color |
| `isReversed` | `boolean` | `false` | Reversed layout |