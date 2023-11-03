import { useEffect } from "react";
import { fetchPatient } from "./patientSlice";
import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import { Navbar } from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import { Patients } from "./pages/Patients";
import { fetchWards } from "./wardSlice";
import { Wards } from "./pages/Wards";
import { Hospital } from "./pages/Hospital";
import { SinglePatient } from "./pages/SinglePatient";
import { AddPatient } from "./pages/AddPatient";
import { SingleWard } from "./pages/SIngleWard";
import { UpdatePatient } from "./pages/updatePatients";
import { AddWard } from "./pages/addWard";
import { UpdateWard } from "./pages/updateWard";

export default function App() {
  const dispatch = useDispatch();
  const { status: patientStatus } = useSelector((state) => state.patients);
  const { status: wardStatus } = useSelector((state) => state.wards);
  useEffect(() => {
    if (patientStatus === "idle") {
      dispatch(fetchPatient());
    }
    if (wardStatus === "idle") {
      dispatch(fetchWards());
    }
  }, [patientStatus, wardStatus, dispatch]);
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Hospital />} />
        <Route path="/patients" element={<Patients />} />
        <Route path="/patients/add" element={<AddPatient />} />
        <Route path="/patients/:patientId/update" element={<UpdatePatient />} />
        <Route path="/patients/:patientId" element={<SinglePatient />} />
        <Route path="/wards" element={<Wards />} />
        <Route path="/wards/:wardId/update" element={<UpdateWard />} />
        <Route path="/wards/add" element={<AddWard />} />
        <Route path="/wards/:wardId" element={<SingleWard />} />
      </Routes>
    </div>
  );
}
