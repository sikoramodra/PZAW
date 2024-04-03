<script setup>
import { ref, onMounted } from 'vue';

const props = defineProps({
  user: {
    type: String,
    required: true,
  },
});

const person = ref([]);

async function fetchData() {
  try {
    const response = await fetch(`https://api.github.com/users/${props.user}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch user: ${props.user}`);
    }
    person.value = await response.json();
  } catch (e) {
    console.log(e.message);
  }
}

onMounted(fetchData);
</script>

<template>
  <div>
    <img v-if="!person" :src="person.avatar_url" alt="user's avatar" />
    <h3>{{ person.login || 'Person Not Found' }}</h3>
  </div>
</template>

<style scoped>
div {
  padding: 10px;
  border-radius: 5px;
  background-color: #ddd;
}

img {
  border-radius: 5px;
  width: 128px;
}
</style>
