import { createApi } from "@reduxjs/toolkit/query/react";
import { authParams } from "../baseParams";
import { ISignUpRequest, ISignUpResponse } from "@/app/types/auth.interface";

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: authParams,
    tagTypes: ['User'],
    endpoints: (builder) => ({
        signUp: builder.mutation<ISignUpResponse, ISignUpRequest>({
            query: (userData) => ({
                url: 'auth/sign-up',
                method: 'POST',
                body: userData,
            }),
        }),
    })
});

export const { useSignUpMutation } = authApi;