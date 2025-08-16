import React from "react";
import "./App.css";
import Header from "./components/Header";
import Profile from "./components/profile";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Languages from "./components/Languages";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <div className="app">
      <div className="resume-container">
        <Header />
        <Profile />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Languages />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;
