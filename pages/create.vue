<template>
    <div class="bg-white h-screen">
        <dark-nav-with-overlap v-if="profileData" :profile-data="profileData" title="Creating New Vacation">
            <section-heading-simple>Budget</section-heading-simple>
            <input-price-field />
            <!-- Why doesn't this show up? -->
            <section-heading-simple>When are you free?</section-heading-simple>
            <section-heading-simple>Where do you want to go?</section-heading-simple>
        </dark-nav-with-overlap>
    </div>
</template>

<script setup lang="ts">
import { useAuthentication } from "~~/store/store";

const profileData = ref(useAuthentication().profileData);
</script>
