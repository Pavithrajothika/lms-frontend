
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";
import EditCourse from "./pages/EditCourse";

import Home from "./pages/Home";
import Courses from "./pages/Courses";
import CourseView from "./pages/CourseView";
import Certificate from "./pages/Certificate";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import ContinueLearning from "./pages/ContinueLearning";
import StudentDashboard from "./pages/Dashboard/StudentDashboard";
import InstructorDashboard from "./pages/Dashboard/InstructorDashboard";
import AddCourse from "./pages/AddCourse";

import AdminDashboard from "./pages/Dashboard/AdminDashboard";

export default function App() {

  return (
    <BrowserRouter>
      <Navbar />
     

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/course/:id" element={<CourseView />} />

        {/* COURSE-WISE CERTIFICATE */}
        <Route
          path="/certificate/:id"
          element={
            <ProtectedRoute>
              <Certificate />
            </ProtectedRoute>
          }
        />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        <Route path="/add-course" element={<AddCourse />} />

        <Route
          path="/continue-learning"
          element={
            <ProtectedRoute>
              <ContinueLearning />
            </ProtectedRoute>
          }
        />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <StudentDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/instructor"
          element={
            <ProtectedRoute>
              <InstructorDashboard />
            </ProtectedRoute>
          }
        />

        <Route
  path="/edit-course/:id"
  element={
    <ProtectedRoute>
      <EditCourse />
    </ProtectedRoute>
  }
/>

      <Route
  path="/admin"
  element={
    <ProtectedRoute>
      <AdminDashboard />
    </ProtectedRoute>
  }
/>
        
      </Routes>
    </BrowserRouter>
  );
}
