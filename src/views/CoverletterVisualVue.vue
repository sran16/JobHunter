<script setup>
import { ref, onMounted } from "vue";
import { CoverletterGetAll } from "@/services/coverletter.js";
import Footer from "@/components/Landing/Footer.vue";
import { RouterLink } from "vue-router";

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
        <div class="back-icon">
            <RouterLink to="/profile"><i class="bi bi-arrow-return-left"></i></RouterLink>
            <h2 class="text-center text-white marine">Votre lettre de motivation </h2>
        </div>

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

<style scoped>
.back-icon {
    display: flex;
    justify-content: center;
    flex-direction: row;
    gap: 25px;
    align-items: flex-end;
}

.back-icon a {
    text-decoration: none;
    color: #fff;
    font-size: 24px;

}
</style>