
const Experience = () => {
  const experiences = [
    {
      title: "Front End Developer (React.js)",
      company: "سازمان خصوصی",
      duration: "دی ۱۴۰۳ - اکنون",
    },
    {
      title: "کارشناس پایگاه داده‌های یکپارچه",
      company: "نیروی هوایی ارتش ایران",
      duration: "شهریور ۱۴۰۱ - اکنون",
    },
    {
      title: "Back-End Developer (Python) / WordPress",
      company: "هیواتک",
      duration: "شهریور ۱۴۰۲ - اسفند ۱۴۰۲",
    },
  ];

  return (
    <section className="bg-white shadow-md rounded-xl p-6 mt-6">
      <h2 className="text-2xl font-semibold mb-4">سوابق شغلی</h2>
      <ul className="space-y-4">
        {experiences.map((exp, index) => (
          <li key={index} className="border-l-4 border-blue-600 pl-4">
            <p className="font-semibold">{exp.title}</p>
            <p className="text-gray-600">{exp.company}</p>
            <p className="text-gray-400 text-sm">{exp.duration}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Experience;
