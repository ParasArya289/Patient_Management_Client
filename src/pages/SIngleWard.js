import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { deleteWard } from "../wardSlice";

export const SingleWard = () => {
  const { wardId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { wards, status } = useSelector((state) => state.wards);
  const foundWard = wards?.find(({ _id }) => _id === wardId);

  const deleteWardHandler = () => {
    dispatch(deleteWard(foundWard._id));
    navigate("/wards");
  };
  return (
    <div>
      <h3>Ward detail</h3>
      {status === "loading" && <h4>Loading....</h4>}
      <h4>Ward Number: {foundWard?.wardNumber}</h4>
      <h4>Specialization: {foundWard?.specializations}</h4>
      <h4>Capicity: {foundWard?.capacity}</h4>
      <NavLink to={"./update"}>Update</NavLink>{" "}
      <button onClick={deleteWardHandler}>Delete</button>
    </div>
  );
};
