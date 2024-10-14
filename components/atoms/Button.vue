<template>
  <button
    :class="['relative inline-flex items-center py-2 px-4 rounded-lg transition-all focus:outline-none w-full min-h-11', buttonClass, props.class]"
    :disabled="props.disabled" @click="props.onClick">
    <template v-if="props.leading">
      <div class="absolute left-16 flex-shrink-0">
        <Icon :name="props.leading" :size="iconSize" :color="iconColor"/>
      </div>
    </template>

    <span class="mx-auto">
      <slot />
    </span>

    <template v-if="props.trailing">
      <div class="absolute right-16 flex-shrink-0">
        <Icon :name="props.trailing" :size="iconSize" :color="iconColor" />
      </div>
    </template>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue';

export interface ButtonProps {
  variant?: 'primary' | 'outline' | 'link' | 'destructive';
  disabled?: boolean;
  leading?: [string, string] | string;
  trailing?: [string, string] | string;
  iconSize?: string,
  iconColor?: string,
  class?: string;
  onClick?: () => void;
}

const props = defineProps<ButtonProps>();

const buttonClass = computed(() => {
  if (props.disabled) {
    return 'bg-gray-400 text-gray-100 cursor-not-allowed';
  }

  switch (props.variant) {
    case 'outline':
      return 'border border-black bg-white text-black';
    case 'link':
      return 'text-black underline bg-transparent';
    case 'destructive':
      return 'bg-red-600 text-white hover:bg-red-700';
    case 'primary':
    default:
      return 'bg-black text-white';
  }
});

const iconSize = computed(() => {
  return props.iconSize ? props.iconSize : 24;
});

const iconColor = computed(() => {
  return props.iconColor ? props.iconColor : '#000000';
});

</script>
