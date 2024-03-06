<script setup>
import { RouterLink } from "vue-router";
import Footer from "@/components/Landing/Footer.vue";
import Header from "@/components/Landing/Header.vue";

</script>

<template>
    <Header></Header>
    <h3 class="dash-h3">Sélectionnez le formulaire de votre choix : </h3>
    <div class="dash-container">
        <div class="dash-elements">
            <p>Suivi de candidature</p>
            <RouterLink to="/Candidature">
                <i class="bi bi-arrow-right-circle"></i>
            </RouterLink>
        </div>
        <div class="dash-elements">
            <p>Lettre de motivation</p>
            <RouterLink to="/Coverletter">
                <i class="bi bi-arrow-right-circle"></i>
            </RouterLink>
        </div>
        <div class="dash-elements">
            <p>Annonces </p>
            <RouterLink to="/Annonce">
                <i class="bi bi-arrow-right-circle"></i>
            </RouterLink>
        </div>
    </div>
    <Footer></Footer>
</template>

<style scoped>
.dash-h3 {
    color: #F0F5F9;
    text-align: center;
    margin-top: 26%;
    font-family: "inter", sans-serif;
    font-size: 16px;
}
</style>
