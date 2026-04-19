<template>
  <p class="copy" :class="copyClasses">
    <slot />
  </p>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  color?:
    | "primary"
    | "secondary"
    | "utility"
    | "danger"
    | "neutral-dark"
    | "neutral"
    | "neutral-light";
  size?: "xxsmall" | "xsmall" | "small" | "medium" | "large" | "xlarge";
  weight?: "light" | "default" | "semi-bold" | "bold" | "heavy-bold";
  fontFamily?: "primary" | "secondary";
}>();

const copyClasses = computed(() =>
  [
    props.size ? `copy--is-size-${props.size}` : "",
    props.weight ? `copy--is-weight-${props.weight}` : "",
    props.color ? `copy--is-${props.color}` : "",
    props.fontFamily ? `copy--is-font-${props.fontFamily}` : "",
  ]
    .filter(Boolean)
    .join(" "),
);
</script>
