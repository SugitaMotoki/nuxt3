<template>
  <v-container>
    <h1>トップページ</h1>
    <div>
      <NuxtLink to="/pictures">写真</NuxtLink>
    </div>
    <div>
      <NuxtLink to="/signin">サインイン</NuxtLink>
    </div>
    <div>
      <NuxtLink to="/books">本を取得</NuxtLink>
    </div>
    <Counter />
    <Counter />
  </v-container>
</template>

<script setup lang="ts">
</script>
