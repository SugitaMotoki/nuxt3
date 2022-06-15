<template>
  <div id="event-handling">
    <p>{{ count }}</p>
    <button @click="increment">Increment</button>
    <button @click="ab">AB</button>
  </div>
</template>

<script setup lang="ts">
const count = ref(0);
const increment = () => {
  count.value++;
}
function ab() {
  console.log("aa");
}
</script>

<style scoped>
</style>
