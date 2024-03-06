<script setup>
import { RouterLink } from "vue-router";
import Footer from "@/components/Landing/Footer.vue";
import Header from "@/components/Landing/Header.vue";


import f1 from "@/assets/img/1-f.png";
import f2 from "@/assets/img/2-f.png";
import f3 from "@/assets/img/3-f.png";
import f4 from "@/assets/img/out2.png";
import { useStore } from "@/stores/user.js";

async function logout() {
    useStore().setUser(null);
    console.log("logout");
}


</script>

<template>
    <Header></Header>
    <div>
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
    </div>
    <footer class="footer-dash">
        <div class="footerbox">

            <RouterLink to="/profile"> <img class="vector" :src="f1" alt="f1"> </RouterLink>
            <RouterLink to="/"> <img class="vector" :src="f2" alt="f2"> </RouterLink>
            <RouterLink to="/CandidatureVisual"> <img class="vector" :src="f3" alt="f3"> </RouterLink>
            <RouterLink to="/login"> <img @click="logout" class="vector" :src="f4" alt="f4"></RouterLink>

        </div>
    </footer>
</template>

<style scoped>
.dash-h3 {
    color: #F0F5F9;
    text-align: center;
    margin-top: 26%;
    font-family: "inter", sans-serif;
    font-size: 16px;
}
.footer-dash{
    position: fixed;
}
</style>
