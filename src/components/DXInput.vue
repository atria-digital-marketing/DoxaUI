<template>
  <div
    class="field-group"
    :class="[
      classes,
      {
        'field-group--is-material': isMaterial,
        'field-group--is-disabled': disabled,
        'field-group--is-error': isError,
        [`field-group--is-material-${color || 'primary'}`]: isMaterial && color,
      },
    ]"
  >
    <label
      v-if="label"
      class="field-group__label"
      :class="{ 'field-group__label--is-bottom': isMaterial }"
      :for="id"
    >
      {{ label }}
    </label>

    <div class="field-group__field-wrap">
      <textarea
        v-if="type === 'textarea'"
        v-model="inputValue"
        v-maska="maskOptions"
        class="field-group__textarea"
        :id="id"
        :name="name"
        :placeholder="isMaterial ? '' : placeholder"
        :disabled="disabled"
        @input="handleInput"
        @change="handleChange"
        @focusout="handleFocusout"
        @keyup="handleKeyup"
        @maska="handleMaska"
      />

      <input
        v-else
        v-model="inputValue"
        v-maska="maskOptions"
        :data-maska="dataMask || null"
        :type="type || 'text'"
        class="field-group__input"
        :id="id"
        :name="name"
        :aria-label="ariaLabel"
        :placeholder="isMaterial ? '' : placeholder"
        :disabled="disabled"
        @input="handleInput"
        @change="handleChange"
        @focusout="handleFocusout"
        @keyup="handleKeyup"
        @maska="handleMaska"
        :min="min"
      />
      <slot v-if="$slots.icon" name="icon" />
      <slot />
    </div>

    <span v-if="isError && errorText" class="field-group__error-msg">
      {{ errorText }}
    </span>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { vMaska } from "maska/vue";
import type { MaskInputOptions, MaskaDetail } from "maska";

const props = defineProps<{
  id?: string;
  name?: string;
  classes?: string;
  modelValue?: string;
  type?: "text" | "email" | "password" | "number" | "textarea";
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  isError?: boolean;
  errorText?: string;
  isMaterial?: boolean;
  color?:
    | "primary"
    | "secondary"
    | "utility"
    | "danger"
    | "neutral-dark"
    | "neutral"
    | "neutral-light";
  dataMask?: string;
  ariaLabel?: string;
  min?: string;
}>();

const maskOptions = computed<MaskInputOptions>(() => ({
  mask: props.dataMask,
  eager: false,
}));

const emit = defineEmits<{
  (e: "update:modelValue", value: string): void;
  (e: "update:maska", detail: MaskaDetail): void;
  (e: "change", value: string): void;
  (e: "focusout", value: string): void;
  (e: "keyup", event: KeyboardEvent): void;
}>();

const inputValue = computed({
  get: () => props.modelValue,
  set: (value: string) => emit("update:modelValue", value),
});

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement | HTMLTextAreaElement;
  emit("update:modelValue", target.value);
};

const handleChange = (event: Event) => {
  const target = event.target as HTMLInputElement | HTMLTextAreaElement;
  emit("change", target.value);
};

const handleFocusout = (event: Event) => {
  const target = event.target as HTMLInputElement | HTMLTextAreaElement;
  emit("focusout", target.value);
};

const handleKeyup = (event: KeyboardEvent) => {
  emit("keyup", event);
};

const handleMaska = (event: CustomEvent<MaskaDetail>) => {
  emit("update:maska", event.detail);
};
</script>
