<script setup>
import { reactive, ref } from 'vue';
import TodoList from './components/todoList.vue';

const todo = reactive([
  {
    name: 'porządki',
    tasks: [
      {
        text: 'Odkurzyć pokój',
        finished: false,
      },
      {
        text: 'Wynieść śmieci',
        finished: true,
      },
    ],
  },
  {
    name: 'szkoła',
    tasks: [
      {
        text: 'Zrobić matmę',
        finished: false,
      },
      {
        text: 'Przeczytać lekturę',
        finished: false,
      },
    ],
  },
]);

const isActive = ref(false);
</script>

<template>
  <h2
    :class="{ active: isActive }"
    class="accordion"
    @click="isActive = !isActive"
  >
    Tasks
  </h2>
  <div
    v-for="list in todo"
    :key="list.name"
    class="panel"
    :style="{ display: isActive ? 'block' : 'none' }"
  >
    <TodoList :todoList="list" />
  </div>
</template>

<style>
.accordion {
  background-color: #eee;
  cursor: pointer;
  padding: 18px;
  width: calc(100% - 36px);
  text-align: left;
  border: none;
  outline: none;
  transition: 0.4s;
}

.active,
.accordion:hover {
  background-color: #ccc;
}

.panel {
  padding: 0 18px;
  background-color: #fff;
  display: none;
  overflow: hidden;
}
</style>
