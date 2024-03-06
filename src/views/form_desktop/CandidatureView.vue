<script setup>
import { ref } from "vue";
import candidatureInstance from "@/services/candidature.js";
import { RouterLink } from "vue-router";

let form = ref({
  // Définir une valeur par défaut vide
  Entreprise: "",
  Url: "",
  Description: "",
  Suivi: "",
  Date: "",
});
let isSubmitting = ref(false);

// Définir les valeurs possibles pour le suivi

let candidatureSuivi = [
  "Candidature envoyée",
  "Candidature refusée",
  "Candidature Accepter",
  "En attente"
];

let error = ref(null);
let success = ref(null);

// async function createCandidature() {
//   console.clear();
//   console.table(form.value);
//   error.value = null;
//   success.value = null;

//   // Validation des entrées
//   if (!form.value.Entreprise) {
//     error.value = "Le nom de l'entreprise est obligatoire";
//     return;
//   }
//   if (!form.value.Url) {
//     error.value = "L'URL de l'offre est obligatoire";
//     return;
//   }

//   // Envoi des données si la validation est réussie
//   let data = await candidatureInstance.create(
//     form.value.Entreprise,
//     form.value.Url,
//     form.value.Description,
//     form.value.Suivi,  
//     form.value.Date
//   );
// }
async function createCandidature() {
  console.clear();
  console.table(form.value);
  error.value = null;
  success.value = null;
  isSubmitting.value = true;

  // Validation des entrées
  if (!form.value.Entreprise) {
    error.value = "Le nom de l'entreprise est obligatoire";
    isSubmitting.value = false;
    return;
  }
  if (!form.value.Url) {
    error.value = "L'URL de l'offre est obligatoire";
    isSubmitting.value = false;
    return;
  }

  // Envoi des données si la validation est réussie
  try {
    let data = await candidatureInstance.create(
      form.value.Entreprise,
      form.value.Url,
      form.value.Description,
      form.value.Suivi,
      form.value.Date
    );
    success.value = "Candidature envoyée avec succès!";
  } catch (error) {
    console.error(error);
    error.value = "Une erreur s'est produite lors de l'envoi de la candidature.";
  } finally {
    isSubmitting.value = false;
  }
}
</script>

<template>
  <div id="form">
    <RouterLink to="/dashboard">
      <i class="bi bi-arrow-return-left"></i>
    </RouterLink>
    <h1 class="first">Formulaire de Candidatures</h1>
    <div class="container-form-candidature">
      <div class="ligne">
        <p>Entreprise <input type="text" placeholder="Le nom de l'entreprise" v-model="form.Entreprise" /></p>
        <p>URL <input type="url" placeholder="L'URL de l'entreprise" v-model="form.Url" /></p>
      </div>
      <div class="ligne">
        <p>Description</p>
        <textarea v-model="form.Description" rows="4" cols="50" placeholder="Votre description"></textarea>
      </div>
      <div class="ligne">
        <p>Suivi</p>
        <select v-model="form.Suivi" class="form-select" aria-label="Default select example">
          <option v-for="suivi in candidatureSuivi" :key="suivi" :value="suivi">{{
          suivi }}</option>
        </select>
        <p>Date <input type="date" v-model="form.Date" /></p>
      </div>
      <p class="btn-center">
        <button @click="createCandidature()">Créer</button>
      </p>
      <div>

      </div>
      <p v-if="error">Erreur : {{ error }}</p>
      <p v-if="success">Succès : {{ success }}</p>
    </div>
  </div>
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