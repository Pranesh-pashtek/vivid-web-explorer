
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface User {
  id: number;
  name: string;
  email: string;
  company?: string;
  plan: 'free' | 'pro' | 'enterprise';
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
  company?: string;
}

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com/',
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as any).auth.token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['User', 'Posts'],
  endpoints: (builder) => ({
    login: builder.mutation<{ user: User; token: string }, LoginRequest>({
      query: (credentials) => ({
        url: 'users/1',
        method: 'GET',
      }),
      transformResponse: (response: any) => ({
        user: {
          id: response.id,
          name: response.name,
          email: response.email,
          company: response.company?.name,
          plan: 'pro' as const
        },
        token: 'mock-jwt-token-' + Date.now()
      }),
    }),
    
    signup: builder.mutation<{ user: User; token: string }, SignupRequest>({
      query: (userData) => ({
        url: 'users',
        method: 'POST',
        body: userData,
      }),
      transformResponse: (response: any) => ({
        user: {
          id: response.id || Date.now(),
          name: response.name,
          email: response.email,
          company: response.company,
          plan: 'free' as const
        },
        token: 'mock-jwt-token-' + Date.now()
      }),
    }),

    submitContact: builder.mutation<string, ContactRequest>({
      query: (contactData) => ({
        url: 'posts',
        method: 'POST',
        body: contactData,
      }),
      transformResponse: () => 'Message sent successfully',
    }),

    getUserProfile: builder.query<User, number>({
      query: (userId) => `users/${userId}`,
      transformResponse: (response: any): User => ({
        id: response.id,
        name: response.name,
        email: response.email,
        company: response.company?.name,
        plan: 'pro'
      }),
      providesTags: ['User'],
    }),

    getBlogPosts: builder.query<any[], void>({
      query: () => 'posts?_limit=6',
      providesTags: ['Posts'],
    }),
  }),
});

export const {
  useLoginMutation,
  useSignupMutation,
  useSubmitContactMutation,
  useGetUserProfileQuery,
  useGetBlogPostsQuery,
} = api;
