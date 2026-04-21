# Switch

A toggle switch component built on the Doxa design system.

## Demo

<DXDoc class="dx-helper">
### Basic

<div class="demo">
  <DXSwitch id="switch-basic" label="Enable feature" />
</div>

### Colors

<div class="demo">
  <DXSwitch id="switch-color-primary" label="Primary" color="primary" />
  <DXSwitch id="switch-color-secondary" label="Secondary" color="secondary" />
  <DXSwitch id="switch-color-danger" label="Danger" color="danger" />
</div>

### States

<div class="demo">
  <DXSwitch id="switch-state-normal" label="Normal" />
  <DXSwitch id="switch-state-disabled" label="Disabled" disabled />
  <DXSwitch id="switch-state-reversed" label="Reversed" is-reversed />
</div>

</DXDoc>

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