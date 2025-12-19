import { useParams, Link } from "react-router-dom";
import { getAllCourses } from "../utils/getAllCourses";

export default function Certificate() {
  const { id } = useParams();
  const courseId = Number(id);

 const userEmail = localStorage.getItem("currentUser");

const users =
  JSON.parse(localStorage.getItem("users")) || [];

const currentUserData =
  users.find(u => u.email === userEmail);

const name =
  currentUserData?.name || "Student";


  // USER-WISE PROGRESS
  const user = localStorage.getItem("currentUser");
  const progressKey = `courseProgress_${user}`;

  const progressData =
    JSON.parse(localStorage.getItem(progressKey)) || {};

  const courseProgress =
    progressData[courseId]?.percent || 0;

  const allCourses = getAllCourses();

  const course = allCourses.find(
    c => Number(c.id) === courseId
  );

  const courseName = course?.title || "Course";

  if (courseProgress !== 100) {
    return (
      <div style={{ padding: 40, textAlign: "center" }}>
        <h2>❌ Certificate Locked</h2>
        <p>This course is not completed yet.</p>

        <Link to="/continue-learning">
          <button>⬅ Back</button>
        </Link>
      </div>
    );
  }

  return (
    <div
      style={{
        padding: "50px",
        margin: "40px",
        border: "6px solid green",
        textAlign: "center",
      }}
    >
      <h1>🎓 Certificate of Completion</h1>

      <p>This is to certify that</p>
      <h2 style={{ color: "green" }}>{name}</h2>

      <p>has successfully completed the course</p>
      <h2>{courseName}</h2>

      <h3> 100% Progress</h3>

      <button onClick={() => window.print()}>
        🖨 Print / Save as PDF
      </button>
    </div>
  );
}
