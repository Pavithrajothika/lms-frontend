import { useState } from "react";
import "./Register.css";   // <-- Add CSS file

export default function Register() {
  const [email, setEmail] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    localStorage.setItem("enrolled", 0);
    localStorage.setItem("pending", 0);
    localStorage.setItem("progress", 0);
    localStorage.setItem("isNewUser", "true");

    alert("Account created!");
    window.location.href = "/login";
  };

  return (
    <div className="reg-page">
      <div className="reg-card">
        <h2 className="reg-title">Register ✨ </h2>

        <form onSubmit={handleRegister}>
          <label className="reg-label">Email</label>

          <input
            className="reg-input"
            value={email}
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <button className="reg-btn">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
