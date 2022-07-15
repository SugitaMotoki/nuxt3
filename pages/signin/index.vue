<template>
  <v-container>
    <h1>サインイン</h1>
    <v-btn @click="signin">サインイン</v-btn>
  </v-container>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: ["test-middleware"],
})
const signin = async () => {
  console.log("サインイン");
}
</script>