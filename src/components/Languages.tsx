import React from "react";

const languages = ["English | Advanced"];

const Languages: React.FC = () => (
  <section>
    <h2>زبان‌ها / Languages</h2>
    {languages.map((lang) => (
      <span key={lang} className="language-badge">{lang}</span>
    ))}
  </section>
);

export default Languages;
