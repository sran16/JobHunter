<script setup>
import { RouterLink, RouterView } from 'vue-router'
import {useStore} from "@/stores/user.js";
import {computed} from "vue";
const userInfo = computed(() => {
  return useStore().getUser;
});
</script>

<template>
  <!-- <header>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink v-if="userInfo == null" to="/login">Login</RouterLink>
        <span v-else>{{ userInfo.name }}</span>
      </nav>
  </header> -->

  <RouterView />
</template>

<style scoped>
</style>
