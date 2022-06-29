import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  singleEmployee: [],
  employee_id: 0,
};

const mainSlice = createSlice({
  name: "mainSlice",
  initialState,

  reducers: {
    saveData(state, action) {
      state.data = action.payload;
    },
    saveSingleEmployee(state, action) {
      state.saveSingleEmployee = action.payload;
    },
    changeID(state, action) {
      state.employee_id = action.payload;
    },
  },
});

export default mainSlice;
