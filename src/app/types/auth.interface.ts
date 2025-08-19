export interface IAuthRequest {
    email: string;
    password: string;
    confirmPassword?: string; // Optional for sign-up forms
}

export interface ISignUpResponse {
    id: string;
    email: string;
}

export interface ISignInResponse {
    accessToken: string;
}