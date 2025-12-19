import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../App.css";

export default function InstructorDashboard() {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

useEffect(() => {
  const user = localStorage.getItem("currentUser");
  const instructorKey = `extraCourses_${user}`;

  const data =
    JSON.parse(localStorage.getItem(instructorKey)) || [];

  setCourses(data);
}, []);


  const deleteCourse = (id) => {
  const confirmDelete = window.confirm(
    "Are you sure you want to delete this course?"
  );
  if (!confirmDelete) return;

  const user = localStorage.getItem("currentUser");
  const instructorKey = `extraCourses_${user}`;

  //  Instructor dashboard delete (same logic)
  const updatedInstructorCourses =
    courses.filter(course => course.id !== id);

  localStorage.setItem(
    instructorKey,
    JSON.stringify(updatedInstructorCourses)
  );

  setCourses(updatedInstructorCourses);

  //  GLOBAL delete (for Courses page)
  const allCourses =
    JSON.parse(localStorage.getItem("extraCourses_ALL")) || [];

  const updatedAllCourses =
    allCourses.filter(course => course.id !== id);

  localStorage.setItem(
    "extraCourses_ALL",
    JSON.stringify(updatedAllCourses)
  );
};


  return (
    <div className="instructor-wrapper">
      <div className="instructor-card">
        <h2>👩‍🏫 Instructor Dashboard</h2>

        <button
          className="instructor-btn"
          onClick={() => navigate("/add-course")}
        >
          ➕ Add New Course
        </button>

        <h3 style={{ marginTop: 20 }}>📚 My Courses</h3>

        {courses.length === 0 && <p>No courses added yet</p>}

        {courses.map(course => (
          <div
            key={course.id}
            style={{
              border: "1px solid #ddd",
              padding: 12,
              marginTop: 12
            }}
          >
            <h4>{course.title}</h4>

            {/* ✏ UPDATE */}
            <button
              onClick={() =>
                navigate(`/edit-course/${course.id}`)
              }
            >
              ✏ Edit
            </button>

            {/*  DELETE */}
            <button
              style={{
                marginLeft: 10,
                background: "red",
                color: "white"
              }}
              onClick={() => deleteCourse(course.id)}
            >
              🗑 Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}