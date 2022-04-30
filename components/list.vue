<script setup lang="ts">
import { ArrowNarrowRightIcon } from '@heroicons/vue/outline'
import {Link} from "~~/types";

interface Props {
  link: Link
}

const props = defineProps<Props>();
</script>

<template>
  <NuxtLink class="py-4 hover:shadow-xl global-text" :to="link.url">
    <div
      class="flex items-center justify-between space-x-3 bg-gray-300 dark:bg-gray-700 rounded-lg p-4"
    >
      {{props.link.title}}
      <ArrowNarrowRightIcon class="h-6 w-6 global-text" aria-hidden="true" />
    </div>
  </NuxtLink>
</template>
