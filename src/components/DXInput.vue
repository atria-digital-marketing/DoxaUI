<template>
  <div class="form">
    <div
      class="field-group"
      :class="[
        classes,
        {
          'field-group--is-material': isMaterial,
          'field-group--is-disabled': disabled,
          'field-group--is-error': error,
          [`field-group--is-material-${color || 'primary'}`]: isMaterial && color
        }
      ]"
    >
      <label
        v-if="label"
        class="field-group__label"
        :class="{ 'field-group__label--is-bottom': isMaterial }"
      >
        {{ label }}
      </label>
      
      <textarea
        v-if="type === 'textarea'"
        v-model="inputValue"
        class="field-group__textarea"
        :placeholder="placeholder"
        :disabled="disabled"
        @input="handleInput"
      />
      
      <input
        v-else
        v-model="inputValue"
        :type="type || 'text'"
        class="field-group__input"
        :placeholder="placeholder"
        :disabled="disabled"
        @input="handleInput"
      />
      
      <span v-if="error" class="field-group__error-msg">
        {{ error }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  classes?: string;
  modelValue?: string;
  type?: 'text' | 'email' | 'password' | 'number' | 'textarea';
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  error?: string;
  isMaterial?: boolean;
  color?: 'primary' | 'secondary' | 'utility' | 'danger' | 'neutral-dark' | 'neutral' | 'neutral-light';
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void;
}>();

const inputValue = computed({
  get: () => props.modelValue,
  set: (value: string) => emit('update:modelValue', value)
});

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement | HTMLTextAreaElement;
  emit('update:modelValue', target.value);
};
</script>
