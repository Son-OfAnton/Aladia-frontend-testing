<template>
  <div :class="[props.class, sizeClass]">
    <img
      :src="props.src"
      :alt="props.alt"
      :class="['w-full h-full object-cover', sizeClass]"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface ImageProps {
  src: string; 
  alt: string; 
  size?: 'sm' | 'md' | 'lg'; 
  class?: string; 
}

const props = defineProps<ImageProps>();

const sizeClass = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'w-20 h-24'; 
    case 'md':
      return 'w-32 h-32'; 
    case 'lg':
      return 'w-40 h-40'; 
    default:
      return ''; 
  }
});
</script>
