export interface Link {
    id: number;
    title: string;
    url: string;
}

export interface RegisterData {
    userName: string;
    password: string;
    confirmPassword: string;
    email: string;
}

export interface ProfileData {
    email: string;
    emailConfirmed: boolean;
    firstName: string;
    id: string;
    imageUrl: string;
    isActive: boolean;
    lastName: string;
}
