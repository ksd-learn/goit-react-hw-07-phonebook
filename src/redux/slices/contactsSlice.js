import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, deleteItem, addItem } from '../operations/operations';
import { exampleBook } from '../../data/exampleBook';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null
  },
  extraReducers: {
    [fetchContacts.pending](state, action) {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchContacts.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    [deleteItem.pending](state, action) {
      state.isLoading = true;
    },
    [deleteItem.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(
        task => task.id === action.payload.id
      );
      state.items.splice(index, 1);
    },
    [deleteItem.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    [addItem.pending](state) {
      state.isLoading = true;
    },
    [addItem.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [addItem.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  }
})

export const contactsReducer = contactsSlice.reducer;
//export const { add, remove } = contactsSlice.actions;
//export default contactsSlice.reducer;
