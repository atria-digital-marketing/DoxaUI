<template>
  <component :is="headingTag" class="heading" :class="headingClasses">
    <slot />
  </component>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  level?: "1" | "2" | "3" | "4" | "5" | "6";
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

const headingTag = computed(() => `h${props.level || "1"}`);

const headingClasses = computed(() =>
  [
    props.level ? `heading--is-level-${props.level}` : "",
    props.size ? `heading--is-${props.size}` : "",
    props.weight ? `heading--is-${props.weight}` : "",
    props.color ? `has-text-${props.color}` : "",
    props.hoverColor ? `has-text-${props.hoverColor}-hover` : "",
    props.fontFamily ? `heading--is-font-${props.fontFamily}` : "",
  ]
    .filter(Boolean)
    .join(" "),
);
</script>