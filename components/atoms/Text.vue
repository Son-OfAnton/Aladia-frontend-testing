<template>
  <p :class="[sizeClass, weightClass, props.class]">
    <slot />
  </p>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface ParagraphProps {
  size?: 'sm' | 'md' | 'lg'
  weight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold'
  class?: string
}

const props = defineProps<ParagraphProps>()

const sizeClass = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'text-sm'
    case 'lg':
      return 'text-lg'
    case 'md':
    default:
      return 'text-base'
  }
})

const weightClass = computed(() => {
  switch (props.weight) {
    case 'light':
      return 'font-light'
    case 'normal':
      return 'font-normal'
    case 'medium':
      return 'font-medium'
    case 'semibold':
      return 'font-semibold'
    case 'bold':
      return 'font-bold'
    default:
      return ''
  }
})
</script>
