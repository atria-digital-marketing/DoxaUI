# Input

An input component built on the Doxa design system.

## Demo

### Basic

<div class="demo">
  <DXInput label="Email" placeholder="Enter your email" />
</div>

### Types

<div class="demo">
  <DXInput type="text" label="Text" placeholder="Text input" />
  <DXInput type="password" label="Password" placeholder="Password" />
  <DXInput type="email" label="Email" placeholder="Email input" />
  <DXInput type="number" label="Number" placeholder="Number input" />
</div>

### States

<div class="demo">
  <DXInput label="Normal" placeholder="Normal" />
  <DXInput label="Disabled" placeholder="Disabled" disabled />
  <DXInput label="With Error" placeholder="Error" error="This field is required" />
</div>

## Usage

```vue
<script setup>
import { DXInput } from '@atria-digital-marketing/doxaui'
import { ref } from 'vue'

const value = ref('')
</script>

<template>
  <DXInput v-model="value" label="Email" placeholder="Enter your email" />
</template>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `modelValue` | `string` | - | Input value (v-model) |
| `type` | `'text' \| 'email' \| 'password' \| 'number' \| 'textarea'` | `'text'` | Input type |
| `label` | `string` | - | Input label |
| `placeholder` | `string` | - | Input placeholder |
| `disabled` | `boolean` | `false` | Disabled state |
| `error` | `string` | - | Error message |
| `isMaterial` | `boolean` | `false` | Material style |
| `color` | `'primary' \| 'secondary' \| 'utility' \| 'danger' \| 'neutral-dark' \| 'neutral' \| 'neutral-light'` | - | Input color |