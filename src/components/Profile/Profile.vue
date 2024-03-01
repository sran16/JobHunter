<template>
    <div class="container text-center">
        <div class="row ">
            <div class="col col-left-top">
                <p>Suivi de candidature</p>
                <p><i class="bi bi-graph-up-arrow"></i></p>
            </div>
            <div class="col col-right-t">
                <p>Lettre de motivation</p>
                <RouterLink to="/CoverletterVisual"><p><i class="bi bi-file-text"></i></p></RouterLink>
            </div>
        </div>
        <div class="row stat">
            <div class="col col-left-b">
                <p>Liste des annonces </p>
                <p><i class="bi bi-list-ol"></i></p>
            </div>
            <div class="col col-right-b">
                <p>Formulaires (Desktop seulement)</p>
                <p><i class="bi bi-plus-square"></i></p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

