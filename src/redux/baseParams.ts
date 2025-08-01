import { fetchBaseQuery } from '@reduxjs/toolkit/query'

export const authParams = fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/api/v1`,
    headers: {
        'Content-Type': 'application/json',
    },
})

export const baseParams = fetchBaseQuery({
  baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/api/v1`,
  prepareHeaders: (headers) => {
    
    const token = localStorage.getItem('token');

    // If we have a token set in state, let's assume that we should be passing it.
    if (token) {
      headers.set('authorization', `Bearer ${token}`)
    }

    return headers
  },
})