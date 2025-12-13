import { useEffect, useState } from "react";
import "../../App.css";

export default function InstructorDashboard() {
  const [published, setPublished] = useState(0);

  // Load published count from LocalStorage
  useEffect(() => {
    const count = Number(localStorage.getItem("published")) || 0;
    setPublished(count);
  }, []);

  // eslint-disable-next-line
  const addNewCourse = () => {
    const newCount = published + 1;
    localStorage.setItem("published", newCount);
    setPublished(newCount);
    alert("New Course Added Successfully!");
  };

  return (
    <div className="instructor-wrapper">
      <div className="instructor-card">

        <h2 className="instructor-title">👩‍🏫 Instructor Dashboard</h2>

        <p className="instructor-stat">📚 Courses Published: {published}</p>
        <p className="instructor-sub">🛠 Manage your course materials here.</p>

        <button
          className="instructor-btn"
          onClick={() => (window.location.href = "/add-course")}
        >
          ➕ Add New Course
        </button>

      </div>
    </div>
  );
}
