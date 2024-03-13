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
        text: 'Perzeczytać lekturę',
        finished: false,
      },
    ],
  },
]);

const isActive = ref(false);
</script>

<template>
  <h2 class="accordion" :class="{ active: isActive }" @click="isActive = !isActive">Tasks</h2>
  <div v-for="task in todo" class="panel" v-bind:style="{ display: isActive ? 'block' : 'none' }">
    <TodoList >{{ task.name }}</TodoList>
  </div>
</template>

<style>
.accordion {
  background-color: #eee;
  color: #444;
  cursor: pointer;
  padding: 18px;
  width: calc(100% - 36px);
  text-align: left;
  border: none;
  outline: none;
  transition: 0.4s;
}

.active, .accordion:hover {
  background-color: #ccc;
}

.panel {
  padding: 0 18px;
  background-color: white;
  display: none;
  overflow: hidden;
}

.accordion:after {
  content: '\02795';
  font-size: 13px;
  color: #777;
  float: right;
  margin-left: 5px;
}

.active:after {
  content: "\2796";
}
</style>