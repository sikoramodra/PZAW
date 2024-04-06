<script setup>
import { ref, watch } from 'vue';

const props = defineProps({
  username: {
    type: String,
  },
  userData: {
    type: Object,
  },
});

const user = ref(props.userData);

const fetchUserData = async (username) => {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch user: ${username}`);
    }
    return await response.json();
  } catch (e) {
    console.error(e.message);
  }
};

watch(
  () => props.userData,
  async () => {
    if (!user.value && props.username) {
      user.value = await fetchUserData(props.username);
    }
  },
  { immediate: true },
);
</script>

<template>
  <a v-if="user" :href="user.html_url" target="_blank">
    <img :src="user.avatar_url" alt="user's avatar" />
    <h3>{{ user.login }}</h3>
    <p v-if="user.name">{{ user.name }}</p>
    <p v-if="user.bio" class="bio">{{ user.bio }}</p>
    <p v-if="user.location">Location: {{ user.location }}</p>
    <p v-if="user.followers">Followers: {{ user.followers }}</p>
  </a>
  <div v-else>
    <p>could not find: {{ props.username }}</p>
  </div>
</template>

<style scoped>
* {
  color: #000;
  text-decoration: none;
}

a,
div {
  padding: 10px;
  border-radius: 5px;
  background-color: #ddd;
  box-shadow: 2px 2px 3px #444;
  overflow: hidden;
  width: 256px;
  max-height: 600px;
}

div {
  display: grid;
  place-items: center;
}

p {
  word-wrap: break-word;
  color: #444;
  font-size: 0.8rem;
}

.bio {
  font-size: 1rem;
  margin: 2rem 0;
  max-height: 150px;
  overflow: auto;
}

img {
  border-radius: 5px;
  box-shadow: 0 0 2px #000;
  width: 256px;
}
</style>
