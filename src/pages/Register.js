import { useState } from "react";
import "./Register.css";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    if (!name || !email || !password || !confirmPassword) {
      alert("Please fill all fields");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    //SAVE USER LIST
    const users =
      JSON.parse(localStorage.getItem("users")) || [];

    const alreadyExists = users.find(
      (u) => u.email === email
    );

    if (alreadyExists) {
      alert("User already registered");
      return;
    }

    users.push({
      name,
      email,
      password,
      role: "student"
    });

    localStorage.setItem("users", JSON.stringify(users));

    //  CLEAR OLD SESSION
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("currentUser");

    //  INIT USER-SPECIFIC DATA
    localStorage.setItem(
      `enrolledCourses_${email}`,
      JSON.stringify([])
    );

    localStorage.setItem(
      `courseProgress_${email}`,
      JSON.stringify({})
    );

    alert("Account created successfully ");
    window.location.href = "/login";
  };

  return (
    <div className="reg-page">
      <div className="reg-card">
        <h2 className="reg-title"> ✨ Register</h2>

        <form onSubmit={handleRegister}>
          {/*  NAME */}
          <label className="reg-label">Name</label>
          <input
            className="reg-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />

          {/*  EMAIL */}
          <label className="reg-label">Email</label>
          <input
            className="reg-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
          />

          {/*  PASSWORD */}
          <label className="reg-label">Password</label>
          <input
            type="password"
            className="reg-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {/*  CONFIRM */}
          <label className="reg-label">Confirm Password</label>
          <input
            type="password"
            className="reg-input"
            value={confirmPassword}
            onChange={(e) =>
              setConfirmPassword(e.target.value)
            }
          />

          <button className="reg-btn">Register</button>
        </form>
      </div>
    </div>
  );
}
