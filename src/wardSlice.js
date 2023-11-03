import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchWards = createAsyncThunk("patients/fetchWards", async () => {
  const response = await axios.get(
    "https://patientmanagementserver-1.parasarya2.repl.co/wards"
  );
  return response.data.wards;
});
export const createWard = createAsyncThunk(
  "patients/createWard",
  async (ward) => {
    const response = await axios.post(
      "https://patientmanagementserver-1.parasarya2.repl.co/wards",
      ward
    );
    return response.data.wards;
  }
);
export const deleteWard = createAsyncThunk(
  "patients/deleteWard",
  async (id) => {
    const response = await axios.delete(
      `https://patientmanagementserver-1.parasarya2.repl.co/wards/delete/${id}`
    );
    return response.data.wards;
  }
);
export const updateWard = createAsyncThunk(
  "patients/updateWard",
  async ({ wardId, data }) => {
    const response = await axios.post(
      `https://patientmanagementserver-1.parasarya2.repl.co/wards/update/${wardId}`,
      data
    );
    return response.data.wards;
  }
);

const initialState = {
  status: "idle",
  error: null,
  wards: []
};

export const wardSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchWards.pending]: (state) => {
      state.status = "loading";
    },
    [fetchWards.fulfilled]: (state, action) => {
      state.status = "success";
      state.wards = action.payload;
    },
    [fetchWards.rejected]: (state, action) => {
      state.status = "error";
      state.error = action.error.message;
    },
    [createWard.pending]: (state) => {
      state.status = "loading";
    },
    [createWard.fulfilled]: (state, action) => {
      state.status = "success";
      state.wards = action.payload;
    },
    [createWard.rejected]: (state, action) => {
      state.status = "error";
      state.error = action.error.message;
    },
    [deleteWard.pending]: (state) => {
      state.status = "loading";
    },
    [deleteWard.fulfilled]: (state, action) => {
      state.status = "success";
      state.wards = action.payload;
    },
    [deleteWard.rejected]: (state, action) => {
      state.status = "error";
      state.error = action.error.message;
    },
    [updateWard.pending]: (state) => {
      state.status = "loading";
    },
    [updateWard.fulfilled]: (state, action) => {
      state.status = "success";
      state.wards = action.payload;
    },
    [updateWard.rejected]: (state, action) => {
      state.status = "error";
      state.error = action.error.message;
    }
  }
});
export default wardSlice.reducer;
