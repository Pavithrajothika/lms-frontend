import { useEffect, useState } from "react";
import "./AdminDashboard.css";


export default function AdminDashboard() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const allUsers =
      JSON.parse(localStorage.getItem("users")) || [];
    setUsers(allUsers);
  }, []);

  const deleteUser = (email) => {
    if (!window.confirm("Delete this user?")) return;

    const updatedUsers =
      users.filter(u => u.email !== email);

    localStorage.setItem(
      "users",
      JSON.stringify(updatedUsers)
    );
    setUsers(updatedUsers);
  };

  return (
    <div className="admin-page">

      {/*  USERS */}
      <h3> Users</h3>

      <table className="admin-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {users.map((u, i) => {
            const enrollKey =
              localStorage.getItem(
                `enrolledCourses_${u.email}`
              );

            return (
              <tr key={i}>
                <td>{u.name}</td>
                <td>{u.email}</td>

                <td>
                  {/*  STUDENT */}
                  {u.role === "student" && enrollKey && (
                    <button
                      className="view-btn"
                      onClick={() => {
                        localStorage.setItem(
                          "currentUser",
                          u.email
                        );
                        window.location.href =
                          "/continue-learning";
                      }}
                    >
                      ▶ Continue Learning
                    </button>
                  )}

                  {/*  INSTRUCTOR */}
                  {u.role === "instructor" && (
                    <button
                      className="view-btn"
                      onClick={() => {
                        const instructorCourses =
                          JSON.parse(
                            localStorage.getItem(
                              `extraCourses_${u.email}`
                            )
                          ) || [];

                        if (instructorCourses.length === 0) {
                          alert(
                            "This instructor has not added any courses yet"
                          );
                          return;
                        }

                        window.location.href =
                          `/course/${instructorCourses[0].id}`;
                      }}
                    >
                      👁 View
                    </button>
                  )}

                  {/*  DELETE */}
                  <button
                    className="danger-btn"
                    onClick={() => deleteUser(u.email)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* 📚 COURSES */}
      <h3>📚 Courses</h3>

      <button
        className="view-btn"
        onClick={() =>
          (window.location.href = "/courses")
        }
      >
        📚 Go to Courses Page
      </button>

    </div>
  );
}
