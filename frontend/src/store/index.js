import { configureStore } from "@reduxjs/toolkit";
import contactReducer from "./contactSlice.js";

const store = configureStore({
  reducer: {
    contact: contactReducer,
  },
});

export default store;
