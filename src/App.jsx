import Navbar from "./Components/Navbar";
import "./App.css";
import Home from "./Pages/Home";

const App = () => {
  return (
    <div className='bg-[#151a22] w-full min-h-screen sm:px-32 px-12'>
      <Navbar />
      <Home />
    </div>
  );
};

export default App;
