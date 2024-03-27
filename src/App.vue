<script setup>
import { reactive, ref } from 'vue';
import TodoList from '@/components/todoList.vue';
import TodoItem from '@/components/todoItem.vue';
import TodoItemInput from '@/components/todoItemInput.vue';

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
const newTodoName = ref('');
const todoListRefs = ref([]);

const addTodoList = () => {
  if (newTodoName.value.trim() !== '') {
    todo.push({
      name: newTodoName.value,
      tasks: [],
    });
    newTodoName.value = '';
  }
};
const addTodoItem = (list, text) => {
  if (text.trim() !== '') {
    list.tasks.push({
      finished: false,
      text: text,
    });
  }
};
const collapse = () => {
  isActive.value = !isActive.value;
  todoListRefs.value.forEach((list) => list.collapse());
};
</script>

<template>
  <h2 :class="{ active: isActive }" class="accordion" @click="collapse">
    Tasks
  </h2>
  <div class="panel" :style="{ display: isActive ? 'block' : 'none' }">
    <TodoList
      :tasks="list.tasks"
      v-for="(list, index) in todo"
      :key="list.name"
      :ref="(el) => (todoListRefs[index] = el)"
    >
      <template #header>
        {{ list.name }} ({{
          list.tasks.filter((task) => task.finished).length
        }}
        / {{ list.tasks.length }})
      </template>
      <template #default>
        <TodoItem
          v-for="task in list.tasks"
          :key="task.text"
          v-model="task.finished"
        >
          {{ task.text }}
        </TodoItem>
        <TodoItemInput @create="addTodoItem(list, $event)" />
      </template>
    </TodoList>

    <div class="inputs" style="margin-top: 2rem">
      <input type="text" v-model="newTodoName" placeholder="List" />
      <input type="submit" @click="addTodoList" />
    </div>
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
  border-radius: 1rem;
}

.active,
.accordion:hover {
  background-color: #ccc;
}

.panel {
  padding: 0 18px;
  display: none;
  overflow: hidden;
}

.inputs {
  padding: 0.5rem 0;
  display: flex;
  justify-content: center;
}

.inputs > input {
  border: none;
  outline: none;
  padding: 0.5rem;
}

input[type='text'] {
  background-color: #eee;
  border-bottom-left-radius: 0.5rem;
  border-top-left-radius: 0.5rem;
}

input[type='submit'] {
  cursor: pointer;
  background-color: #ccc;
  border-bottom-right-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
}
</style>
