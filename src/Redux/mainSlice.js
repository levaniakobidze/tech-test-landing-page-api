import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fetchedData: [],
  filteredData: [],
};

const mainSlice = createSlice({
  name: "mainSlice",
  initialState,

  reducers: {
    saveFetchedData(state, action) {
      state.fetchedData = action.payload;
    },
    filterData(state, action) {
      state.filteredData = action.payload;
    },
  },
});

export default mainSlice;
