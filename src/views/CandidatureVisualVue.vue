<script setup>
import { ref, onMounted } from "vue";
import { CandidatureGetAll } from "@/services/candidature.js";
import Footer from "@/components/Landing/Footer.vue";
import { RouterLink } from "vue-router";

const Candidatures = ref([]);

async function loadData() {
    try {
        let data = await CandidatureGetAll();
        Candidatures.value = data.list;
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
            <h2 class="text-center text-white marine">Suivi des candidatures</h2>
        </div>

        <div class="container suivi" v-for="Candidature in Candidatures">
            <div class="suivi-content">
                <div>
                    <h3 class="suivi-h3">{{ Candidature.Entreprise }}</h3>
                    <p>{{ Candidature.Date }}</p>
                </div>
                <p>{{ Candidature.Url }}</p>

                <p>{{ Candidature.Description }}</p>

                <p class="suivi_state">{{ Candidature.Suivi }}</p>

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

@media screen and (max-width: 768px) {
    .suivi {
        height: fit-content;
        border-radius: 24px 24px 0px 0px;
        background-color: #d2d4eb;
    }

    .suivi_state {
        background: rgba(38, 41, 76, 0.40);
        padding: 8px;
        border-radius: 10px;
        width: fit-content;
    }

    .suivi p {
        font-family: "inter", sans-serif;
        font-size: 16px;
    }

    .suivi-h3 {
        border-bottom: rgba(38, 41, 76, 0.40) 2px solid;
        width: fit-content;
    }
}
</style>