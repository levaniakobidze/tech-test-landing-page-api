import { configureStore } from "@reduxjs/toolkit";
import mainSlice from "./mainSlice";

const store = configureStore({ reducer: mainSlice.reducer });

export const mainActions = mainSlice.actions;

export default store;
