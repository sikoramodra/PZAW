<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  todoItem: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(['updateFinishedStatus']);

const updateFinishedStatus = () => {
  emit('updateFinishedStatus', {
    text: props.todoItem.text,
    finished: !props.todoItem.finished,
  });
};
</script>

<template>
  <li>
    {{ props.todoItem.text }}
    <input
      type="checkbox"
      :checked="props.todoItem.finished"
      @change="updateFinishedStatus"
    />
  </li>
</template>
