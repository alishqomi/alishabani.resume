import Header from "./components/Header";
import PersonalInfo from "./components/profile";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Languages from "./components/Languages";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="max-w-5xl mx-auto p-4">
      <Header />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <PersonalInfo />
        <Skills />
        <Education />
        <Experience />
        <Languages />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default App;
