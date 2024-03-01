<script setup>
import { ref, onMounted } from "vue";
import { CoverletterGetAll } from "@/services/coverletter.js";

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

        <div class="container marine-box" v-for="Coverletter in Coverletters">
            <div class="marine-content">
                <h3>{{ Coverletter.Name }}</h3>
                <p>{{ Coverletter.Email }}</p>
                <p>{{ Coverletter.Url }}</p>
                <p>{{ Coverletter.Contenu }}</p>
            </div>
        </div>
    </div>
</template>


