import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="nav-container">
      <div className="nav-wrapper">
        <div className="nav-logo"> LMS</div>

        <div className="nav-links">
          <Link className={location.pathname === "/" ? "active" : ""} to="/">Home</Link>
          <Link className={location.pathname === "/register" ? "active" : ""} to="/register">Register</Link>
          <Link className={location.pathname === "/login" ? "active" : ""} to="/login">Login</Link>
          <Link className={location.pathname === "/dashboard" ? "active" : ""} to="/dashboard">Dashboard</Link>
          <Link className={location.pathname === "/courses" ? "active" : ""} to="/courses">Courses</Link>
        </div>
      </div>
    </nav>
  );
}
