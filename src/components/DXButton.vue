<template>
  <button
    class="button"
    :class="[
      `button--is-${color || 'primary'}`,
      variant ? `button--is-${variant}` : '',
      size ? `button--is-size-${size}` : '',
      { 'button--has-icon': hasIcon || $slots.icon }
    ]"
    :disabled="disabled"
  >
    <span v-if="$slots.icon" class="icon">
      <slot name="icon" />
    </span>
    <slot />
  </button>
</template>

<script setup lang="ts">
defineProps<{
  variant?: 'solid' | 'outlined';
  color?: 'primary' | 'secondary' | 'utility' | 'danger' | 'neutral-dark' | 'neutral' | 'neutral-light';
  size?: 'small' | 'medium' | 'large' | 'xlarge';
  disabled?: boolean;
  hasIcon?: boolean;
}>();
</script>
