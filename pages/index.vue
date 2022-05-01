<template>
    <login-view v-if="login" @clicked:register="login = false" @action:logged-in="onAuthenticated" />
    <registration-view v-else @clicked:back="login = true" @action:registered="login = true" />
</template>

<script setup lang="ts">
import { useAuthentication } from "~~/store/store";

const login = ref(true);

function onAuthenticated(token: string) {
    const authentication = useAuthentication();
    authentication.storeToken(token);
    if (token) {
        navigateTo({
            path: "./overview"
        });
    }
}
</script>
