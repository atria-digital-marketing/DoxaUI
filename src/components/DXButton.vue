<template>
  <component
    :is="href ? 'a' : 'button'"
    class="button"
    :class="[
      [classes],
      `button--is-${color || 'primary'}`,
      variant ? `button--is-${variant}` : '',
      size ? `button--is-size-${size}` : '',
      { 'button--has-icon': hasIcon || $slots.icon },
      { 'button--is-dark': isDark },
    ]"
    :type="!href && type"
    :href="href"
    :target="target"
    :rel="target === '_blank' ? 'noopener noreferrer' : undefined"
    :disabled="!href && isDisabled"
  >
    <span v-if="$slots.icon" class="icon">
      <slot name="icon" />
    </span>
    <slot />
  </component>
</template>

<script setup lang="ts">
defineProps<{
  classes?: string;
  variant?: "solid" | "outlined";
  isDark?: boolean;
  color?:
    | "primary"
    | "secondary"
    | "utility"
    | "danger"
    | "neutral-dark"
    | "neutral"
    | "neutral-light";
  size?: "small" | "medium" | "large" | "xlarge";
  isDisabled?: boolean;
  hasIcon?: boolean;
  href?: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
  type?: string;
}>();
</script>
