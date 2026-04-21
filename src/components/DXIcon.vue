<template>
  <span
    class="icon"
    v-html="icons[icon]"
    :aria-hidden="ariaHidden"
    :class="iconClasses"
  />
</template>

<script setup lang="ts">
import { computed } from "vue";
import * as defaultIcons from "../assets/icons";

const props = defineProps<{
  icon: string;
  color?: string;
  size?:
    | "xxsmall"
    | "xsmall"
    | "small"
    | "medium"
    | "large"
    | "xlarge"
    | "xxlarge";
  classes?: string;
  additionalIcons?: Record<string, string>;
  ariaHidden?: boolean;
}>();

const icons = computed<Record<string, string>>(() => ({
  ...defaultIcons,
  ...props.additionalIcons,
}));

const iconClasses = computed(() => [
  `icon--is-${props.color || "primary"}`,
  `icon--is-${props.size || "small"}`,
  props.classes,
]);
</script>

<style lang="scss">
// @use "";

.icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
</style>
