<template>
  <div>
    <p>{{ $count }}</p>
    <v-btn @click="countUp">Count UP</v-btn>
  </div>
</template>

<script setup lang="ts">
const $count = ref(0);
const countUp = () => {
  $count.value++;
}
</script>