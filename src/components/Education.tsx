import React from "react";

const education = [
  {
    degree: "کارشناسی: مهندسی کامپیوتر-نرم افزار",
    university: "دانشگاه علوم و فنون هوایی شهید ستاری",
    gpa: "۱۵.۵",
    year: "۱۳۹۸ - ۱۴۰۱",
  },
];

const Education: React.FC = () => (
  <section>
    <h2>تحصیلات / Education</h2>
    {education.map((edu) => (
      <div className="card" key={edu.degree}>
        <h3>{edu.degree}</h3>
        <p>{edu.university}</p>
        <p>معدل: {edu.gpa}</p>
        <p>{edu.year}</p>
      </div>
    ))}
  </section>
);

export default Education;
