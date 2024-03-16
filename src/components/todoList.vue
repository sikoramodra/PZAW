<script setup>
import { computed, defineProps, ref } from 'vue';
import TodoItem from './todoItem.vue';

const props = defineProps({
  todoList: {
    type: Object,
    required: true,
  },
});

const isActive = ref(false);

const handleUpdateFinishedStatus = ({ text, finished }) => {
  const item = props.todoList.tasks.find((item) => item.text === text);
  if (item) item.finished = finished;
};

const allTasksFinished = computed(() => {
  return props.todoList.tasks.every((task) => task.finished);
});
</script>

<template>
  <p
    class="accordion"
    :class="{ active: isActive, finished: allTasksFinished }"
    @click="isActive = !isActive"
  >
    {{ props.todoList.name }}
  </p>
  <div class="panel" v-bind:style="{ display: isActive ? 'block' : 'none' }">
    <ul>
      <TodoItem
        v-for="item in props.todoList.tasks"
        :key="item.text"
        :todoItem="item"
        @updateFinishedStatus="handleUpdateFinishedStatus"
      />
    </ul>
  </div>
</template>

<style>
.finished {
  color: #888;
  text-decoration: line-through;
}
</style>
