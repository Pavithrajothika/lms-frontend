import { FaGraduationCap } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-container">
      {/* HEADER SECTION */}
      <div className="home-hero">
        <FaGraduationCap className="home-icon" />
        <h1 className="home-title">Welcome to LMS</h1>
        <p className="home-subtitle">Learn anything. Anytime. Anywhere.</p>

        <Link to="/courses">
          <button className="home-btn">Start Learning</button>
        </Link>
      </div>

      {/* FEATURED COURSES */}
      <h2 className="section-title">Popular Courses</h2>

      <div className="course-preview-container">
        <div className="course-card">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmPUeWPhAs2rfELhXvcrrF2MMIIK0Lt0IjDiOsEdmziXUY6iq4C83Zzf4&s/301" alt="" />
          <h3>React Basics</h3>
          <p>Learn React step by step with real projects.</p>
        </div>

        <div className="course-card">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpje9Iah5RrFRjePmrGAbYwAtUIQwfoeAFjsuL_bI8kwIXB7WWdsoBZOI&s/302" alt="" />
          <h3>JavaScript Mastery</h3>
          <p>Deep dive into JavaScript with examples.</p>
        </div>

        <div className="course-card">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGsoYzhGE3JiQ0SkQAN3oCWoz2dypVSv2ETGSN75VHrLJaPObdnfl2FMI&s/301" alt="" />
          <h3>Full Stack Development</h3>
          <p>Become a full-stack developer from scratch.</p>
        </div>
      </div>
    </div>
  );
}
