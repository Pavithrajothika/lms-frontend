import { useParams, Link } from "react-router-dom";

export default function CourseView() {
  const { id } = useParams();

  // Default videos for built-in courses
  const defaultVideos = {
    1: [
      { title: "React Introduction", url: "https://www.youtube.com/embed/SqcY0GlETPk" },
      { title: "React Components", url: "https://www.youtube.com/embed/kVeOpcw4GWY" },
    ],
    2: [
      { title: "JS Introduction", url: "https://www.youtube.com/embed/W6NZfCO5SIk" },
      { title: "JS Functions Explained", url: "https://www.youtube.com/embed/jS4aFq5-91M" },
    ],
    3: [
      { title: "Java Introduction", url: "https://www.youtube.com/embed/eIrMbAQSU34" },
      { title: "Java OOP Concepts", url: "https://www.youtube.com/embed/8cm1x4bC610" },
    ],
    4: [
      { title: "Python Introduction", url: "https://www.youtube.com/embed/kqtD5dpn9C8" },
      { title: "Python Variables & Data", url: "https://www.youtube.com/embed/6iF8Xb7Z3wQ" },
    ],
  };

  // ⭐ Get instructor-added courses
  const extraCourses =
    JSON.parse(localStorage.getItem("extraCourses")) || [];

  // Find if this course is user-created
  const selectedCourse = extraCourses.find(c => String(c.id) === String(id));


  // If user-created → use stored videos
  const lessons = selectedCourse
    ? selectedCourse.videos
    : defaultVideos[id];

  return (
    <div className="container">
      <h2>Course ID: {id}</h2>

      <Link to="/courses">
        <button className="button" style={{ background: "#6366f1" }}>
          ⬅ Back to Courses
        </button>
      </Link>

      {lessons?.map((l, index) => (
        <div key={index} className="card lesson-card">
          <h3>{l.title}</h3>

          <iframe
            width="500"
            height="300"
            src={l.url}
            title={l.title}
            allowFullScreen
          ></iframe>
        </div>
      ))}
    </div>
  );
}
