<script setup>
import { ref } from 'vue';
import GithubCardWrapper from './components/GithubCardWrapper.vue';

const users = ref([
  'sikoramodra',
  'MattMoszczynski',
  'asdasdasdasdasdasdasdasdas',
  'JustJuulia',
  'amystas',
]);

const search = ref();
</script>

<template>
  <GithubCardWrapper :users-array="users" />

  <input type="text" v-model="search" placeholder="search user" />
  <GithubCardWrapper :search-users="search" />
</template>

<style scoped>
input {
  margin: 3rem 0;
  border: none;
  outline: none;
  padding: 0.5rem;
  background-color: #eee;
  border-radius: 0.5rem;
  box-shadow: 2px 2px 3px #444;
}
</style>
