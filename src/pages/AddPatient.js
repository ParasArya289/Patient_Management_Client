import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPatient } from "../patientSlice";
import { useNavigate } from "react-router-dom";

export const AddPatient = () => {
  const dispatch = useDispatch();
  const { wards } = useSelector((state) => state.wards);
  const formRef = useRef(null);
  const navigate = useNavigate();

  const addPatientOnSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const data = {};
    for (const [key, value] of formData.entries()) {
      if (data[key] === "age") {
        data[key] = +value;
      }
      data[key] = value;
    }
    console.log(data);
    dispatch(createPatient(data));
    navigate("/patients");
  };
  return (
    <>
      <h3>Add Patient</h3>
      <form ref={formRef} onSubmit={addPatientOnSubmit}>
        <input name="name" placeholder="Name" required />
        <input type="number" name="age" placeholder="Age" required />
        <input name="medicalHistory" placeholder="Medial History" required />
        <input name="contact" placeholder="Contact" required />
        <select name="gender" required>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <select name="ward" required>
          {wards?.map(({ specializations, wardNumber }) => (
            <option key={wardNumber} value={specializations}>
              {specializations} ({wardNumber})
            </option>
          ))}
        </select>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};
