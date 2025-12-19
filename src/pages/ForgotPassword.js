import { useState } from "react";
import "./ForgotPassword.css";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      alert("Please enter your email");
      return;
    }

    alert(
      "If this email exists, a reset link / OTP will be sent (backend later)"
    );
  };

  return (
    <div className="forgot-page">
      <div className="forgot-card">
        <h2>Forgot Password </h2>

        <form onSubmit={handleSubmit}>
          <label>Email</label>
          <input
            type="email"
            value={email}
            placeholder="Enter registered email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <button type="submit">Send Reset Link</button>
        </form>
      </div>
    </div>
  );
}
