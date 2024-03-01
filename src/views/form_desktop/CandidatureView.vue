<script setup>
import { ref } from "vue";
import candidatureInstance from "@/services/candidature.js";

let form = ref({
  // Définir une valeur par défaut vide
  Entreprise: "",
  Url: "",
  Description: "",
  Suivi: "",
  Date: "",
});

let error = ref(null);
let success = ref(null);

async function createCandidature() {
  console.clear();
  console.table(form.value);
  error.value = null;
  success.value = null;

  // Validation des entrées
  if (!form.value.Entreprise) {
    error.value = "Le nom de l'entreprise est obligatoire";
    return;
  }
  if (!form.value.Url) {
    error.value = "L'URL de l'offre est obligatoire";
    return;
  }

  // Envoi des données si la validation est réussie
  let data = await candidatureInstance.create(
    form.value.Entreprise,
    form.value.Url,
    form.value.Description,
    form.value.Suivi,
    form.value.Date
  );
}
</script>

<template>
  <div id="form">
    <h1 class="first">Formulaire de Candidatures</h1>
    <p v-if="error">Erreur : {{ error }}</p>
    <p v-if="success">Succès : {{ success }}</p>

    <div class="ligne">
      <p>Entreprise <input type="text" placeholder="Le nom de l'entreprise" v-model="form.Entreprise" /></p>
      <p>URL <input type="url" placeholder="L'URL de l'entreprise" v-model="form.Url" /></p>
    </div>
    <div class="ligne">
      <p>Description</p>
      <textarea v-model="form.Description" rows="4" cols="50" placeholder="Votre description"></textarea>
    </div>
    <div class="ligne">
      <select class="form-select" aria-label="Default select example">
        <option selected>Suivi</option>
        <option value="1">Candidature envoyée</option>
        <option value="2">Candidature refusée</option>
        <option value="3">Candidature Accepter</option>
      </select>
      <p>Date <input type="date" v-model="form.Date" /></p>
    </div>
    <p>
      <button @click="createCandidature()">Créer</button>
    </p>
  </div>
</template>
