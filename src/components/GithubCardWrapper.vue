<script setup>
import GithubCard from './GithubCard.vue';
import { ref, watch } from 'vue';

const props = defineProps({
  usersArray: {
    type: Array,
  },
  searchUsers: {
    type: String,
  },
});

const responseUsers = ref();

const fetchUsers = async () => {
  try {
    const response = await fetch(
      `https://api.github.com/search/users?q=${props.searchUsers}`,
    );
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    responseUsers.value = data.items;
  } catch (e) {
    console.error(e.message);
  }
};

watch(
  () => props.searchUsers,
  (newSearchUsers) => {
    if (newSearchUsers && !props.usersArray) {
      fetchUsers();
    }
  },
  { immediate: true },
);
</script>

<template>
  <div class="wrapper">
    <template v-if="!responseUsers">
      <GithubCard
        v-for="user in props.usersArray"
        :key="user"
        :username="user"
      />
    </template>
    <template v-else>
      <GithubCard
        v-for="user in responseUsers"
        :key="user.login"
        :user-data="user"
      />
    </template>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
}
</style>
