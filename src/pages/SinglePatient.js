import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { deletePatient } from "../patientSlice";

export const SinglePatient = () => {
  const { patientId } = useParams();
  const { patients, status } = useSelector((state) => state.patients);
  const dispatch = useDispatch();
  const naviagate = useNavigate();

  const foundPatient = patients?.find(({ _id }) => _id === patientId);

  const deletePatientHandler = () => {
    dispatch(deletePatient(foundPatient._id));
    naviagate("/patients");
  };

  return (
    <div>
      <h3>Patient detail</h3>
      {status === "loading" && <h4>Loading....</h4>}
      <h4>Name: {foundPatient?.name}</h4>
      <h4>Age: {foundPatient?.age}</h4>
      <h4>Gender: {foundPatient?.gender}</h4>
      <h4>Medical History: {foundPatient?.medicalHistory}</h4>
      <h4>Ward: {foundPatient?.ward}</h4>
      <NavLink to={"./update"}>Update</NavLink>
      <button onClick={deletePatientHandler}>Delete</button>
    </div>
  );
};
