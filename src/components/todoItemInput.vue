<script setup>
import { ref } from 'vue';

const emit = defineEmits(['create']);

const text = ref('');

const onClick = () => {
  emit('create', text.value);
  text.value = '';
};
</script>

<template>
  <div class="inputs">
    <input type="text" placeholder="Item" v-model="text" />
    <input type="submit" @click="onClick" />
  </div>
</template>
