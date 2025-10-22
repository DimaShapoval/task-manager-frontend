import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./services/auth";
import { boardApi } from "./services/board";

export const store = configureStore({
    reducer: {
        [authApi.reducerPath]: authApi.reducer,
        [boardApi.reducerPath]: boardApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(authApi.middleware)
            .concat(boardApi.middleware),
})