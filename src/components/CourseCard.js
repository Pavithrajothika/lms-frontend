import "../App.css";

export default function CourseCard({ course }) {
  return (
    <div className="card" style={{ width: 280 }}>
      <img
        src={course.image}
        alt=""
        style={{ width: "100%", borderRadius: 10 }}
      />

      <h2>{course.title}</h2>
      <p>{course.description}</p>

      <a
        href={`/course/${course.id}`}
        className="button"
        style={{ marginTop: 10, display: "inline-block" }}
      >
        View Course
      </a>
    </div>
  );
}
