export const getAllCourses = () => {
  const defaultCourses = [
    {
      id: 1,
      title: "React Basics",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmPUeWPhAs2rfELhXvcrrF2MMIIK0Lt0IjDiOsEdmziXUY6iq4C83Zzf4&s",
      desc: "Learn React step by step",
      videos: [
        { title: "React Introduction", url: "https://www.youtube.com/embed/SqcY0GlETPk" },
        { title: "React Components", url: "https://www.youtube.com/embed/kVeOpcw4GWY" },
      ]
    },
    {
      id: 2,
      title: "JavaScript Mastery",
      img: "https://toppng.com/uploads/preview/javascript-logo-number-angularjs-node-javascript-logo-11563241338go76tq0nxz.png",
      desc: "Deep Dive into JS",
      videos: [
        { title: "JS Introduction", url: "https://www.youtube.com/embed/W6NZfCO5SIk" },
        { title: "JS Functions", url: "https://www.youtube.com/embed/jS4aFq5-91M" },
      ]
    },
    {
      id: 3,
      title: "Java Basics",
      img: "https://4kwallpapers.com/images/wallpapers/java-black-2560x2560-16069.png",
      desc: "Deep Dive into Java",
      videos: [
        { title: "Java Intro", url: "https://www.youtube.com/embed/eIrMbAQSU34" },
        { title: "Java OOP", url: "https://www.youtube.com/embed/8cm1x4bC610" },
      ]
    },
    {
      id: 4,
      title: "Python Basics",
      img: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
      desc: "Deep Dive into Python",
      videos: [
        { title: "Python Intro", url: "https://www.youtube.com/embed/kqtD5dpn9C8" },
        { title: "Python Variables", url: "https://www.youtube.com/embed/6iF8Xb7Z3wQ" },
      ]
    }
  ];

  //  CORRECT KEY (GLOBAL FOR STUDENTS)
  const extraCourses =
    JSON.parse(localStorage.getItem("extraCourses_ALL")) || [];

  //  SAFETY: ensure videos always exists
  const safeExtraCourses = extraCourses.map(c => ({
    ...c,
    videos: c.videos || []
  }));

  return [...defaultCourses, ...safeExtraCourses];
};
