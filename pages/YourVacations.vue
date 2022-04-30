<template>
    <div>
        <dark-nav-with-overlap title="Vacation Planner">
            <div class="bg-white h-screen">
                <div class="max-w-2xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                    <section-heading-simple>Your Vacations</section-heading-simple>
                    <div class="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
                        <div
                            v-for="vac in yvYourVacations"
                            :key="vac.id"
                            class="group relative bg-white border border-gray-200 rounded-lg flex flex-col overflow-hidden"
                        >
                            <div class="transition-all duration-200 flex-1 p-4 space-y-2 flex flex-col hover:bg-gray-100">
                                <h3 class="text-sm font-medium text-xl text-gray-900">
                                    <a :href="vac.href">
                                        <span aria-hidden="true" class="absolute inset-0" />
                                        {{ vac.title }}
                                    </a>
                                </h3>
                                <p class="text-sm text-gray-500">Hosted by you</p>
                            </div>
                        </div>
                        <a class="group bg-white border border-dashed border-gray-300 rounded-lg overflow-hidden" href="/NewVacation">
                            <div class="transition-all duration-200 p-7 space-y-2 hover:bg-gray-100">
                                <div class="flex flex-auto items-center justify-center">
                                    <PlusCircleIcon class="h-7 w-7 mx-2 stroke-1 stroke-gray-400" />
                                    <p class="text-gray-400 self-center">New Vacation</p>
                                </div>
                            </div>
                        </a>
                    </div>

                    <section-heading-simple>Shared With You</section-heading-simple>
                    <div class="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
                        <div
                            v-for="vac in yvSharedVacations"
                            :key="vac.id"
                            class="group relative bg-white border border-gray-200 rounded-lg flex flex-col overflow-hidden"
                        >
                            <div class="transition-all duration-200 flex-1 p-4 space-y-2 flex flex-col hover:bg-gray-100">
                                <h3 class="text-sm font-medium text-xl text-gray-900">
                                    <a :href="vac.href">
                                        <span aria-hidden="true" class="absolute inset-0" />
                                        {{ vac.title }}
                                    </a>
                                </h3>
                                <p class="text-sm text-gray-500">Hosted by {{ vac.host }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </dark-nav-with-overlap>
    </div>
</template>

<script setup lang="ts">
import { PlusCircleIcon } from "@heroicons/vue/outline";

let idyv = 0;
const yvYourVacations = ref([
    { id: idyv++, title: "Spring 2022", href: "#" },
    { id: idyv++, title: "Summer 2022", href: "#" },
    { id: idyv++, title: "Winter 2022", href: "#" }
]);

const yvSharedVacations = ref([
    { id: idyv++, title: "Summer 2023", host: "My Friend", href: "#" },
    { id: idyv++, title: "Never 20XX", host: "Other Friend", href: "#" }
]);
</script>
