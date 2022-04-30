<template>
    <div class="flex items-center justify-center">
        <div class="w-full max-w-sm">
            <div class="flex items-center mb-6">
                <form-field v-model="firstName" type="text" label="First name" />
            </div>
            <div class="flex items-center mb-6">
                <form-field v-model="lastName" type="text" label="Last name" />
            </div>
            <div class="flex items-center mb-6">
                <form-field v-model="email" type="email" label="Email" />
            </div>
            <div class="flex items-center mb-6">
                <form-field v-model="password" type="password" label="Password" />
            </div>
            <div class="flex items-center mb-6">
                <form-field v-model="verifyPassword" type="password" label="Verify Password" />
            </div>
            <div v-for="(error, index) of errors" :key="index" class="flex items-center mb-6">
                <p>{{ error }}</p>
            </div>
            <div class="flex items-center justify-between">
                <div>
                    <form-button @click="register">Register</form-button>
                </div>
                <div>
                    <a class="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker" href="#" @click="emit('clicked:back')">
                        Go back
                    </a>
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
}>();

function register() {
    const data = {
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        password: password.value,
        confirmPassword: verifyPassword.value
    };

    postUnauthorized("https://localhost:5001/api/users/self-register", data)
        .then((res: unknown): void => {
            // Success
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
