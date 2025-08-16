
const Skills = () => {
  const skills = [
    "React (پیشرفته)",
    "Next.js (آشنایی اولیه)",
    "TypeScript (پیشرفته)",
    "JavaScript (ES6+) (پیشرفته)",
    "HTML5 & CSS3 (پیشرفته)",
    "Python (متوسط)",
    "SQL Server (مقدماتی)",
    "VMware/ESX (پیشرفته)",
    "Visual Studio (متوسط)",
  ];

  return (
    <section className="bg-white shadow-md rounded-xl p-6 mt-6">
      <h2 className="text-2xl font-semibold mb-4">مهارت‌ها</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Skills;
