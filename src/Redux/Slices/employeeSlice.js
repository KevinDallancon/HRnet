import { createSlice } from "@reduxjs/toolkit";
import { employees } from '../../data/fakeEmployee.json';

const initialState = {
  employees: employees || [] 
};


const employeeSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    addEmployee: (state, action) => {
      state.employees.push(action.payload);
    },
  },
});

export const { addEmployee } = employeeSlice.actions;
export default employeeSlice.reducer;