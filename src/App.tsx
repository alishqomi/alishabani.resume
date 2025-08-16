// src/App.tsx
import React from "react";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Languages from "./components/Languages";

const App: React.FC = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen">
      {/* Header */}
      <Header />

      <div className="container mx-auto px-4 py-8">
        {/* Profile */}
        <Profile />

        {/* Skills */}
        <Skills />

        {/* Projects */}
        <Projects />

        {/* Experience */}
        <Experience />

        {/* Education */}
        <Education />

        {/* Languages */}
        <Languages />

        {/* Contact */}
        <Contact />
      </div>
    </div>
  );
};

export default App;
