<template>
    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <div class="space-y-6">
                <form-field v-model="email" type="text" label="E-mail" />
                <form-field v-model="password" type="password" label="Password" />
                <div v-for="(error, index) of errors" :key="index" class="flex items-center mb-6">
                    <p>{{ error }}</p>
                </div>
                <div class="flex items-center justify-between">
                    <form-button class="w-1/2" @click="login">Log In</form-button>
                    <a class="w-1/2 text-center font-medium text-indigo-600 hover:text-indigo-500" href="#" @click="emit('clicked:register')">
                        Register
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const password = ref("");
const email = ref("");
const errors = ref<string[]>([]);

const emit = defineEmits<{
    (e: "clicked:register"): void;
}>();

function login() {
    const data = {
        password: password.value,
        email: email.value
    };

    postUnauthorized("https://localhost:5001/api/tokens", data)
        .then((res: Response) => {
            // Do a login
        })
        .catch((err: Response | null) => {
            if (err) {
                if (err.status === 400) {
                    if (err.errors) {
                        err.errors.foreach((error) => errors.push(error));
                    }
                }
            }
            // Something gone wrong woopsie
        });
}
</script>
