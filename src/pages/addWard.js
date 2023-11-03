import { useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createWard } from "../wardSlice";

export const AddWard = () => {
  const dispatch = useDispatch();
  const formRef = useRef(null);
  const navigate = useNavigate();

  const addWardOnSubmit = (e) => {
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
    dispatch(createWard(data));
    navigate("/wards");
  };
  return (
    <>
      <h3>Add Ward</h3>
      <form ref={formRef} onSubmit={addWardOnSubmit}>
        <input
          type="number"
          name="wardNumber"
          placeholder="Ward Number"
          required
        />
        <input name="specializations" placeholder="specialization" required />
        <input name="capacity" placeholder="Capcity" required />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};
