<script setup>

import { ref } from 'vue';
import userInstance from "@/services/user.js";
import { cryptPassword } from "@/services/utils.js";
import { useStore } from "@/stores/user.js";


let form = ref({
    email: "ranimsaidi888@gmail.com",
    password: "piwpiw",
    name: "Ranux",
})

let error = ref(null);
let success = ref(null);

function redirectToAnotherPage() {
    window.location.href = '/profile';
}


async function login() {
    error.value = null;
    success.value = null;
    let user = await userInstance.login(form.value.email, cryptPassword(form.value.password));
    if (user.list.length != 1) {
        error.value = "User not found";
        return false;
    }
    useStore().setUser(user.list[0]);

    success.value = "User logged in" + user.list[0].name;

    redirectToAnotherPage();
}
import LogoLogin from "@/assets/img/logo-deg.png";
import Mail from "@/assets/img/mail.png";
import Close from "@/assets/img/close.png";
import { RouterLink, RouterView } from 'vue-router'


</script>

<template>
    <div class="login">
        <div class="login-logo">
            <img :src="LogoLogin" alt="Logo">
        </div>
        <div class="contain-form">
            <div class="welcoming">
                <h1>Welcome back</h1>
                <p>Connectez-vous à votre compte </p>
            </div>

            <p v-if="error">ERREUR : {{ error }}</p>
            <p v-if="success">SUCCESS : {{ success }}</p>
            <div class="form">
                <div class="labele">
                    <label for="email"><img :src="Mail" alt="mail icon"> Email</label>
                    <input class="box-form" type="text" v-model="form.email" />
                </div>

                <div class="labele">
                    <label for="password"><img :src="Close" alt="close">Mot de passe</label>
                    <input class="box-form" type="password" v-model="form.password" />
                </div>
                <!-- <div class="labele">
                    <label for="name">Nom</label>
                    <input class="box-form" type="text" v-model="form.name" />
                </div> -->
                <p>Mot de passe oublié ?</p>


                <button class="btn-form" @click="login">Se connecter </button>

            </div>
            <p>Vous n’avez pas de compte ?<strong>
                    <RouterLink to="/create">Inscrivez-vous</RouterLink>
                </strong> </p>
        </div>

    </div>
</template>

<style scoped></style>