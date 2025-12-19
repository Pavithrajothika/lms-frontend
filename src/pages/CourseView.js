import { useParams, Link, useLocation } from "react-router-dom";
import { getAllCourses } from "../utils/getAllCourses";

export default function CourseView() {
  const { id } = useParams();
  const courseId = Number(id);
  const location = useLocation();

  const fromContinueLearning =
    location.state?.fromContinueLearning === true;

  const allCourses = getAllCourses();

  const course = allCourses.find(
    c => Number(c.id) === courseId
  );

  const lessons = course?.videos || [];

  if (lessons.length === 0) {
    return (
      <div className="courseview-page">
        <h2>No lessons available</h2>
        <Link to="/courses">
          <button className="back-btn">⬅ Back</button>
        </Link>
      </div>
    );
  }

  const updateProgress = (lessonIndex) => {
  const user = localStorage.getItem("currentUser");
  const progressKey = `courseProgress_${user}`;

  const progressData =
    JSON.parse(localStorage.getItem(progressKey)) || {};

  let watchedLessons =
    progressData[courseId]?.watchedLessons || [];

  if (watchedLessons.includes(lessonIndex)) {
    alert("This lesson already completed");
    return;
  }

  watchedLessons.push(lessonIndex);

  const percent = Math.round(
    (watchedLessons.length / lessons.length) * 100
  );

  progressData[courseId] = {
    watchedLessons,
    percent
  };

  // CORRECT KEY
  localStorage.setItem(
    progressKey,
    JSON.stringify(progressData)
  );

  alert("Lesson marked as completed ");
};



  return (
    <div className="courseview-page">
      <h2 className="course-title">
        {course.title}
      </h2>

      <Link to="/continue-learning">
        <button className="back-btn">⬅ Back</button>
      </Link>

      <div className="lesson-grid">
        {lessons.map((l, i) => (
          <div
            className="lesson-card-new"
            key={i}
          >
            <h3>{l.title}</h3>
       <div className="video-wrapper">
            <iframe
              src={l.url}
              title={l.title}
              allowFullScreen
              
            ></iframe>
</div>
         {fromContinueLearning && (
  <button
    className="course-btn"
    onClick={() => updateProgress(i)}
  >
    ✅ Mark as Completed
  </button>
)}

          </div>
        ))}
      </div>
    </div>
  );
}
