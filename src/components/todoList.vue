<script setup>
import { ref } from 'vue';

const isActive = ref(false);
</script>

<template>
    <h3 class="accordion" :class="{ active: isActive }" @click="isActive = !isActive"><slot /></h3>
    <div class="panel" v-bind:style="{ display: isActive ? 'block' : 'none' }">
        
    </div>
</template>