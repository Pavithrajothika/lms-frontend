import { useState } from "react";
import "../App.css";

export default function AddCourse() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [img, setImg] = useState("");

  // Video inputs
  const [video1, setVideo1] = useState("");
  const [video2, setVideo2] = useState("");

  const handleAddCourse = () => {
    if (!title || !desc || !img) {
      alert("Please fill all fields");
      return;
    }

    const newCourse = {
      id: Date.now(), // unique course id
      title,
      desc,
      img,
      videos: [
        { title: "Lesson 1", url: video1 },
        { title: "Lesson 2", url: video2 },
      ],
    };

    // Save in LocalStorage
    const existing = JSON.parse(localStorage.getItem("extraCourses")) || [];
    existing.push(newCourse);

    localStorage.setItem("extraCourses", JSON.stringify(existing));

    // Increase Published Count
    const published = Number(localStorage.getItem("published")) || 0;
    localStorage.setItem("published", published + 1);

    alert("Course Added Successfully!");
    window.location.href = "/courses";
  };

  return (
    <div className="container">
      <div className="card form-card">
        <h2>Add New Course</h2>

        <label>Course Title</label>
        <input className="input" value={title} onChange={(e) => setTitle(e.target.value)} />

        <label>Description</label>
        <input className="input" value={desc} onChange={(e) => setDesc(e.target.value)} />

        <label>Image URL</label>
        <input className="input" value={img} onChange={(e) => setImg(e.target.value)} />

        <label>YouTube Video 1</label>
        <input className="input" value={video1} onChange={(e) => setVideo1(e.target.value)} />

        <label>YouTube Video 2</label>
        <input className="input" value={video2} onChange={(e) => setVideo2(e.target.value)} />

        <button className="button" onClick={handleAddCourse}>
          Add Course
        </button>
      </div>
    </div>
  );
}
