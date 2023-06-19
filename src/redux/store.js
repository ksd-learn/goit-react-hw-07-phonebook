import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from '../redux/slices/contactsSlice';
import filterReducer from '../redux/slices/filterSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
})

