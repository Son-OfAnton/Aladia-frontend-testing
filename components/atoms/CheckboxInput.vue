<template>
  <div class="flex items-center space-x-2">
    <input
      type="checkbox"
      :required="props.required"
      :id="id"
      :class="[
        'form-checkbox transition duration-150 ease-in-out',
        sizeClass,
        props.class
      ]"
      v-model="isChecked"
      @change="emitChecked"
    />

    <label v-if="props.label" :for="id" class="cursor-pointer text-sm">
      <slot>{{ props.label }}</slot>
    </label>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

interface CheckboxProps {
  modelValue?: boolean;
  required?: boolean;
  size?: 'sm' | 'md' | 'lg';
  label?: string;
  id?: string;
  class?: string;
}

const props = defineProps<CheckboxProps>();
const emit = defineEmits(['update:modelValue']);

const isChecked = ref(props.modelValue);

const sizeClass = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'w-4 h-4'; 
    case 'lg':
      return 'w-6 h-6'; 
    case 'md':
    default:
      return 'w-5 h-5'; 
  }
});

function emitChecked() {
  emit('update:modelValue', isChecked.value);
}
</script>
