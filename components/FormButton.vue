<script setup lang="ts"></script>

<template>
  <div class="md:w-2/3">
    <button
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      type="button"
    >
      <slot></slot>
    </button>
  </div>
</template>
