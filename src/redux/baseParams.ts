import { fetchBaseQuery } from '@reduxjs/toolkit/query'

export const baseParams = fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/api/v1`,
    credentials: 'include',
})