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
import arrow from "@/assets/img/arrow-in-up-right.png";
</script>
<template>
    <div class="right-side">
        <div class="posts-box" v-for="website in websites">
            <div class="post">
                <img class="logo-post" :src="website.image[0].signedUrl">
                <p>{{ website.title }}</p>
                <p>{{ website.description }}</p>
                <a :href="website.url"><img :src="arrow"></a>
            </div>
        </div>
    </div>
</template>



