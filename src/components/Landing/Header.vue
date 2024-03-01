<template>
    <header>
        <div class="logo">
            <img :src="logo" alt="Logo">
        </div>
        <div class="search-icon">
            <img :src="search" alt="search icon">
        </div>
    </header>
</template>

<script setup>
import logo  from "@/assets/img/logo.png";
import search from "@/assets/img/search.png";
</script>

<style scoped>
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
}
</style>
    
