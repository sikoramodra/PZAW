<script setup>
const props = defineProps({
    text: {type: String, required: true},
    finished: {type: Boolean, required: false, default: false}
})

const emit = defineEmits(['changed']);
</script>

<template>
    <li :class="{ finished: props.finished }">
        {{ props.text }}
        <input type="checkbox" v-model="props.finished" @click="emit('changed', props.finished)" />
    </li>
</template>

<style>
.finished {
  color: gray;
  text-decoration: line-through;
}
</style>
