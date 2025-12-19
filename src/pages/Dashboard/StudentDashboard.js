export default function StudentDashboard() {
  const user = localStorage.getItem("currentUser");
const enrollKey = `enrolledCourses_${user}`;

const enrolledCourses =
  JSON.parse(localStorage.getItem(enrollKey)) || [];

//  JUST READ NAME (no logic change)
  const users =
    JSON.parse(localStorage.getItem("users")) || [];

  const currentUserData =
    users.find(u => u.email === user);

  const name =
    currentUserData?.name || "Student";



  

  return (
    <div className="dashboard-page">
      <div className="dashboard-card-ui">
       <h2 className="dashboard-title">
  👋 Welcome {name}
</h2>

        <p className="dashboard-info">
          📘 Enrolled Courses: {enrolledCourses.length}
        </p>

        <button
          className="dashboard-btn"
          onClick={() => window.location.href = "/courses"}
        >
          ➕ Enroll New Course
        </button>

        <button
          className="dashboard-btn"
          onClick={() => window.location.href = "/continue-learning"}
        >
          ▶ Continue Learning
        </button>
      </div>
    </div>
  );
}
