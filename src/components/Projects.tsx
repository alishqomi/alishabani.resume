import React from "react";

const projects = [
  { title: "پروژه نمونه ۱", description: "توضیح کوتاه پروژه نمونه ۱" },
  { title: "پروژه نمونه ۲", description: "توضیح کوتاه پروژه نمونه ۲" },
];

const Projects: React.FC = () => (
  <section>
    <h2>پروژه‌ها / Projects</h2>
    {projects.map((proj) => (
      <div className="card" key={proj.title}>
        <h3>{proj.title}</h3>
        <p>{proj.description}</p>
      </div>
    ))}
  </section>
);

export default Projects;
