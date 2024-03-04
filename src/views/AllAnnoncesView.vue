<script setup>
import { ref, onMounted } from "vue";
import { AnnonceGetAll } from "@/services/annonce.js";
import Footer from "@/components/Landing/Footer.vue";

const Annonces = ref([]);

async function loadData() {
    try {
        let data = await AnnonceGetAll();
        Annonces.value = data.list;
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
    <div class="container-mar-all">
        <h2 class="text-center text-white marine">Derniers ajouts</h2>

        <div class="container marine-box" v-for="Annonce in Annonces">
            <div class="marine-content">
                <h3>{{ Annonce.Title }}<a :href="Annonce.Url"><img :src="arrow"></a></h3>
                <p>{{ Annonce.Duration }}</p>
                <p>{{ Annonce.Commentaire }}</p>
            </div>
        </div>
    </div>
    <Footer></Footer>
</template>
