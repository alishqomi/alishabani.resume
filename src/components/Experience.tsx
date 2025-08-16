import React from "react";

const experiences = [
  { role: "Front End Developer (React.js)", company: "سازمان خصوصی", date: "دی ۱۴۰۳ تاکنون" },
  { role: "کارشناس پایگاه داده های یکپارچه", company: "نیروی هوایی ارتش ایران", date: "شهریور ۱۴۰۱ تاکنون" },
  { role: "Back-End Developer (Python) / WordPress/ automation plugins", company: "هیواتک", date: "شهریور ۱۴۰۲ تا اسفند ۱۴۰۲" },
];

const Experience: React.FC = () => (
  <section>
    <h2>سوابق شغلی / Experience</h2>
    {experiences.map((exp) => (
      <div className="card" key={exp.role}>
        <h3>{exp.role}</h3>
        <p>{exp.company}</p>
        <p>{exp.date}</p>
      </div>
    ))}
  </section>
);

export default Experience;
