<script setup>
import { ref } from "vue";
import annonceInstance from "@/services/annonce.js";
import { RouterLink } from "vue-router";

let form = ref({
  // Définir une valeur par défaut vide
  Title: "",
  Url: "",
  Duration: "",
  Salaire: "",
  Commentaire: "",
});
let isSubmitting = ref(false);
let error = ref(null);
let success = ref(null);

async function createAnnonce() {
  console.clear();
  console.table(form.value);
  error.value = null;
  success.value = null;

  // Validation des entrées
  if (!form.value.Title) {
    error.value = "Le titre de l'annonce est obligatoire";
    return;
  }
  if (!form.value.Url) {
    error.value = "L'URL de l'annonce est obligatoire";
    return;
  }

  // Envoi des données si la validation est réussie
  let data = await annonceInstance.create(
    form.value.Title,
    form.value.Url,
    form.value.Duration,
    form.value.Salaire,
    form.value.Commentaire
  );
}
</script>

<template>
  <div id="form">
    <RouterLink to="/dashboard">
      <i class="bi bi-arrow-return-left"></i>
    </RouterLink>
    <h1 class="first">Formulaire d'Annonce</h1>
    <div class="container-form-candidature">

      <div class="ligne">
        <p>Titre <input type="text" v-model="form.Title" /></p>
        <p>URL <input type="url" v-model="form.Url" /></p>
      </div>
      <div class="ligne">
        <p>Duration <input type="date" v-model="form.Duration" /></p>
        <p>Salaire <input type="text" v-model="form.Salaire" /></p>
      </div>
      <div class="ligne">
        <p>Commentaire</p>
        <textarea v-model="form.Commentaire" rows="4" cols="50"></textarea>
      </div>
      <p class="btn-center">
        <button @click="createAnnonce()">Créer</button>
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