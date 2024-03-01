<script setup>

import { ref } from 'vue';
import userInstance from "@/services/user.js";
import { cryptPassword } from "@/services/utils.js";



let form = ref({
    email: "ranimsaidi888@gmail.com",
    password: "piwpiw",
    name: "Ranux",
})

let error = ref(null);
let success = ref(null);

async function createAccount() {
    console.log(form.value)
    error.value = null;
    success.value = null;

    let user = await userInstance.exists(form.value.email);
    if (user.list.length > 0) {
        error.value = "User already exists";
        return false;
    }

    let data = await userInstance.create(form.value.email, cryptPassword(form.value.password), form.value.name);

    success.value = "User created";
}



import LogoMini from "@/assets/img/logo-mini.png";
import Mail from "@/assets/img/mail.png";
import Close from "@/assets/img/close.png";
import { RouterLink, RouterView } from 'vue-router'



</script>

<template>
    <div class="contain-create">
        <div class="create-logo">
            <div class="welcoming-create">
                <h1>Inscrivez-vous</h1>
                <p>Connectez-vous à votre compte </p>
            </div>
            <img :src="LogoMini">
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
            <div class="labele">
                <label for="name">Nom</label>
                <input class="box-form" type="text" v-model="form.name" />
            </div>
            <p>Mot de passe oublié ?</p>


            <button class="btn-form" @click="createAccount">Create</button>

        </div>
        <p>Vous avez un compte ?<strong>
                <RouterLink to="/login">Connectez-vous</RouterLink>
            </strong> </p>
    </div>
</template>