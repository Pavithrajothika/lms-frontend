import "../../App.css";

export default function StudentDashboard() {

  const enrolled = Number(localStorage.getItem("enrolled")) || 0;
  const pending = Number(localStorage.getItem("pending")) || 0;
  const progress = Number(localStorage.getItem("progress")) || 0;
  const savedCourseId = localStorage.getItem("courseId");

  const goToCourses = () => {
    window.location.href = "/courses";
  };

  const continueLearning = () => {
    if (!savedCourseId || enrolled === 0) {
      alert("Please enroll in a course first!");
      return;
    }
    window.location.href = `/course/${savedCourseId}`;
  };

  return (
    <div className="dashboard-page">
      <div className="dashboard-card-ui">
        <h2 className="dashboard-title">Student Dashboard</h2>

        <p className="dashboard-info">📘 Enrolled Courses: {enrolled}</p>
        <p className="dashboard-info">📝 Assignments Pending: {pending}</p>
        <p className="dashboard-info">📊 Progress: {progress}%</p>

        {enrolled === 0 ? (
          <button className="dashboard-btn" onClick={goToCourses}>
            Enroll Course
          </button>
        ) : (
          <button className="dashboard-btn" onClick={continueLearning}>
            Continue Learning
          </button>
        )}
      </div>
    </div>
  );
}
