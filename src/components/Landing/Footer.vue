<template>
    <footer>
        <div class="footerbox">

            <RouterLink to="/profile"> <img class="vector" :src="f1" alt="f1"> </RouterLink>
            <RouterLink to="/"> <img class="vector" :src="f2" alt="f2"> </RouterLink>
            <RouterLink to="/CandidatureVisual"> <img class="vector" :src="f3" alt="f3"> </RouterLink>
            <RouterLink to="/login"> <img @click="logout" class="vector" :src="f4" alt="f4"></RouterLink>

        </div>
    </footer>
</template>

<script setup>
import f1 from "@/assets/img/1-f.png";
import f2 from "@/assets/img/2-f.png";
import f3 from "@/assets/img/3-f.png";
import f4 from "@/assets/img/out2.png";
import { RouterLink } from "vue-router";
import { useStore } from "@/stores/user.js";

async function logout() {
    useStore().setUser(null);
    console.log("logout");
}


</script>
