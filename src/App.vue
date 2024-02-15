<script setup>
import { reactive, ref } from 'vue';

const name = ref('Wojciech');
name.value = 'Wojtek';

const user = reactive({
  name: 'Wojciech',
  surname: 'Modro',
});
user.surname = 'Nowak';

const colors = ['red', 'green', 'blue'];
const selectedColor = ref();

const updateName = (event) => {
  name.value = event.target.value;
};
</script>

<template>
  <h1>{{ name }}</h1>
  <input type="text" v-bind:value="name" v-on:input="updateName" />
  <input type="text" v-model="name" />

  <ul>
    <li>{{ user.name }}</li>
    <li>{{ user.surname }}</li>
  </ul>

  <select v-model="selectedColor">
    <option v-for="color in colors" :key="color" :value="color">
      {{ color }}
    </option>
  </select>
  <p>
    Selected color:
    <span :style="{ color: selectedColor || 'none' }">{{ selectedColor }}</span>
  </p>
</template>
