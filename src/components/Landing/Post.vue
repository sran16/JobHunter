<script setup>
import { ref, onMounted } from "vue";
import { websiteGetAll } from "@/services/website.js";

const websites = ref([]);

async function loadData() {
    try {
        let data = await websiteGetAll();
        websites.value = data.list;
    } catch (error) {
        console.error("Error loading data:", error);
    }
}

onMounted(() => {
    loadData();
});
</script>
<template>
    <div class="right-side">
        <div class="posts-box" v-for="website in websites">
            <div class="post">
                <a :href="website.url"><i class="bi bi-box-arrow-in-up-right"></i></a>
                <img class="logo-post" :src="website.image[0].signedUrl">
                <p class="name-site"><strong>{{ website.title }}</strong></p>
                <p>{{ website.description }}</p>
                
            </div>
        </div>
    </div>
</template>



