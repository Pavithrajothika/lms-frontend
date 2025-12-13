import { Link } from "react-router-dom";

const courses = [
  { id: 1, title: "React Basics", desc: "Learn React step by step", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmPUeWPhAs2rfELhXvcrrF2MMIIK0Lt0IjDiOsEdmziXUY6iq4C83Zzf4&s/300" },
  { id: 2, title: "JavaScript Mastery", desc: "Deep Dive into JS", img: "https://toppng.com/uploads/preview/javascript-logo-number-angularjs-node-javascript-logo-11563241338go76tq0nxz.png?utm_source=chatgpt.com/301" },
  { id: 3, title: "Java Basics", desc: "Deep Dive into Java", img: "https://4kwallpapers.com/images/wallpapers/java-black-2560x2560-16069.png?utm_source=chatgpt.com/301" },
  { id: 4, title: "Python Basics", desc: "Deep Dive into Python", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/2048px-Python-logo-notext.svg.png?utm_source=chatgpt.com/301" }
];

export default function Courses() {

  // ⭐ Load extra courses created by Instructor
  const extraCourses = JSON.parse(localStorage.getItem("extraCourses")) || [];

  const enrollCourse = (courseId) => {
    localStorage.setItem("courseId", courseId);
    localStorage.setItem("enrolled", 1);
    localStorage.setItem("pending", 1);
    localStorage.setItem("progress", 0);

    alert("Course Enrolled Successfully!");
    window.location.href = "/dashboard";
  };

  return (
    <div className="courses-page">

      <h2 className="courses-title">🎓 Available Courses</h2>

      <div className="courses-grid">
        
        {/*  Default Courses */}
        {courses.map(c => (
          <div className="course-card-new" key={c.id}>
            <img src={c.img} className="course-img" alt="" />
            <h3 className="course-name">{c.title}</h3>
            <p className="course-desc">{c.desc}</p>

            <div className="course-buttons">
              <button className="course-btn" onClick={() => enrollCourse(c.id)}>
                Enroll Course
              </button>

              <Link className="course-btn-outline" to={`/course/${c.id}`}>
                View Course
              </Link>
            </div>
          </div>
        ))}

        {/* ⭐ Instructor Added Courses (from LocalStorage) */}
        {extraCourses.map(c => (
          <div className="course-card-new" key={c.id}>
            <img src={c.img} className="course-img" alt="" />
            <h3 className="course-name">{c.title}</h3>
            <p className="course-desc">{c.desc}</p>

            <div className="course-buttons">
              <button className="course-btn" onClick={() => enrollCourse(c.id)}>
                Enroll Course
              </button>

              <Link className="course-btn-outline" to={`/course/${c.id}`}>
                View Course
              </Link>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}
