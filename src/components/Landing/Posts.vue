<script setup>
import Post from "@/components/Landing/Post.vue";


</script>

<template>
    <h3 class="home-t">Explorer les sites d'embauche.</h3>
    <section>

        <div class="left-side">
            <span></span>
            <p class="vertical-text">Ils recrutent !</p>
            <span></span>
        </div>
        <div class="right-side">
            <Post />
        </div>
    </section>
</template>

<style scoped>
.home-t {
    text-align: center;
    padding: 16px;
    color: white;
}
</style>