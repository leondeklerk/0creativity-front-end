import { defineStore } from "pinia";
import { ProfileData } from "~~/types";

interface AuthenticationState {
    token: string;
    profileData?: ProfileData;
}

export const useAuthentication = defineStore("authentication", {
    state: (): AuthenticationState => ({
        token: "",
        profileData: null
    }),
    actions: {
        storeToken(value: string) {
            this.token = value;
        },
        storeProfileData(value: ProfileData) {
            this.profileData = value;
        }
    },
    persist: true
});
