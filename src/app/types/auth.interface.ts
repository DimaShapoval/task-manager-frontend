export interface ISignUpRequest {
    email: string;
    password: string;
    confirmPassword?: string; // Optional for sign-up forms
}

export interface ISignUpResponse {
    id: string;
    email: string;
}