import { configureStore } from '@reduxjs/toolkit';
import darkModeReducer from './dark-mode/';

export const store = configureStore({
  reducer: {
    darkMode: darkModeReducer,
  },
});