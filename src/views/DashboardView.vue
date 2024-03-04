<script setup>
import { RouterLink } from "vue-router";
import Footer from "@/components/Landing/Footer.vue";
import Header from "@/components/Landing/Header.vue";

</script>

<template>
    <Header></Header>
    <div class="dash-container">
        <div class="dash-elements">
            <p> candidature</p>
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
            <p>annonces </p>
            <RouterLink to="/Annonce">
                <i class="bi bi-arrow-right-circle"></i>
            </RouterLink>
        </div>
    </div>
    <Footer></Footer>
</template>
