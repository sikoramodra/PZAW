<script setup>
import GithubCard from './GithubCard.vue';

const props = defineProps({
  users: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <div>
    <GithubCard v-for="user in props.users" :user="user" />
  </div>
</template>

<style scoped>
div {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
}
</style>
