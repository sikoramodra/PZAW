<script setup>
import { reactive } from 'vue';

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
    <template v-for="(task, index) in todo" :key="index">
      <li :class="{ finished: task.finished }">
        {{ task.text }}
        <input type="checkbox" v-model="task.finished" />
      </li>
    </template>
  </ul>
  <div v-if="todo.every((task) => task.finished)">All tasks are finished!</div>
</template>

<style>
.finished {
  color: gray;
  text-decoration: line-through;
}
</style>
