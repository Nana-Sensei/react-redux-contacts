import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from '../Slices/contactsSlice';

export const MyStore = configureStore({
  reducer: {
    contactReducer: contactsReducer
  },
})