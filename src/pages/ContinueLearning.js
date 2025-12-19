import { Link } from "react-router-dom";
import { getAllCourses } from "../utils/getAllCourses";

export default function ContinueLearning() {

  //  USER-WISE ENROLL KEY
  const user = localStorage.getItem("currentUser");
  const enrollKey = `enrolledCourses_${user}`;

  const enrolledCourses =
    JSON.parse(localStorage.getItem(enrollKey)) || [];

  //  USER-WISE PROGRESS
  const progressKey = `courseProgress_${user}`;
  const progressData =
    JSON.parse(localStorage.getItem(progressKey)) || {};

  const allCourses = getAllCourses();

  const myCourses = allCourses.filter(course =>
    enrolledCourses.includes(course.id)
  );

  if (myCourses.length === 0) {
    return (
      <div className="courses-page">
        <h2 className="courses-title">
          ❌ No Courses Enrolled Yet
        </h2>
      </div>
    );
  }

  return (
    <div className="courses-page">
      <h2 className="courses-title">
        📚 My Enrolled Courses
      </h2>

      <div className="courses-grid">
        {myCourses.map(course => {
          const progress =
            progressData[course.id]?.percent || 0;

          return (
            <div
              className="course-card-new"
              key={course.id}
            >
              <p>📊 Progress: {progress}%</p>

              <div
                style={{
                  height: 8,
                  background: "#e5e7eb",
                  borderRadius: 10,
                  overflow: "hidden",
                  marginBottom: 12
                }}
              >
                <div
                  style={{
                    width: `${progress}%`,
                    height: "100%",
                    background:
                      progress === 100
                        ? "green"
                        : "#4f46e5",
                  }}
                />
              </div>

              <img
                src={course.img}
                className="course-img"
                alt=""
              />

              <h3>{course.title}</h3>

              <Link
                className="course-btn-outline"
                to={`/course/${course.id}`}
                state={{ fromContinueLearning: true }}
              >
                View Course
              </Link>

              {progress === 100 && (
                <button
                  className="course-btn"
                  style={{
                    marginTop: 12,
                    background: "green"
                  }}
                  onClick={() =>
                    (window.location.href =
                      `/certificate/${course.id}`)
                  }
                >
                  🎓 View Certificate
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
