import { Link } from "react-router-dom";
import "../App.css";

/* DEFAULT COURSES */
const courses = [
  {
    id: 1,
    title: "React Basics",
    desc: "Learn React step by step",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmPUeWPhAs2rfELhXvcrrF2MMIIK0Lt0IjDiOsEdmziXUY6iq4C83Zzf4&s",
  },
  {
    id: 2,
    title: "JavaScript Mastery",
    desc: "Deep Dive into JS",
    img: "https://toppng.com/uploads/preview/javascript-logo-number-angularjs-node-javascript-logo-11563241338go76tq0nxz.png",
  },
  {
    id: 3,
    title: "Java Basics",
    desc: "Deep Dive into Java",
    img: "https://4kwallpapers.com/images/wallpapers/java-black-2560x2560-16069.png",
  },
  {
    id: 4,
    title: "Python Basics",
    desc: "Deep Dive into Python",
    img: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
  },
];

export default function Courses() {
  /*  Instructor Added Courses */
const extraCourses =
  JSON.parse(localStorage.getItem("extraCourses_ALL")) || [];


  /*  MULTI-COURSE ENROLL FUNCTION */
  const enrollCourse = (courseId) => {
   const user = localStorage.getItem("currentUser");
const enrollKey = `enrolledCourses_${user}`;

let enrolledCourses =
  JSON.parse(localStorage.getItem(enrollKey)) || [];

    // Already enrolled check
    if (enrolledCourses.includes(courseId)) {
      alert("Already enrolled in this course!");
      return;
    }

    // Add new course
    enrolledCourses.push(courseId);
  localStorage.setItem(
  enrollKey,
  JSON.stringify(enrolledCourses)
  );

    // Optional dashboard values
    localStorage.setItem("pending", enrolledCourses.length);
    localStorage.setItem("progress", 0);

    alert("Course Enrolled Successfully!");
  };

  return (
    <div className="courses-page">
      <h2 className="courses-title"> 🎓 Available Courses</h2>

      <div className="courses-grid">
        {/* DEFAULT COURSES */}
        {courses.map((c) => (
          <div className="course-card-new" key={c.id}>
            <img src={c.img} className="course-img" alt="" />
            <h3 className="course-name">{c.title}</h3>
            <p className="course-desc">{c.desc}</p>

            <div className="course-buttons">
              <button
                className="course-btn"
                onClick={() => enrollCourse(c.id)}
              >
                Enroll Course
              </button>

              <Link
                className="course-btn-outline"
                to={`/course/${c.id}`}
              >
                View Course
              </Link>
            </div>
          </div>
        ))}

        {/*  INSTRUCTOR ADDED COURSES */}
        {extraCourses.map((c) => (
          <div className="course-card-new" key={c.id}>
            <img src={c.img} className="course-img" alt="" />
            <h3 className="course-name">{c.title}</h3>
            <p className="course-desc">{c.desc}</p>

            <div className="course-buttons">
              <button
                className="course-btn"
                onClick={() => enrollCourse(c.id)}
              >
                Enroll Course
              </button>

              <Link
                className="course-btn-outline"
                to={`/course/${c.id}`}
              >
                View Course
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}