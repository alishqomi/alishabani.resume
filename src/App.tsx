import React from 'react';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="resume-container">
      <h1>علی شبانی</h1>
      <h3>توسعه‌دهنده فرانت‌اند | React & WordPress</h3>

      <section>
        <h2>مهارت‌ها</h2>
        <ul>
          <li>React.js, HTML, CSS, JavaScript</li>
          <li>WordPress Theme & Plugin Development</li>
          <li>Responsive & RTL Design</li>
        </ul>
      </section>

      <section>
        <h2>نمونه‌کارها</h2>
        <ul>
          <li>Landing Page: <a href="#">مشاهده</a></li>
          <li>Todo App: <a href="#">مشاهده</a></li>
        </ul>
      </section>

      <section>
        <h2>تماس</h2>
        <p>Email: ali@example.com</p>
        <p>Tel: 0912xxxxxxx</p>
      </section>
    </div>
  );
}

export default App;
