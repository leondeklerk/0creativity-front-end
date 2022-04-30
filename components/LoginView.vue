<template>
    <div class="flex items-center justify-center">
        <div class="w-full max-w-sm">
            <div class="flex items-center mb-6">
                <form-field v-model="email" type="text" label="E-mail" />
            </div>
            <div class="flex items-center mb-6">
                <form-field v-model="password" type="password" label="Password" />
            </div>
            <div v-for="(error, index) of errors" :key="index" class="flex items-center mb-6">
                <p>{{ error }}</p>
            </div>
            <div class="flex items-center justify-between">
                <div>
                    <form-button @click="login">Log In</form-button>
                </div>
                <div>
                    <a
                        class="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker"
                        href="#"
                        @click="emit('clicked:register')"
                    >
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
