import { configureStore } from "@reduxjs/toolkit";
import employeeReducer from "../Slices/employeeSlice";

const store = configureStore({
  reducer: {
    employees: employeeReducer,
  },

  devTools: true,
});

export default store;