import "./Navbar.css";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav>
      <h4>Patient Management</h4>
      <div>
        <NavLink to="/patients">Patients</NavLink>
        <NavLink to="/wards">Wards</NavLink>
        <NavLink to="/">Hospital</NavLink>
      </div>
    </nav>
  );
};
