import { useState } from "react";
import "./Login.css";   // <-- Add CSS file

export default function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [role, setRole] = useState("student");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !pass) {
      alert("Please fill all fields");
      return;
    }

    localStorage.setItem("token", "loggedin");
    localStorage.setItem("role", role);

    alert("Login Successful!");

    if (role === "student") {
      localStorage.setItem("isNewUser", "false");
      window.location.href = "/dashboard";
    } else {
      window.location.href = "/instructor";
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h2 className="login-title">Login 🔐</h2>

        <form onSubmit={handleLogin}>
          <label className="login-label">Email</label>
          <input
            className="login-input"
            value={email}
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <label className="login-label">Password</label>
          <input
            type="password"
            className="login-input"
            value={pass}
            placeholder="Enter your password"
            onChange={(e) => setPass(e.target.value)}
          />

          <label className="login-label">Select Role</label>
          <select
            className="login-input"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="student">Student</option>
            <option value="instructor">Instructor</option>
          </select>

          <button className="login-btn">Login</button>
        </form>
      </div>
    </div>
  );
}
