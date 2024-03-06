<script setup>
import { ref } from "vue";
import coverletterInstance from "@/services/coverletter.js";
import { RouterLink } from "vue-router";

let form = ref({
  // Définir une valeur par défaut vide
  Name: "",
  Email: "",
  Url: "",
  Contenu: "",
});
let isSubmitting = ref(false);
let error = ref(null);
let success = ref(null);

async function createCoverletter() {
  console.clear();
  console.table(form.value);
  error.value = null;
  success.value = null;

  // Validation des entrées
  if (!form.value.Name) {
    error.value = "Le nom de la lettre est obligatoire";
    return;
  }
  if (!form.value.Url) {
    error.value = "L'URL de l'offre est obligatoire";
    return;
  }

  // Envoi des données si la validation est réussie
  let data = await coverletterInstance.create(
    form.value.Name,
    form.value.Email,
    form.value.Url,
    form.value.Contenu
  );

}
</script>

<template>
  <div id="form">
    <RouterLink to="/dashboard">
      <i class="bi bi-arrow-return-left"></i>
    </RouterLink>
    <h1 class="first">Formulaire de Lettre de motivation</h1>

    <div class="container-form-candidature">
      <div class="ligne">
        <p>Name <input type="text" placeholder="Votre nom" v-model="form.Name" /></p>
        <p>Email <input type="email" placeholder="Votre Email" v-model="form.Email" /></p>
      </div>
      <div class="ligne">
        <p>Url<input type="url" placeholder="Votre URL Linkedin" v-model="form.Url" /></p>
        <p>Contenu</p>
        <textarea v-model="form.Contenu" rows="4" cols="50" placeholder="Votre Contenu"></textarea>
      </div>
      <p class="btn-center">
        <button @click="createCoverletter()">Créer</button>
      </p>
    </div>
  </div>
  <p v-if="error">Erreur : {{ error }}</p>
  <p v-if="success">Succès : {{ success }}</p>
</template>

<style scoped>
.container-form-candidature {
  display: flex;
  flex-direction: column;
  margin-top: 64px;
  padding: 20px;
  border: 1px solid #000;
  border-radius: 10px;
  background-color: #d2d4eb;
  gap: 16px;
  height: fit-content;
}

.btn-center {
  text-align: center;
}

i {
  color: white;
  font-size: 16px;

}
</style>