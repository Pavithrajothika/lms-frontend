import { useState } from "react";
import "../App.css";
import "./AddCourse.css";

export default function AddCourse() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [img, setImg] = useState("");

  const [video1, setVideo1] = useState("");
  const [video2, setVideo2] = useState("");

  const handleAddCourse = () => {
    // FULL VALIDATION
    if (!title || !desc || !img || !video1 || !video2) {
      alert("Please fill all fields including videos");
      return;
    }

    const newCourse = {
      id: Date.now(),
      title,
      desc,
      img,
      videos: [
        { title: `${title} - Introduction`, url: video1 },
        { title: `${title} - Advanced Concepts`, url: video2 },
      ],
    };

    const user = localStorage.getItem("currentUser");

    /*  Instructor-wise save */
    const instructorKey = `extraCourses_${user}`;
    const instructorCourses =
      JSON.parse(localStorage.getItem(instructorKey)) || [];

    instructorCourses.push(newCourse);
    localStorage.setItem(
      instructorKey,
      JSON.stringify(instructorCourses)
    );

    /* Global save (for students) */
    const allCourses =
      JSON.parse(localStorage.getItem("extraCourses_ALL")) || [];

    allCourses.push(newCourse);
    localStorage.setItem(
      "extraCourses_ALL",
      JSON.stringify(allCourses)
    );

    alert("Course Added Successfully!");
    window.location.href = "/instructor"; //  correct redirect
  };

  return (
    <div className="container">
      <div className="card form-card">
        <h2>Add New Course</h2>

        <label>Course Title</label>
        <input
          className="input"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Description</label>
        <input
          className="input"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />

        <label>Image URL</label>
        <input
          className="input"
          value={img}
          onChange={(e) => setImg(e.target.value)}
        />

        <label>YouTube Video 1</label>
        <input
          className="input"
          value={video1}
          onChange={(e) => setVideo1(e.target.value)}
        />

        <label>YouTube Video 2</label>
        <input
          className="input"
          value={video2}
          onChange={(e) => setVideo2(e.target.value)}
        />

        <button className="button" onClick={handleAddCourse}>
          Add Course
        </button>
      </div>
    </div>
  );
}
