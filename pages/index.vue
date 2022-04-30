<template>
  <div class="max-w-sm mx-auto mt-4">
    <div class="flex items-center">
    </div>
    <ul role="list" class="mt-10 space-y-4">
      <li v-for="(item, index) in lists" :key="index">
        <List :link="item" />
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { Link } from "~/types";
const lists = ref<Link[]>([
  { id: 1, title: "Pinia Store", url: "pinia" },
  { id: 2, title: "Modal", url: "modal" },
  { id: 3, title: "Menu", url: "menu" },
  { id: 4, title: "New soon...", url: "" }
]);
</script>
