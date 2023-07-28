import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './services';

export const handlePanding = state => {
  state.isLoading = true;
};

export const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
// export const contactSlice = createSlice({
//   name: 'contacts',
//   initialState: [],
export const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  //   reducers: {
  //     addContact: (state, action) => {
  //       const { id, name, number } = action.payload;
  //       state.push({ id, name, number }); },
  //     deleteContact: (state, action) => {
  //       const id = action.payload;
  //       return state.filter(contact => contact.id !== id); },
  //   },
  // });
  extraReducers: {
    [fetchContacts.pending]: hanlePanding,
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchContacts.rejected]: handleRejected,
    [addContact.pending]: hanlePanding,
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [addContact.rejected]: handleRejected,
    [deleteContact.pending]: hanlePanding,
    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const id = action.payload;
      state.items = state.items.filter(contact => contact.id !== id);
    },
    [deleteContact.rejected]: handleRejected,
  },
});
// export const { addContact, deleteContact } = contactSlice.actions;
// export const contactsReducer = contactSlice.reducer;
// export const getContacts = state => state.contacts;
export const contactsReducer = contactSlice.reducer;
export const selectContacts = state => state.contacts;
export const selectContactsItems = state => state.contacts.items;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;