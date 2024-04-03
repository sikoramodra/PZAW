<script setup>
import { ref } from 'vue';
import GithubCardWrapper from './components/GithubCardWrapper.vue';

const users = ref([
  'sikoramodra',
  'MattMoszczynski',
  'asdasdasdasdasdasdasdasdas',
]);
</script>

<template>
  <GithubCardWrapper :users="users" />
</template>
