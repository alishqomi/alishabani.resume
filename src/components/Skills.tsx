import React from "react";

const skills = ["React", "Next.js", "TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3"];

const Skills: React.FC = () => (
  <section>
    <h2>مهارت‌ها / Skills</h2>
    <div className="grid-2">
      {skills.map((skill) => (
        <span key={skill} className="skill-badge">{skill}</span>
      ))}
    </div>
  </section>
);

export default Skills;
