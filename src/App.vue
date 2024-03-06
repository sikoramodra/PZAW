<script setup>
import { reactive } from 'vue';
import TodoItem from './components/todoItem.vue';

const todo = reactive([
  {
    text: 'Zrobić matmę',
    finished: false,
  },
  {
    text: 'Odkurzyć pokój',
    finished: false,
  },
  {
    text: 'Wynieść śmieci',
    finished: true,
  },
]);
</script>

<template>
  <ul>
    <template v-for="task in todo">
      <TodoItem :text="task.text" :finished="task.finished" @changed="(task) => task.finished = !task.finished" />
    </template>
  </ul>
  <div v-if="todo.every((task) => task.finished)">All tasks are finished!</div>
</template>


