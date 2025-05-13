// src/app/store.ts
import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './apiSlice';
import { generalSlice } from 'reducers';

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    [generalSlice.reducerPath]: generalSlice.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware), 
});

export type RootState = ReturnType<typeof store.getState>;
export type AppState = ReturnType<typeof configureStore>;
export type AppDispatch = typeof store.dispatch;
