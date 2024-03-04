<script setup>
import { ref, onMounted } from "vue";
import { CoverletterGetAll } from "@/services/coverletter.js";
import Footer from "@/components/Landing/Footer.vue";

const Coverletters = ref([]);

async function loadData() {
    try {
        let data = await CoverletterGetAll();
        Coverletters.value = data.list;
    } catch (error) {
        console.error("Error loading data:", error);
    }
}

onMounted(() => {
    loadData();
});

</script>

<template>
    <div class="container-mar-all">
        <h2 class="text-center text-white marine">Votre CV </h2>

        <div class="container cv" v-for="Coverletter in Coverletters">
            <div class="cv-content">
                <h3>{{ Coverletter.Name }}</h3>
                <p>{{ Coverletter.Email }}</p>
                <p>{{ Coverletter.Contenu }}</p>
                <p>{{ Coverletter.Url }}</p>
            </div>
        </div>
    </div>
    <Footer></Footer>
</template>
