<script setup lang="ts">
defineProps<{
  modelValue?: string;
  value?: string;
  label?: string;
  disabled?: boolean;
  color?: 'primary' | 'secondary' | 'utility' | 'danger' | 'neutral-dark' | 'neutral' | 'neutral-light';
  isReversed?: boolean;
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void;
}>();
</script>

<template>
  <label
    class="radio"
    :class="[
      `radio--is-${color || 'neutral-dark'}`,
      { 'radio--is-reversed': isReversed }
    ]"
  >
    <input
      type="radio"
      :value="value"
      :checked="modelValue === value"
      :disabled="disabled"
      @change="emit('update:modelValue', value!)"
    />
    <span v-if="label" class="radio__label">{{ label }}</span>
  </label>
</template>

