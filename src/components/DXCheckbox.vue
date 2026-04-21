<template>
  <label
    class="checkbox"
    :class="[
      classes,
      `checkbox--is-${color || 'neutral-dark'}`,
      { 'checkbox--is-reversed': isReversed }
    ]"
  >
    <input
      type="checkbox"
      :checked="modelValue"
      :disabled="disabled"
      @change="emit('update:modelValue', ($event.target as HTMLInputElement).checked)"
    />
    <span v-if="label" class="checkbox__label">{{ label }}</span>
  </label>
</template>

<script setup lang="ts">
defineProps<{
  classes?: string;
  modelValue?: boolean;
  label?: string;
  disabled?: boolean;
  color?: 'primary' | 'secondary' | 'utility' | 'danger' | 'neutral-dark' | 'neutral' | 'neutral-light';
  isReversed?: boolean;
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void;
}>();
</script>
