import { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

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
    localStorage.setItem("currentUser", email);

     const users = JSON.parse(localStorage.getItem("users")) || [];
  const updatedUsers = users.map(u =>
    u.email === email ? { ...u, role } : u
  );
  localStorage.setItem("users", JSON.stringify(updatedUsers));

// 👉 enrolledCourses ONLY for STUDENT
if (role === "student") {
  const enrollKey = `enrolledCourses_${email}`;

  if (!localStorage.getItem(enrollKey)) {
    localStorage.setItem(enrollKey, JSON.stringify([]));
  }
}



    alert("Login Successful!");

   if (role === "student") {
  window.location.href = "/dashboard";
} else if (role === "instructor") {
  window.location.href = "/instructor";
} else if (role === "admin") {
  window.location.href = "/admin";
}

    
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h2 className="login-title">🔐Login </h2>

        <form onSubmit={handleLogin}>
          <label className="login-label">Email</label>
          <input
            className="login-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label className="login-label">Password</label>
          <input
            type="password"
            className="login-input"
            value={pass}
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
             <option value="admin">Admin</option>
          </select>

          <button className="login-btn">Login</button>
        </form>

        <p><Link to="/forgot-password">Forgot Password?</Link></p>
      </div>
    </div>
  );
}
