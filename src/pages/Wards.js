import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";

export const Wards = () => {
  const { wards, status, error } = useSelector((state) => state.wards);
  const navigate = useNavigate();
  return (
    <div>
      <h3>Ward List</h3>
      <NavLink to="./add">Add Ward</NavLink>
      {status === "loading" && <h4>Loading....</h4>}
      {status === "error" && <h4>{error}</h4>}
      {wards?.map((wards) => (
        <div
          onClick={() => navigate("./" + wards._id)}
          key={wards._id}
          style={{
            backgroundColor: "whitesmoke",
            padding: "10px",
            marginBlock: "10px",
            cursor: "pointer"
          }}
        >
          <h4>{wards.wardNumber}</h4>
          <h4>{wards.specializations}</h4>
        </div>
      ))}
    </div>
  );
};
