import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updatePatient } from "../patientSlice";
import { useNavigate, useParams } from "react-router-dom";

export const UpdatePatient = () => {
  const dispatch = useDispatch();
  const { wards } = useSelector((state) => state.wards);
  const { patientId } = useParams();
  const formRef = useRef(null);
  const navigate = useNavigate();

  const addPatientOnSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const data = {};
    for (const [key, value] of formData.entries()) {
      if (value.length > 0) {
        data[key] = value;
      }
    }
    dispatch(updatePatient({ patientId, data }));
    navigate(-1);
  };
  return (
    <>
      <h3>Update Patient</h3>
      <form ref={formRef} onSubmit={addPatientOnSubmit}>
        <input name="name" placeholder="Name" />
        <input type="number" name="age" placeholder="Age" />
        <input name="medicalHistory" placeholder="Medial History" />
        <input name="contact" placeholder="Contact" />
        <select name="gender">
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <select name="ward">
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
