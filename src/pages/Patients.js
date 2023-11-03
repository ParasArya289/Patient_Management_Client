import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";

export const Patients = () => {
  const { patients, status, error } = useSelector((state) => state.patients);
  const navigate = useNavigate();
  return (
    <div>
      <h3>Patients List</h3>
      <NavLink to="./add">Add Patient</NavLink>
      {status === "loading" && <h4>Loading....</h4>}
      {status === "error" && <h4>{error}</h4>}
      {patients?.map((patient) => (
        <div
          onClick={() => navigate("/patients/" + patient._id)}
          key={patient._id}
          style={{
            backgroundColor: "whitesmoke",
            padding: "10px",
            marginBlock: "10px",
            cursor: "pointer"
          }}
        >
          <h4>{patient.name}</h4>
          <h4>{patient.ward}</h4>
        </div>
      ))}
    </div>
  );
};
