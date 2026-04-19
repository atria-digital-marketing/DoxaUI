<script setup lang="ts">
defineProps<{
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

<template>
  <div
    class="switch"
    :class="[
      `switch--is-${color || 'neutral-dark'}`,
      { 'switch--is-reversed': isReversed }
    ]"
  >
    <input
      type="checkbox"
      :checked="modelValue"
      :disabled="disabled"
      @change="emit('update:modelValue', ($event.target as HTMLInputElement).checked)"
    />
    <label v-if="label">{{ label }}</label>
  </div>
</template>

