<template>
    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <div class="space-y-6">
                <form-field v-model="firstName" type="text" label="First name" />
                <form-field v-model="lastName" type="text" label="Last name" />
                <form-field v-model="email" type="email" label="Email" />
                <form-field v-model="password" type="password" label="Password" />
                <form-field v-model="verifyPassword" type="password" label="Verify Password" />
                <div v-for="(error, index) of errors" :key="index" class="flex items-center mb-6">
                    <p>{{ error }}</p>
                </div>
                <div class="flex items-center justify-between">
                    <form-button class="w-1/2" @click="register">Register</form-button>
                    <a class="w-1/2 text-center font-medium text-indigo-600 hover:text-indigo-500" href="#" @click="emit('clicked:back')">Go back</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const password = ref("");
const verifyPassword = ref("");
const firstName = ref("");
const lastName = ref("");
const email = ref("");
const errors = ref<string[]>([]);

const emit = defineEmits<{
    (e: "clicked:back"): void;
    (e: "action:registered");
}>();

function register() {
    const data = {
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        password: password.value,
        confirmPassword: verifyPassword.value
    };

    errors.value = [];

    postUnauthorized("https://localhost:5001/api/users/self-register", data)
        .then(async (res: Response) => {
            const data = await res.json();
            // Success
            emit("action:registered");
        })
        .catch(async (err: Response | null) => {
            if (err) {
                if (err.status >= 400 && err.status <= 404) {
                    const data = await err.json();
                    console.log(data);
                    if (data.errors) {
                        Object.values(data.errors).forEach((items: string[]) => errors.value.push(items.join(", ")));
                    }
                }
            }
            // Something gone wrong woopsie
        });
}
</script>
