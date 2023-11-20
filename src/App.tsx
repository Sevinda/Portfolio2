import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="px-[150px]">
      <Navbar />
      <Hero />
      {/* <p id="projects" className="h-screen">hey</p> */}
    </div>
  );
};

export default App;
