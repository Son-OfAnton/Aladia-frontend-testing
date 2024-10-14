<template>
  <div :class="['container mx-auto px-4', sizeClass, props.class]">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface ContainerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl'; 
  class?: string; 
}

const props = defineProps<ContainerProps>();

const sizeClass = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'max-w-screen-sm';  
    case 'md':
      return 'max-w-screen-md';  
    case 'lg':
      return 'max-w-screen-lg';  
    case 'xl':
      return 'max-w-screen-xl'; 
    default:
      return 'max-w-screen-lg'; 
  }
});
</script>