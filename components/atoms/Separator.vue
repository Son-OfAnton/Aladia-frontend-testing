<template>
  <div
    :class="[
      orientationClass, 
      thicknessClass, 
      'bg-gray-300', 
      props.class 
    ]"
  />
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface SeparatorProps {
  orientation?: 'horizontal' | 'vertical';
  thickness?: 'thin' | 'medium' | 'thick';
  class?: string;
}

const props = defineProps<SeparatorProps>();

const orientationClass = computed(() => {
  return props.orientation === 'vertical' 
    ? 'h-full w-px my-0'  
    : 'w-full h-px mx-0'; 
});

const thicknessClass = computed(() => {
  switch (props.thickness) {
    case 'medium':
      return props.orientation === 'vertical' ? 'w-0.5' : 'h-0.5';
    case 'thick':
      return props.orientation === 'vertical' ? 'w-1' : 'h-1';
    case 'thin':
    default:
      return props.orientation === 'vertical' ? 'w-px' : 'h-px';
  }
});
</script>