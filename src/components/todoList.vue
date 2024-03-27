<script setup>
import { computed, ref } from 'vue';

const props = defineProps({
  tasks: {
    type: Array,
    required: true,
  },
});

const isActive = ref(false);

const allTasksFinished = computed(() => {
  return props.tasks.every((task) => task.finished);
});
const collapse = () => {
  isActive.value = false;
};

defineExpose({ collapse });
</script>

<template>
  <h4
    class="accordion"
    :class="{ active: isActive, finished: allTasksFinished }"
    @click="isActive = !isActive"
  >
    <slot name="header" />
  </h4>
  <div class="panel" v-bind:style="{ display: isActive ? 'block' : 'none' }">
    <slot name="default" />
  </div>
</template>

<style>
.finished {
  color: #888;
  text-decoration: line-through;
}
</style>
