<template>
  <div class="flex items-center justify-center">
    <form class="w-full max-w-sm">
      <div class="flex items-center mb-6">
        <form-field type="text" label="Username" v-model="username" />
      </div>
      <div class="flex items-center mb-6">
        <form-field type="password" label="Password" v-model="password" />
      </div>
      <div class="w-full">
        <div class="w-full">
          <form-button>
            Log In
          </form-button>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
const password = ref("");
const username = ref("");
</script>