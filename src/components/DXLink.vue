<template>
  <a
    class="link"
    :class="linkClasses"
    :href="href"
    :target="target"
    :rel="target === '_blank' ? 'noopener noreferrer' : undefined"
  >
    <slot />
  </a>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  href: string;
  color?: 'primary' | 'secondary' | 'utility' | 'danger' | 'neutral-dark' | 'neutral' | 'neutral-light';
  size?: 'xxsmall' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';
  weight?: 'light' | 'default' | 'semi-bold' | 'bold' | 'heavy-bold';
  fontFamily?: 'primary' | 'secondary';
  target?: '_blank' | '_self' | '_parent' | '_top';
}>()

const linkClasses = computed(() => [
  props.size ? `link--is-size-${props.size}` : '',
  props.weight ? `link--is-weight-${props.weight}` : '',
  props.color ? `link--is-${props.color}` : '',
  props.fontFamily ? `link--is-font-${props.fontFamily}` : ''
].filter(Boolean).join(' '))
</script>