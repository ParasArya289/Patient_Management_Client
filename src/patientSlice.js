import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPatient = createAsyncThunk(
  "patients/fetchPatient",
  async () => {
    const response = await axios.get(
      "https://patientmanagementserver-1.parasarya2.repl.co/patients"
    );
    return response.data.patients;
  }
);
export const createPatient = createAsyncThunk(
  "patients/createPatient",
  async (patient) => {
    const response = await axios.post(
      "https://patientmanagementserver-1.parasarya2.repl.co/patients",
      patient
    );
    return response.data.patients;
  }
);
export const deletePatient = createAsyncThunk(
  "patients/deletePatient",
  async (id) => {
    const response = await axios.delete(
      `https://patientmanagementserver-1.parasarya2.repl.co/patients/delete/${id}`
    );
    return response.data.patients;
  }
);
export const updatePatient = createAsyncThunk(
  "patients/updatePatient",
  async ({ patientId, data }) => {
    const response = await axios.post(
      `https://patientmanagementserver-1.parasarya2.repl.co/patients/update/${patientId}`,
      data
    );
    return response.data.patients;
  }
);

const initialState = {
  status: "idle",
  error: null,
  patients: []
};

export const patientSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchPatient.pending]: (state) => {
      state.status = "loading";
    },
    [fetchPatient.fulfilled]: (state, action) => {
      state.status = "success";
      state.patients = action.payload;
    },
    [fetchPatient.rejected]: (state, action) => {
      state.status = "error";
      state.error = action.error.message;
    },
    [createPatient.pending]: (state) => {
      state.status = "loading";
    },
    [createPatient.fulfilled]: (state, action) => {
      state.status = "success";
      state.patients = action.payload;
    },
    [createPatient.rejected]: (state, action) => {
      state.status = "error";
      state.error = action.error.message;
    },
    [deletePatient.pending]: (state) => {
      state.status = "loading";
    },
    [deletePatient.fulfilled]: (state, action) => {
      state.status = "success";
      state.patients = action.payload;
    },
    [deletePatient.rejected]: (state, action) => {
      state.status = "error";
      state.error = action.error.message;
    },
    [updatePatient.pending]: (state) => {
      state.status = "loading";
    },
    [updatePatient.fulfilled]: (state, action) => {
      state.status = "success";
      state.patients = action.payload;
    },
    [updatePatient.rejected]: (state, action) => {
      state.status = "error";
      state.error = action.error.message;
    }
  }
});
export default patientSlice.reducer;
