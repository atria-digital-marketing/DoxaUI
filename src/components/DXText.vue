<template>
  <p class="copy" :class="[classes, copyClasses]">
    <slot />
  </p>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  classes?: string;
  color?:
    | "primary"
    | "secondary"
    | "utility"
    | "danger"
    | "neutral-dark"
    | "neutral"
    | "neutral-light";
  hoverColor?:
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
    props.size ? `copy--is-${props.size}` : "",
    props.weight ? `copy--is-${props.weight}` : "",
    props.color ? `has-text-${props.color}` : "",
    props.hoverColor ? `has-text-${props.hoverColor}-hover` : "",
    props.fontFamily ? `copy--is-font-${props.fontFamily}` : "",
  ]
    .filter(Boolean)
    .join(" "),
);
</script>