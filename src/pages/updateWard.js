import { useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateWard } from "../wardSlice";

export const UpdateWard = () => {
  const dispatch = useDispatch();
  const { wardId } = useParams();
  const formRef = useRef(null);
  const navigate = useNavigate();

  const addWardOnSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const data = {};
    for (const [key, value] of formData.entries()) {
      if (value.length > 0) {
        data[key] = value;
      }
    }
    dispatch(updateWard({ wardId, data }));
    navigate(-1);
  };
  return (
    <>
      <h3>Update Ward</h3>
      <form ref={formRef} onSubmit={addWardOnSubmit}>
        <input type="number" name="wardNumber" placeholder="Ward Number" />
        <input name="specializations" placeholder="specialization" />
        <input name="capacity" placeholder="Capcity" />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};
