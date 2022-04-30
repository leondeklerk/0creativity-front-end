<template>
  <div class="flex items-center justify-center">
    <form class="w-full max-w-sm">
      <div class="md:flex md:items-center mb-6">
        <form-field type="text" label="Username" v-model="username" />
      </div>
      <div class="md:flex md:items-center mb-6">
        <form-field type="password" label="password" v-model="password" />
      </div>
      <div class="md:block md:items-center">
        <div class="md:w-1/3"></div>
        <div class="md:w-2/3">
          <form-button>
            Sign Up
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