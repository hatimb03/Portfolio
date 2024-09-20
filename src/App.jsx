import Navbar from "./Components/Navbar";
import "./App.css";
import Home from "./Pages/Home";
import Skills from "./Pages/Skills";

const App = () => {
  return (
    <div className='bg-[#151a22] w-full min-h-screen sm:px-32 px-12'>
      <Navbar />
      <Home />
      <Skills />
    </div>
  );
};

export default App;
