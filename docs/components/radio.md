# Radio

A radio component built on the Doxa design system.

## Demo

<DXDoc class="dx-helper">
### Basic

<div class="demo">
  <DXRadio value="option1" label="Option 1" model-value="option1" />
  <DXRadio value="option2" label="Option 2" model-value="option1" />
</div>

### Colors

<div class="demo">
  <DXRadio value="opt1" label="Primary" color="primary" model-value="opt1" />
  <DXRadio value="opt2" label="Secondary" color="secondary" model-value="opt1" />
</div>

### States

<div class="demo">
  <DXRadio value="opt1" label="Normal" model-value="opt1" />
  <DXRadio value="opt2" label="Disabled" disabled model-value="opt1" />
  <DXRadio value="opt3" label="Reversed" is-reversed model-value="opt1" />
</div>

</DXDoc>

## Usage

```vue
<script setup>
import { DXRadio } from '@atria-digital-marketing/doxaui'
import { ref } from 'vue'

const selected = ref('option1')
</script>

<template>
  <DXRadio v-model="selected" value="option1" label="Option 1" />
  <DXRadio v-model="selected" value="option2" label="Option 2" />
</template>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `modelValue` | `string` | - | Selected value (v-model) |
| `value` | `string` | - | Radio value |
| `label` | `string` | - | Radio label |
| `disabled` | `boolean` | `false` | Disabled state |
| `color` | `'primary' \| 'secondary' \| 'utility' \| 'danger' \| 'neutral-dark' \| 'neutral' \| 'neutral-light'` | `'neutral-dark'` | Radio color |
| `isReversed` | `boolean` | `false` | Reversed layout |