
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface User {
  id: number;
  name: string;
  email: string;
  company?: string;
  plan: 'free' | 'pro' | 'enterprise';
}

export interface ApiResponse<T> {
  data: T;
  message: string;
  success: boolean;
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
    baseUrl: 'https://jsonplaceholder.typicode.com/', // Sample API
    prepareHeaders: (headers, { getState }) => {
      // Add auth token if available
      const token = (getState() as any).auth.token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['User', 'Posts'],
  endpoints: (builder) => ({
    // Authentication endpoints
    login: builder.mutation<ApiResponse<{ user: User; token: string }>, LoginRequest>({
      query: (credentials) => ({
        url: 'users/1', // Mock endpoint
        method: 'GET',
      }),
      transformResponse: (response: any): ApiResponse<{ user: User; token: string }> => ({
        data: {
          user: {
            id: response.id,
            name: response.name,
            email: response.email,
            company: response.company?.name,
            plan: 'pro'
          },
          token: 'mock-jwt-token-' + Date.now()
        },
        message: 'Login successful',
        success: true
      }),
    }),
    
    signup: builder.mutation<ApiResponse<{ user: User; token: string }>, SignupRequest>({
      query: (userData) => ({
        url: 'users',
        method: 'POST',
        body: userData,
      }),
      transformResponse: (response: any): ApiResponse<{ user: User; token: string }> => ({
        data: {
          user: {
            id: response.id || Date.now(),
            name: response.name,
            email: response.email,
            company: response.company,
            plan: 'free'
          },
          token: 'mock-jwt-token-' + Date.now()
        },
        message: 'Account created successfully',
        success: true
      }),
    }),

    // Contact form submission
    submitContact: builder.mutation<ApiResponse<string>, ContactRequest>({
      query: (contactData) => ({
        url: 'posts',
        method: 'POST',
        body: contactData,
      }),
      transformResponse: (): ApiResponse<string> => ({
        data: 'Message sent successfully',
        message: 'We will get back to you soon!',
        success: true
      }),
    }),

    // Get user profile
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

    // Get blog posts for resources section
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
