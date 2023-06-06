import { createSlice } from '@reduxjs/toolkit';

const state = {
  contacts:[
    {
      name: "Nana Poku",
      mobile: "026 879 2345",
      location: "Dzorwulu-Accra",
      id: "CTC001"
    },

    {
      name: "Nana Osei",
      mobile: "050 124 4587",
      location: "Adenta-Accra",
      id: "CTC002"
    },
  ],
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState: state, 
  reducers: {
    addContact: (state, action) => {
      state.contacts = [...state.contacts, action.payload]
    },
    editContact: () => {},
    deleteContact: () => {}
  }
})


export const {addContact, editContact, deleteContact } = contactsSlice.actions

export default contactsSlice.reducer;