<template>
  <v-container>
    <h1>本</h1>
    <v-btn @click="getBooks">本を取得</v-btn>
  </v-container>
</template>

<script setup lang="ts">
const { getBooks } = useFirestore();
</script>