<template>
  <div class="flex flex-col space-y-2">
    <label v-if="label" :for="id" class="text-gray-600 font-medium">
      {{ label }}
    </label>

    <div class="relative flex items-center">
      <span v-if="leading" class="absolute left-3">
        <Icon :name="leading" :size="iconSize" :color="iconColor" />
      </span>

      <input :id="id" v-bind="$attrs" :type="type" :placeholder="placeholder" :class="[
        'w-full px-4 py-2 border rounded-lg text-black',
        sizeClass,
        inputPaddingClass,
        disabled ? 'bg-gray-100 cursor-not-allowed' : '',
        props.class
      ]" :disabled="disabled" :value="modelValue" @input="handleInput" />

      <span v-if="trailing" class="absolute right-3">
        <Icon :name="trailing" :size="iconSize" :color="iconColor" />
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface TextFieldProps {
  placeholder?: string;
  label?: string;
  modelValue?: string;
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  class?: string;
  id?: string;
  leading?: string;
  trailing?: string;
  iconSize?: string;
  iconColor?: string;
  type?: string;
}
const props = defineProps<TextFieldProps>();
const emit = defineEmits(['update:modelValue']);

const sizeClass = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'text-sm py-1';
    case 'lg':
      return 'text-lg py-3';
    case 'md':
    default:
      return 'text-base py-2';
  }
});

const inputPaddingClass = computed(() => {
  let padding = 'pl-4 pr-4';
  if (props.leading) {
    padding = 'pl-10 pr-4';
  }
  if (props.trailing) {
    padding = 'pl-4 pr-10';
  }
  if (props.leading && props.trailing) {
    padding = 'pl-10 pr-10';
  }
  return padding;
});

const iconSize = computed(() => {
  return props.iconSize ? props.iconSize : '24';
});

const iconColor = computed(() => {
  return props.iconColor ? props.iconColor : '#000000';
});

function handleInput(event: Event) {
  const target = event.target as HTMLInputElement | null;
  if (target) {
    emit('update:modelValue', target.value);
  }
}
</script>
