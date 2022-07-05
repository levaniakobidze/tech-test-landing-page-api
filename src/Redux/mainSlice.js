import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fetchedData: [],
  initialData: [],
  isEmployeesLoading: false,
  form: { name: "", email: "", message: "" },
  isFormLoading: false,
  isEmailValid: false,
  isNameValid: false,
  isMessageValid: false,
};

const mainSlice = createSlice({
  name: "mainSlice",
  initialState,

  reducers: {
    saveFetchedData(state, action) {
      state.fetchedData = action.payload;
    },
    filterData(state, action) {
      state.initialData = action.payload;
    },
    setEmployeesLoading(state, action) {
      state.isEmployeesLoading = action.payload;
    },
    setForm(state, action) {
      state.form = action.payload;
    },
    setFormLoading(state, action) {
      state.isFormLoading = action.payload;
    },
    setNameValid(state, action) {
      state.isNameValid = action.payload;
    },
    setEmailValid(state, action) {
      state.isEmailValid = action.payload;
    },
    setMessageValid(state, action) {
      state.isMessageValid = action.payload;
    },
  },
});

export default mainSlice;
