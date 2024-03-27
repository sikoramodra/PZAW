<script setup>
const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true,
  },
});

const emit = defineEmits(['update:modelValue']);
</script>

<template>
  <input
    type="checkbox"
    :checked="props.modelValue"
    @change="emit('update:modelValue', $event.target.checked)"
  />
  <slot />
  <br />
</template>
