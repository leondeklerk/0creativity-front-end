<template>
  <div class="w-full max-w-sm">
    <div class="md:flex md:items-center mb-6">
      <form-field label="Username" v-model="username" />
    </div>
    <div class="md:flex md:items-center mb-6">
      <form-field label="Password" v-model="password" />
    </div>
    <div class="md:flex md:items-center">
      <form-button>Log in</form-button>
    </div>
  </div>
</template>

<script setup lang="ts">
const password = ref("");
const username = ref("");
</script>
