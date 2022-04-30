<template>
  <div class="flex items-center justify-center">
    <form class="w-full max-w-sm">
      <div class="flex items-center mb-6">
        <form-field type="text" label="Username" v-model="regUsername" />
      </div>
      <div class="flex items-center mb-6">
        <form-field type="password" label="Password" v-model="regPassword" />
      </div>
      <div class="flex items-center mb-6">
        <form-field type="password" label="Verify Password" v-model="regVerifyPassword" />
      </div>
      <div class="w-full">
        <div class="w-full">
          <form-button>
            Register
          </form-button>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
const regPassword = ref("");
const regVerifyPassword = ref("")
const regUsername = ref("");
</script>