import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "../App.css";

export default function EditCourse() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [img, setImg] = useState("");

  //  Video states
  const [video1, setVideo1] = useState("");
  const [video2, setVideo2] = useState("");

  //  LOAD COURSE (INSTRUCTOR-WISE)
  useEffect(() => {
    const user = localStorage.getItem("currentUser");
    const instructorKey = `extraCourses_${user}`;

    const courses =
      JSON.parse(localStorage.getItem(instructorKey)) || [];

    const course = courses.find(
      c => String(c.id) === id
    );

    if (!course) {
      alert("Course not found");
      navigate("/instructor");
      return;
    }

    setTitle(course.title);
    setDesc(course.desc);
    setImg(course.img);
    setVideo1(course.videos?.[0]?.url || "");
    setVideo2(course.videos?.[1]?.url || "");
  }, [id, navigate]);

  //  UPDATE COURSE (INSTRUCTOR + GLOBAL)
  const updateCourse = () => {
    if (!title || !desc || !img) {
      alert("Please fill all fields");
      return;
    }

    const user = localStorage.getItem("currentUser");
    const instructorKey = `extraCourses_${user}`;

    /* UPDATE INSTRUCTOR COURSES */
    const instructorCourses =
      JSON.parse(localStorage.getItem(instructorKey)) || [];

    const updatedInstructorCourses = instructorCourses.map(course =>
      String(course.id) === id
        ? {
            ...course,
            title,
            desc,
            img,
            videos: [
              { title: "Lesson 1", url: video1 },
              { title: "Lesson 2", url: video2 }
            ]
          }
        : course
    );

    localStorage.setItem(
      instructorKey,
      JSON.stringify(updatedInstructorCourses)
    );

    /*  UPDATE GLOBAL COURSES (FOR STUDENTS) */
    const allCourses =
      JSON.parse(localStorage.getItem("extraCourses_ALL")) || [];

    const updatedAllCourses = allCourses.map(course =>
      String(course.id) === id
        ? {
            ...course,
            title,
            desc,
            img,
            videos: [
              { title: "Lesson 1", url: video1 },
              { title: "Lesson 2", url: video2 }
            ]
          }
        : course
    );

    localStorage.setItem(
      "extraCourses_ALL",
      JSON.stringify(updatedAllCourses)
    );

    alert("Course updated successfully!");
    navigate("/instructor");
  };

  return (
    <div className="edit-page">
      <div className="edit-card">
        <h2>Edit Course</h2>

        <label>Title</label>
        <input
          className="edit-input"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />

        <label>Description</label>
        <input
          className="edit-input"
          value={desc}
          onChange={e => setDesc(e.target.value)}
        />

        <label>Image URL</label>
        <input
          className="edit-input"
          value={img}
          onChange={e => setImg(e.target.value)}
        />

        <label>YouTube Video 1</label>
        <input
          className="edit-input"
          value={video1}
          onChange={e => setVideo1(e.target.value)}
          placeholder="https://www.youtube.com/embed/xxxx"
        />

        <label>YouTube Video 2</label>
        <input
          className="edit-input"
          value={video2}
          onChange={e => setVideo2(e.target.value)}
          placeholder="https://www.youtube.com/embed/xxxx"
        />

        <button
          className="update-btn"
          onClick={updateCourse}
        >
          ✅ Update Course
        </button>
      </div>
    </div>
  );
}
