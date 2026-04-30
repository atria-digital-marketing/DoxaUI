# Input

An input component built on the Doxa design system.

## Demo

<DXDoc class="dx-helper">
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
  <DXInput type="textarea" label="Textarea" placeholder="Textarea input" />
</div>

### States

<div class="demo">
  <DXInput label="Normal" placeholder="Normal" />
  <DXInput label="Disabled" placeholder="Disabled" disabled />
  <DXInput label="With Error" placeholder="Error" :isError="true" errorText="This field is required" />
  <DXInput :isMaterial="true" label="Material" placeholder="" />
</div>

### Mask

<div class="demo">
  <DXInput label="Phone" placeholder="+1 (###) ###-####" dataMask="+1 (###) ###-####" />
  <DXInput label="Date" placeholder="DD/MM/YYYY" dataMask="##/##/####" />
  <DXInput label="Card Number" placeholder="#### #### #### ####" dataMask="#### #### #### ####" />
</div>

</DXDoc>

## Usage

```vue
<script setup>
import { DXInput } from "@atria-digital-marketing/doxaui";
import { ref } from "vue";

const value = ref("");
</script>

<template>
  <DXInput v-model="value" label="Email" placeholder="Enter your email" />
</template>
```

### With error state

```vue
<DXInput
  v-model="value"
  label="Email"
  :isError="hasError"
  errorText="Please enter a valid email"
/>
```

### With mask

```vue
<script setup>
import { DXInput } from "@atria-digital-marketing/doxaui";
import { ref } from "vue";

const phone = ref("");
const maskaDetail = ref(null);
</script>

<template>
  <DXInput
    v-model="phone"
    label="Phone"
    placeholder="+1 (###) ###-####"
    dataMask="+1 (###) ###-####"
    @update:maska="maskaDetail = $event"
  />
</template>
```

The `update:maska` event payload is a `MaskaDetail` object:

| Field       | Type      | Description                           |
| ----------- | --------- | ------------------------------------- |
| `masked`    | `string`  | The formatted (masked) value          |
| `unmasked`  | `string`  | The raw value with mask chars removed |
| `completed` | `boolean` | Whether the mask is fully filled      |

### With icon slot

Use the `icon` named slot to append an icon inside the input wrapper:

```vue
<DXInput v-model="value" label="Search" placeholder="Search...">
  <template #icon>
    <DXIcon icon="magnifyingGlass" />
  </template>
</DXInput>
```

## Props

| Prop          | Type                                                                                                  | Default  | Description                                       |
| ------------- | ----------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------- |
| `modelValue`  | `string`                                                                                              | -        | Input value (v-model)                             |
| `id`          | `string`                                                                                              | -        | HTML id attribute, also used as the label's `for` |
| `name`        | `string`                                                                                              | -        | HTML name attribute for form submission           |
| `type`        | `'text' \| 'email' \| 'password' \| 'number' \| 'textarea'`                                          | `'text'` | Input type                                        |
| `label`       | `string`                                                                                              | -        | Input label                                       |
| `placeholder` | `string`                                                                                              | -        | Input placeholder                                 |
| `disabled`    | `boolean`                                                                                             | `false`  | Disabled state                                    |
| `isError`     | `boolean`                                                                                             | `false`  | Toggles error styling                             |
| `errorText`   | `string`                                                                                              | -        | Error message displayed when `isError` is true    |
| `isMaterial`  | `boolean`                                                                                             | `false`  | Material floating-label style                     |
| `color`       | `'primary' \| 'secondary' \| 'utility' \| 'danger' \| 'neutral-dark' \| 'neutral' \| 'neutral-light'` | -        | Input color variant                               |
| `classes`     | `string`                                                                                              | -        | Additional CSS classes on the wrapper             |
| `dataMask`    | `string`                                                                                              | -        | Maska mask pattern (e.g. `##/##/####`)            |
| `ariaLabel`   | `string`                                                                                              | -        | `aria-label` for inputs without a visible label   |
| `min`         | `string`                                                                                              | -        | `min` attribute for `type="number"` inputs        |

## Events

| Event               | Payload         | Description                                            |
| ------------------- | --------------- | ------------------------------------------------------ |
| `update:modelValue` | `string`        | Emitted on every keystroke (v-model)                   |
| `update:maska`      | `MaskaDetail`   | Emitted after maska processes input (`masked`, `unmasked`, `completed`) |
| `change`            | `string`        | Emitted when the value is committed (on blur or Enter) |
| `focusout`          | `string`        | Emitted when the input loses focus                     |
| `keyup`             | `KeyboardEvent` | Emitted on key release                                 |

## Slots

| Slot      | Description                                              |
| --------- | -------------------------------------------------------- |
| `icon`    | Appended inside the field wrapper, after the input       |
| `default` | General-purpose slot inside the field wrapper            |
