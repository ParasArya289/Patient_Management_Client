import { configureStore } from "@reduxjs/toolkit";
import patientSlice from "./patientSlice";
import wardSlice from "./wardSlice";

export default configureStore({
  reducer: {
    patients: patientSlice,
    wards: wardSlice
  }
});
