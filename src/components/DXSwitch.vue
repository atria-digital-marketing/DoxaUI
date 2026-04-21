<template>
  <div
    class="switch"
    :class="[
      `switch--is-${color || 'neutral-dark'}`,
      { 'switch--is-reversed': isReversed },
    ]"
  >
    <input
      :id="id"
      type="checkbox"
      :checked="modelValue"
      :disabled="disabled"
      @change="
        emit('update:modelValue', ($event.target as HTMLInputElement).checked)
      "
    />
    <label :for="id" v-if="label">{{ label }}</label>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  id: string;
  modelValue?: boolean;
  label?: string;
  disabled?: boolean;
  color?:
    | "primary"
    | "secondary"
    | "utility"
    | "danger"
    | "neutral-dark"
    | "neutral"
    | "neutral-light";
  isReversed?: boolean;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", value: boolean): void;
}>();
</script>
