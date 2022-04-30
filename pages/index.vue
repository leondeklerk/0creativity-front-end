<template>
    <login-view v-if="login" @clicked:register="login = false" />
    <registration-view v-else @clicked:back="login = true" />
</template>

<script setup lang="ts">
const login = ref(true);
</script>
