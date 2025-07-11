
// Simplified API slice without complex type inference
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface User {
  id: number;
  name: string;
  email: string;
  plan: string;
  company?: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface SignupRequest {
  name: string;
  email: string;
  password: string;
  company?: string;
}

export interface ContactRequest {
  name: string;
  email: string;
  message: string;
}

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com/',
  }),
  tagTypes: ['User'],
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials: LoginRequest) => ({
        url: 'users/1',
        method: 'GET',
      }),
    }),
    
    signup: builder.mutation({
      query: (userData: SignupRequest) => ({
        url: 'users',
        method: 'POST',
        body: userData,
      }),
    }),

    contact: builder.mutation({
      query: (contactData: ContactRequest) => ({
        url: 'posts',
        method: 'POST',
        body: contactData,
      }),
    }),
  }),
});

export const { useLoginMutation, useSignupMutation, useContactMutation } = api;
