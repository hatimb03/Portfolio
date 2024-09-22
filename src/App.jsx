import Navbar from "./Components/Navbar";
import "./App.css";
import Home from "./Pages/Home";
import Skills from "./Pages/Skills";
import Projects from "./Pages/Projects";
import Collab from "./Pages/Collab";
import Footer from "./Components/Footer";
import { CiCircleChevUp } from "react-icons/ci";

const App = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className='bg-[#151a22] w-full min-h-screen sm:px-32 px-12 relative'>
      <Navbar scrollToSection={scrollToSection} />

      <div>
        <Home />
      </div>
      <div id='skills-section'>
        <Skills />
      </div>
      <div id='projects-section'>
        <Projects />
      </div>
      <div id='collab-section'>
        <Collab />
      </div>
      <Footer />

      {/* Scroll to top button */}
      <CiCircleChevUp
        className='fixed bottom-10 right-10 bg-[#7272ce] text-white text-2xl rounded-full w-14 h-14 cursor-pointer'
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      />
    </div>
  );
};

export default App;
