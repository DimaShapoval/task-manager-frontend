import { createApi } from "@reduxjs/toolkit/query/react";
import { authParams } from "../baseParams";
import { IAuthRequest, ISignInResponse, ISignUpResponse } from "@/app/types/auth.interface";

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: authParams,
    tagTypes: ['User'],
    endpoints: (builder) => ({
        signUp: builder.mutation<ISignUpResponse, IAuthRequest>({
            query: (userData) => ({
                url: 'auth/sign-up',
                method: 'POST',
                body: userData,
            }),
        }),
        signIn: builder.mutation<ISignInResponse, IAuthRequest>({
            query: (userData) => ({
                url: 'auth/sign-in',
                method: 'POST',
                body: userData,
            }),
        }),
    })
});

export const { useSignUpMutation, useSignInMutation } = authApi;