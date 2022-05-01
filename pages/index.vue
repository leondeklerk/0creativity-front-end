<template>
    <login-view v-if="login" @clicked:register="login = false" @action:logged-in="onAuthenticated" />
    <registration-view v-else @clicked:back="login = true" />
</template>

<script setup lang="ts">
const login = ref(true);

function onAuthenticated() {
    navigateTo({
        path: "./overview"
    });
}
</script>
