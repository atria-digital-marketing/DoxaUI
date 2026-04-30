<script setup lang="ts">
defineProps<{
  class?: string;
}>();
</script>

<template>
  <div class="dx-helpers" :class="class">
    <slot />
  </div>
</template>
